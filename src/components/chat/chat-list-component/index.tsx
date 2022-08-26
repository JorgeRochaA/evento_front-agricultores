import styled from "styled-components";
import ChatComponent from "../chat-component/index";
import { chatroom } from "../../../types";

interface chats extends chatroom {
  newMessagesCount?: number;
  bg_color: string;
}

interface params {
  chats: chats[];
}

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
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
        id={chat.id}
        name={chat.name}
        chat={"1"}
        onOpenChat={function onOpenChat() {
          console.log("has echo click en un chat");
        }}
        newMessagesCount={chat.newMessagesCount}
        lastMessage={chat.lastMessage}
        bg_color={chat.bg_color}
      />
    );
  });
  return (
    <Container>{params.chats.length <= 0 ? EmptyChats : ShowChats}</Container>
  );
};

export default ChatListComponent;
