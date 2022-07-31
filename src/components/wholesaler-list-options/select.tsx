import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
    border: 2px solid #EFEFEF;
    border-radius: 2px;
    cursor: pointer;
    padding: .5rem 1rem;
    color: var(--color2);
    font-size: 1rem;

    &:focus{
        outline: 0;
    }
`
const Option = styled.option`
    color: var(--color2);
`

export interface optionType {
    value: string,
    text: string
}

export interface params {
    options: optionType[],
    onChange?: (value:string)=>void
}

const App = ({options, onChange}: params) => {
    
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => { 
        if(typeof onChange === 'function') onChange(e.target.value)
    }   

    return (
        <Select onChange={handleChange}>
            {options.map((v, i) => <Option key={i} value={v.value}>{v.text}</Option>)}
        </Select>
    )
}

export default App