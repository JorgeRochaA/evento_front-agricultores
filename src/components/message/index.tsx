import React from 'react'
import styled from 'styled-components'
import MessageInput from '../message_input/messageInput'

const Container = styled.div`
    grid-area: message;
`

const App = () => {
  return (
    <Container>
      <MessageInput/>
    </Container>
  )
}

export default App