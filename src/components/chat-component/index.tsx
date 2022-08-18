import React from "react";
import styled from "styled-components";
import { chatroom } from "../../types";

interface params extends chatroom {
  chat: string;
  newMessagesCount?: number;
  onOpenChat: (chat: string) => void;
}

const Card = styled.div`
  height: 75px;
  width: 375px;
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

const ChatComponent = (props: params) => {
  // const dateS = (Date) props.lastMessage?.createdAt;
  // console.log(props.lastMessage?.createdAt.getUTCHours());
  // let create_at = `${props.lastMessage?.createdAt
  //   .getHours()
  //   .toString()
  //   .padStart(2, "0")}:${props.lastMessage?.createdAt
  //   .getMinutes()
  //   .toString()
  //   .padStart(2, "0")}`;
  let created_at = "11:55";

  return (
    <Card onClick={() => props.onOpenChat(props.chat)}>
      <ImageContainer
        style={{
          backgroundColor:
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
        }}
      >
        <Letter>{props.name.charAt(0)}</Letter>
        <Dot className="dot"></Dot>
      </ImageContainer>
      <NameContainer>
        <Name>{props.name}</Name>
        {props.lastMessage?.message && (
          <LastMessage>{props.lastMessage?.message}</LastMessage>
        )}
      </NameContainer>
      <HourContainer>
        {props.lastMessage?.createdAt && <Hour>{created_at}</Hour>}
        {props.newMessagesCount && (
          <NewTotalMessages>{props.newMessagesCount}</NewTotalMessages>
        )}
      </HourContainer>
    </Card>
  );
};

export default ChatComponent;
