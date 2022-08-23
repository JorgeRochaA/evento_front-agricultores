import styled from "styled-components";
import MessageInput from "./message_input";
import Header from "./message-header";
import MessageList from "./message-list";
import { message } from "../../types";
import {messagesChat} from '../../services/data.json'
import { useState } from "react";

const Container = styled.div`
	flex: 0 0 50%;
`;

const App = () => {
	const [messages, setMessages]  = useState<message[]>(messagesChat);

	return (
		<Container>
			<Header name="Usuario" />
			<MessageList messages={messages} username={"agricultor"} />
			<MessageInput />
		</Container>
	);
};

export default App;
