import styled from 'styled-components'
import Aside from './layout/aside'
import WholesalerListOptions from '../components/wholesaler/wholesaler-list-options'
import { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { filterWholesalersAsync} from '../redux/slices/wholesalers'
import List from '../components/wholesaler-list'
import Filter from '../components/wholesaler/wholesaler-filter'
import Paginate from '../components/wholesaler/wholesaler-paginate'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 91vh;
  justify-content: space-between;  
  background-color:var(--color9);  
  box-sizing: border-box;
  overflow-y: scroll;
`
const Main = styled.main`
  flex: 0 0 86%;
  margin: 0 40px 0 160px;
  display: grid;
  grid-template-areas: 
    "options options"
    "filter list"
    "filter paginate"
  ;
`

const PanelUser = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{    
    dispatch(filterWholesalersAsync(null))
  },[])

  return (
    <Container>
      <Aside/>
      <Main>
        <WholesalerListOptions style={{gridArea: 'options'}}/>
        <Filter style={{gridArea: 'filter'}}/>
        <List style={{gridArea: 'list'}}/>
        <Paginate style={{gridArea: 'paginate'}}/>
      </Main>
    </Container>
  )
}

export default PanelUser