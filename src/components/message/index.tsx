import styled from 'styled-components'
import Header from './message-header'

const Container = styled.div`
    grid-area: messages;
`

const App = () => {
  return (
    <Container>
      <Header name='Usuario'/>
    </Container>
  )
}

export default App