import styled from "styled-components";
import Aside from "./layout/aside";
import Chat from "../components/chat/index";
import Message from "../components/message";

const media = {
  table: "@media screen and (min-width: 895px)",
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 91vh;
  justify-content: flex-start;
  background-color: var(--color9);
  box-sizing: border-box;
  overflow-y: scroll;
  flex-direction: column;
  ${media.table} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${media.table} {
    flex-direction: row;
    margin-left: 125px;
  }
`;

const MessagePanel = () => {
  return (
    <Container>
      <Aside />
      <Main>
        <Chat />
        <Message />
      </Main>
    </Container>
  );
};

export default MessagePanel;
