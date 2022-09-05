import { useState } from "react"
import  '../../chat/chat-header/messageHeaderStyles.css'

interface params {
    onSearch?: (value:string)=>void;
    styleContainer?: React.CSSProperties;
}

const input = (params: params):JSX.Element => {
    const [data,setData] = useState('')

    const handleEnterKey = (event:any) => {
        if(event.key === "Enter"){          
            if(typeof params.onSearch === 'function') params.onSearch(data)
        }
    }

    const showBtnClear = () => data.length !== 0 ? true : false

    const clearInput = () =>setData('')

    const handleChange = (event:any)=>{
        setData(event.target.value)
    }

    return (
        <div className="secondary-container" style={params.styleContainer}>
            <input
                id="input"
                type="text"
                value={data}
                className="input"
                placeholder="Buscar..."
                autoComplete="off"
                onChange={handleChange}
                onKeyPress={(event)=>handleEnterKey(event)}
                style={{height: 'initial'}}
            />
                <button
                    className={showBtnClear() ? 'btnClear show' : 'noShow'}
                    onClick={clearInput}
                >
                    X
                </button>
        </div>
    )
}

export default input