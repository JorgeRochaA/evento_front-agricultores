import styled from 'styled-components'
import MessageInput from '../message_input/messageInput'
import Header from './message-header'

const Container = styled.div`
    grid-area: messages;
`

const App = () => {
  return (
    <Container>     
      <Header name='Usuario'/>
      <MessageInput/>
    </Container>
  )
}

export default App