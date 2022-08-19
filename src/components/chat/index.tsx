import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChatListComponent from "../chat-list-component/index";
import MessageHeader from "../message-header/messageHeader";
import { getChatsByUser } from "../../services/chat";
import { chatroom } from "../../types";
import { selectUser } from "../../redux/slices/auth";
import { useAppSelector } from "../../redux/hooks";

interface chats extends chatroom {
  bg_color: string;
}
const Container = styled.div`
  grid-area: chats;
  height: 100%;
  max-width: 375px;
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

const App = () => {
  const user = useAppSelector(selectUser);
  const [chats, setChats] = useState<chats[]>([]);
  const [filteredChats, setFilteredChats] = useState<chats[]>([]);
  const [nameFilter, setNameFilter] = useState("");

  const getRandomColor = () => {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };

  useEffect(() => {
    getChatsByUser(user.username).then((res) => {
      let chatsBg: chats[] = [];
      res.forEach((chat) => {
        let newChat = Object.assign({}, chat, { bg_color: getRandomColor() });
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
        chat.name.toUpperCase().includes(nameFilter.toUpperCase())
      );
      setFilteredChats(filter);
    }
  }, [nameFilter]);

  return (
    <Container>
      <MessageHeader onSearch={onSearch} />
      <ChatListComponent chats={filteredChats} />
    </Container>
  );
};

export default App;
