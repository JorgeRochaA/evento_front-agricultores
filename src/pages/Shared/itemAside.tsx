import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Text = styled.span`
    font-size: .8rem;
    font-weight: bold;
    overflow-wrap: break-word;
    text-align: center;
    line-height: 1.2;
    color: var(--color3);
`
const style: React.CSSProperties = {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '.4rem',
    margin: '.8rem 0',    
}

interface params {
    page: string;
    children: React.ReactNode;
    text: string;
    pathname: string;
}

const App = (params: params) => {
    let styleLink:React.CSSProperties = (params.pathname === params.page)        
        ? style
        : {...style, opacity: '.5' }

    return (    
        <Link to={params.page} style={styleLink}>        
            {params.children}
            <Text>{params.text}</Text>
        </Link>                    
    )
}

export default App