import styled from "styled-components";
import ChatComponent from "../chat-component/index";
import { chatroom } from "../../types";

interface chats extends chatroom {
  newMessagesCount?: number;
}

interface params {
  chats: chats[];
}

const Container = styled.div`
  height: auto;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Message = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  min-height: 100px;
`;

const ChatListComponent = (params: params) => {
  const EmptyChats = <Message>No hay chats para mostrar</Message>;
  const ShowChats = params.chats.map((chat, index) => {
    return (
      <ChatComponent
        key={index}
        name={chat.name}
        chat={"1"}
        onOpenChat={function onOpenChat() {
          console.log("has echo click en un chat");
        }}
        newMessagesCount={chat.newMessagesCount}
        lastMessage={chat.lastMessage}
      />
    );
  });
  return (
    <Container>{params.chats.length <= 0 ? EmptyChats : ShowChats}</Container>
  );
};

export default ChatListComponent;
