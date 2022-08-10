import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../common'

const ProductButton = styled(Button)<{isSelect:boolean}>`
    background-color: #F9F9FB;
    border: 2px solid ${props => props.isSelect? 'var(--color4)' : 'var(--color8)'};
    color: ${props => props.isSelect? 'var(--color4)' : 'var(--color8)'};
    padding: 0.8rem 0.75rem;
    &:hover {
        background-color: #F9F9FB;        
        border: 2px solid ${props => props.isSelect? 'var(--color4)' : 'var(--color8)'};
    }
`
interface params {
    name: string;
    onSelect?: (name: string, state: boolean)=>void
}

const App = (params:params):JSX.Element => {
    const [select, setSelect] = useState<boolean>(false)

    const handleClick = () => { 
        setSelect(!select)
        if(typeof params.onSelect === 'function') params.onSelect(params.name, !select)
    }

    return (
        <ProductButton onClick={handleClick} isSelect={select}>
            {params.name}
        </ProductButton>
    )
}

export default App