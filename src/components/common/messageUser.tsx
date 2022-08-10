import React, { useState } from 'react'
import {Message} from './index'
import {GrFormClose} from 'react-icons/gr'
import { messageType } from '../../types';

const styleIconClose: React.CSSProperties = {
    position: "absolute",
    top: "2px",
    right: "2px",
    cursor: 'pointer'
}

interface params {
    children: React.ReactNode;
    type: messageType;
}

const App = (params: params):JSX.Element => {
    let backgroundColor:string = (params.type === messageType.SUCCEEDED) ? "var(--color10)": "var(--colorError)"
    let color:string = (params.type === messageType.SUCCEEDED) ? "var(--color2)": "#fff"

    const [visible, setVisible] = useState<string>("block")

    const handleClose = () => setVisible("none")

    return (
        <Message style={{backgroundColor, color, position: "relative", display: visible}}>
            {params.children}            
            {(params.type === messageType.SUCCEEDED) &&
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