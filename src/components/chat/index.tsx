import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChatListComponent from "./chat-list-component/index";
import ChatHeader from "./chat-header";
import { getChatsByUser } from "../../services/chat";
import { chatroom } from "../../types";
import { selectUser } from "../../redux/slices/auth";
import { useAppSelector } from "../../redux/hooks";
import { getRandomColor } from "./utils";

interface chats extends chatroom {
	bg_color: string;
}
const Container = styled.div`
	flex: 0 0 50%;
	height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	border-right: 1px solid #e8e8e8;
	::-webkit-scrollbar {
		width: 1px;
	}
	::-webkit-scrollbar-track {
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background: transparent;
	}
	::-webkit-scrollbar-thumb:hover {
		background: transparent;
	}
`;

const getNameChat = (chat: chatroom, username: string): string => { 
	const emisor = chat.emisor || ''
	const receiver = chat.receiver || ''
	return username === emisor? receiver : emisor
}


const App = () => {
	const user = useAppSelector(selectUser);
	const [chats, setChats] = useState<chats[]>([]);
	const [filteredChats, setFilteredChats] = useState<chats[]>([]);
	const [nameFilter, setNameFilter] = useState("");

	useEffect(() => {
		getChatsByUser(user.username).then((res) => {
			let chatsBg: chats[] = [];
			res.forEach((chat) => {
				let newChat = Object.assign({}, chat, {
					bg_color: getRandomColor(),
					name: getNameChat(chat, user.username)
				});
				chatsBg.push(newChat);
			});
			setChats(chatsBg);
			setFilteredChats(chatsBg);
		});
	}, []);

	const onSearch = (value: string): void => {
		setNameFilter(value);
	};

	useEffect(() => {
		if (nameFilter.length == 0) {
			setFilteredChats(chats);
		} else {
			let filter = chats.filter((chat) =>
				chat?.name?.toUpperCase().includes(nameFilter.toUpperCase())
			);
			setFilteredChats(filter);
		}
	}, [nameFilter]);

	return (
		<Container>
			<ChatHeader onSearch={onSearch} />
			<ChatListComponent chats={filteredChats} />
		</Container>
	);
};

export default App;
