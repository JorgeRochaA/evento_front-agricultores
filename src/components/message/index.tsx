import styled from "styled-components";

import MessageInput, { props as paramsInput } from "./message_input";
import Header from "./message-header";
import MessageList from "./message-list";
import { Message } from "../common";
import { message } from "../../types";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getMessagesByChatroom } from "../../services/chat";
import { selectUser } from "../../redux/slices/auth";
import { clearChatRoom, selectChatRoom } from "../../redux/slices/chatroom";

const Container = styled.div`
	flex: 0 0 50%;
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const MessageVisible = styled(Message)`
	margin: 0;
	border-radius: 0;
	font-weight: bold;
	background-color: inherit;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const App = () => {
	const chatroom = useAppSelector(selectChatRoom);
	const user = useAppSelector(selectUser);
	const [messages, setMessages] = useState<message[]>([]);
	const [visibleMessages, setVisibleMessage] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (chatroom.id === 0) {
			setVisibleMessage(false);
		} else {
			setVisibleMessage(true);
			getMessages();
		}
	}, [chatroom.id]);

	const getMessages = () => {
		setLoading(true);
		getMessagesByChatroom(chatroom.id)
			.then((res) => {
				setMessages(res);
			})
			.finally(() => setLoading(false));
	};

	const handleClose = () => {
		dispatch(clearChatRoom());
		setVisibleMessage(false);
	};

	const handleNewMessage: paramsInput["onNewMessage"] = (message) => {
		setMessages((messagesPrev) => [...messagesPrev, message]);
	};

	return (
		<Container>
			{visibleMessages ? (
				<>
					<Header
						name={chatroom.name}
						onClose={handleClose}
						colorImage={chatroom.color}
					/>
					<MessageList messages={messages} username={user.username} />
					<MessageInput
						chat={chatroom.id}
						onNewMessage={handleNewMessage}
						sender={user.username}
					/>
				</>
			) : (
				<MessageVisible>
					<p>Seleccione un chat para ver los mensajes</p>
				</MessageVisible>
			)}
		</Container>
	);
};

export default App;
