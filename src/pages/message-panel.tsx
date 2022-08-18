import styled from "styled-components";
import Aside from "./layout/aside";
import Chat from "../components/chat/index";
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
  flex: 0 0 86%;
  margin-left: 125px;
  display: grid;
  grid-template-areas: "chats messages";
`;

const MessagePanel = () => {
  return (
    <Container>
      <Aside />
      <Main>
        <Chat />
      </Main>
    </Container>
  );
};

export default MessagePanel;
