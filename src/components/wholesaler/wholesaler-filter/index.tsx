import React from 'react'
import styled from 'styled-components'
import FilterBy, {params as paramsFilterBy} from '../wholesaler-filter-by'
import { useAppDispatch } from '../../../redux/hooks'
import { filterWholesalersAsync, setOptionsFilter } from '../../../redux/slices/wholesalers'
import { property } from '../../../types'
import { CardFilters } from '../../common'

const Container = styled.div`
  border-radius: .5rem;
  padding: 0 1rem 1rem 0;
  display: none;
  @media screen and (min-width: 1253px) {
      display: block;
  }
`
const Title = styled.h3`
  color: var(--color3);
  text-align: center;
`

interface params {
    style?: React.CSSProperties;
}

const filtersBy:paramsFilterBy[] = [
  {placeholder: 'Nombre de mayorista', title: 'Mayorista', name: 'name'},
  {placeholder: 'Nombre del pais', title: 'Pais', name: 'country'},
  {placeholder: 'Nombre del sector', title: 'Sector', name: 'sector'},
]

const App = (params: params):JSX.Element => {
  const dispatch = useAppDispatch()

  const handleChange = (property:property) => { 
    dispatch(setOptionsFilter(property))
    dispatch(filterWholesalersAsync(null))
  }


  return (
    <Container style={params.style}>
        <CardFilters>
          <Title>Filtrar Por</Title>
        </CardFilters>
        
        {filtersBy.map((v, i) => <FilterBy 
          key={i} {...v}
          onChange={handleChange}
          />
        )}
    </Container>
  )
}

export default App