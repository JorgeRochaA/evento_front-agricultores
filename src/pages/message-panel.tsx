import styled from "styled-components";
import Aside from "./layout/aside";
import Chat from "../components/chat/index";
import Message from '../components/message'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 91vh;
  justify-content: space-between;
  background-color: var(--color9);
  box-sizing: border-box;
  overflow-y: scroll;
`;

const Main = styled.main`
  width: 100%;
  margin-left: 125px;
  display: flex;
`;

const MessagePanel = () => {
  return (
    <Container>
      <Aside />
      <Main>
        <Chat />
        <Message/>
      </Main>
    </Container>
  );
};

export default MessagePanel;
