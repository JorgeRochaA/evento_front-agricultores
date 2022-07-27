import React, { useState } from 'react'
import {Message} from './index'
import {GrFormClose} from 'react-icons/gr'

interface params {
    children: React.ReactNode;
    type: number;
}

const styleIconClose: React.CSSProperties = {
    position: "absolute",
    top: "2px",
    right: "2px",
    cursor: 'pointer'
}

const App = (params: params):JSX.Element => {
    let backgroundColor:string = (params.type === 1) ? "var(--color1)": "var(--colorError)"
    let color:string = (params.type === 1) ? "var(--color2)": "#fff"
    const [visible, setVisible] = useState<string>("block")

    const handleClose = () => setVisible("none")

    return (
        <Message style={{backgroundColor, color, position: "relative", display: visible}}>
            {params.children}            
            {(params.type === 1) &&
                <GrFormClose 
                    onClick={handleClose} 
                    style={styleIconClose}
                    color={color}
                />
            }
        </Message>
    )
}

export default App