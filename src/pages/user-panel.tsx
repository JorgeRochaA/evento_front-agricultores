import styled from 'styled-components'
import ItemAside from './Shared/itemAside'
import {BsSearch } from 'react-icons/bs'
import {BiMessageRoundedDetail } from 'react-icons/bi'
import WholesalerListOptions from '../components/wholesaler-list-options'
import { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { filterWholesalersAsync} from '../redux/slices/wholesalers'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 91vh;
  justify-content: space-between;  
  background-color:var(--color9);  
  box-sizing: border-box;
`
const Aside = styled.aside`
  flex: 0 0 8%;
  background-color:#fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: .5rem;
`
const Main = styled.main`
  flex: 0 0 86%;
`

const PanelUser = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{    
    dispatch(filterWholesalersAsync(null))
  },[])

  return (
    <Container>
      <Aside>          
        <ItemAside page='/panel-user' text='Buscar Mayorista' pathname={location.pathname}>
          <BsSearch color='var(--color4)' size="30px"/>
        </ItemAside>
        <ItemAside page='/message' text='Mensajes' pathname={location.pathname}>
          <BiMessageRoundedDetail color='var(--color4)' size="30px"/>
        </ItemAside>
      </Aside>
      <Main>
        <WholesalerListOptions/>
      </Main>
    </Container>
  )
}

export default PanelUser