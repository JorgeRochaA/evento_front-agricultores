import styled from "styled-components";
import ChatComponent, { params as paramsChatRoom } from "../chat-component";
import { chatroom } from "../../../types";
import { useAppDispatch } from "../../../redux/hooks";
import { addChatRoom } from "../../../redux/slices/chatroom";

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
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const EmptyChats = <Message>No hay chats para mostrar</Message>;
interface chats extends chatroom {
  newMessagesCount?: number;
  bg_color: string;
}

interface params {
  chats: chats[];
}

const ChatListComponent = (params: params) => {
  const dispatch = useAppDispatch();

  const handleOpenChat: paramsChatRoom["onOpenChat"] = (data) => {
    dispatch(addChatRoom(data));
  };

  const ShowChats = params.chats.map((chat, index) => {
    return (
      <ChatComponent
        key={index}
        id={chat.id}
        name={chat.name}
        chat={"1"}
        onOpenChat={handleOpenChat}
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
