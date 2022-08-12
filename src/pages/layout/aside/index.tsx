import styled from 'styled-components'
import ItemAside from './itemAside'
import {BsSearch } from 'react-icons/bs'
import {BiMessageRoundedDetail } from 'react-icons/bi'

const Aside = styled.aside`
  flex: 0 0 8%;
  background-color:#fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: .5rem;
  position: fixed;
  height: 100%;
`

const App = ():JSX.Element => {
  return (
    <Aside>          
        <ItemAside page='/panel-user' text='Buscar Mayorista' pathname={location.pathname}>
            <BsSearch color='var(--color4)' size="30px"/>
        </ItemAside>
        <ItemAside page='/message' text='Mensajes' pathname={location.pathname}>
            <BiMessageRoundedDetail color='var(--color4)' size="30px"/>
        </ItemAside>
    </Aside>
  )
}

export default App