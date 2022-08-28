import styled from "styled-components";

import MessageInput from "./message_input/messageInput";
import Header from "./message-header";

const Container = styled.div`
  flex: 0 0 50%;
`;

const App = () => {
  return (
    <Container>
      <Header name="Usuario" />
      <MessageInput
        chat={1} //valor quemado
        sender={"testJorge"} //valor quemado
        onNewMessage={function onNewMessage() {
          console.log("hay un nuevo mensaje");
        }}
      />
    </Container>
  );
};

export default App;
