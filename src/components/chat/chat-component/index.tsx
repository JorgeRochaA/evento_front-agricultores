import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getLastMessageByChat } from "../../../services/chat";
import { chatroom, chatRoomState } from "../../../types";
import {createCreatedAt} from './utils'

const Card = styled.div`
	height: 75px;
	width: 100%;
	background-color: whitesmoke;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	cursor: pointer;
	border: 1px solid #e8e8e8;
`;

const ImageContainer = styled.div`
	height: 45px;
	width: 45px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const Letter = styled.div`
	color: whitesmoke;
	font-size: 1.5rem;
	text-transform: uppercase;
`;

const Dot = styled.div`
	height: 15px;
	width: 15px;
	background-color: #47b4ac;
	position: absolute;
	border-radius: 50%;
	bottom: 1px;
	left: 30px;
	border: 3px solid white;
`;

const NameContainer = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
`;

const Name = styled.div`
	font-family: "Noto Sans JP", sans-serif;
	font-weight: 600;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	max-width: 165px;
	min-width: 165px;
`;

const LastMessage = styled.div`
	font-family: "Roboto", sans-serif;
	font-size: 600;
	color: #878e9f;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	max-width: 165px;
`;

const HourContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Hour = styled.div`
	color: #878e9f;
`;

const NewTotalMessages = styled.div`
	height: 21px;
	width: 21px;
	background-color: #44aaa7;
	display: grid;
	place-items: center;
	border-radius: 50%;
	color: white;
	font-size: 13px;
`;

interface lastMessageState {
	message: string;
	created_at: string;
}

export interface params extends chatroom {
	chat: string;
	newMessagesCount?: number;
	onOpenChat: (chatRoom: chatRoomState) => void;
	bg_color: string;
}

const ChatComponent = (props: params) => {

	const [lastMessage, setLastMessage] = useState<lastMessageState|null>(null);

	useEffect(() => {
		if (props.lastMessage) {
			setLastMessage({
				message: props.lastMessage.textMessage,
				created_at: createCreatedAt(props.lastMessage.created_at),
			});
		} else {
			getLastMessageByChat(props.id).then((res) => {
				if (res.length > 0) {
					const message = res[res.length - 1];
					setLastMessage({
						message: message.textMessage,
						created_at: createCreatedAt(message.created_at),
					});
				}
			});
		}
	}, []);

	const handleClick = () => { 
		const {id, name: nameDefault} = props
		const name = nameDefault || ''
		props.onOpenChat({id, name})
	}
	return (
		<Card onClick={handleClick}>
			<ImageContainer style={{ backgroundColor: props.bg_color }}>
				<Letter>{props.name?.charAt(0)}</Letter>
				<Dot className="dot" />
			</ImageContainer>
			<NameContainer>
				<Name>{props.name}</Name>
				{lastMessage?.message && (
					<LastMessage>{lastMessage.message}</LastMessage>
				)}
			</NameContainer>
			<HourContainer>
				{lastMessage?.created_at && (
					<Hour>{lastMessage.created_at}</Hour>
				)}
				{props.newMessagesCount && (
					<NewTotalMessages>
						{props.newMessagesCount}
					</NewTotalMessages>
				)}
			</HourContainer>
		</Card>
	);
};

export default ChatComponent;
