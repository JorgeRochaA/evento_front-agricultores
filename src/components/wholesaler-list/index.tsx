import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../redux/hooks'
import { selectIsSortLocal, selectSortWholesalers, selectWholesaler } from '../../redux/slices/wholesalers'
import { wholesalerResponse } from '../../services/wholesalers'
import Item from '../itemWholesaler/ItemWholesaler'
import image from '../../assets/wholesaler.jpg'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`

const App = () => {
    const wholesalersState = useAppSelector(selectWholesaler)
    const wholesalerSort = useAppSelector(selectSortWholesalers)
    let wholesalers:wholesalerResponse[] = []
    const isSortLocal = useAppSelector(selectIsSortLocal)
    
    wholesalers = isSortLocal? wholesalerSort: wholesalersState

    return (
        <Container>
            {wholesalers.map((v, i) => <Item
                key={i}
                country={v.country}
                description={v.description}
                id={v.id}
                image={image}
                name={v.name}
                products={[v.productType]}
                sector={v.sector}
            />)}
        </Container>
    )
}

export default App