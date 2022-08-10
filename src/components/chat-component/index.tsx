import React from "react";
import styled from "styled-components";

interface params {
  wholesalerName: string;
  lastMessage?: {
    message: string;
    created_at: Date;
  };
  image: string;
  newMessagesCount?: number;
}

const Card = styled.div`
  height: 75px;
  width: 350px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 25px;
  margin-left: 25px;
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

const Image = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
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

const WholesalerNameContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
`;

const WholesalerName = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 600;
`;

const LastMessage = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 600;
  color: #878e9f;
`;

const HourContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hour = styled.div`
  color: #c5c9d3;
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
  return (
    <Card>
      <ImageContainer>
        <Image src={props.image} alt="user image" />
        <Dot className="dot"></Dot>
      </ImageContainer>
      <WholesalerNameContainer>
        <WholesalerName>Cuwa Mika</WholesalerName>
        <LastMessage>I hope you get well soon</LastMessage>
      </WholesalerNameContainer>
      <HourContainer>
        <Hour>10:30</Hour>
        <NewTotalMessages>7</NewTotalMessages>
      </HourContainer>
    </Card>
  );
};

export default ChatComponent;
