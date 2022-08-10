import { useState } from 'react';
import './messageHeaderStyles.css';

interface items{
    onSearch: (value:string)=>void
}

function MessageHeader(itemsObj:items) {

    const [data,setData] = useState('')

    const handleEnterKey = (event:any) => {
        if(event.key === "Enter"){
            //LOGICA PARA BUSCAR
            setData('')
        }
    }

    const handleChange = (event:any)=>setData(event.target.value)

  return (
    <div className='main-container test'>
        <h3 className="title">MENSAJES</h3>
        <div className="secondary-container">
            <input
                id="input"
                type="text"
                value={data}
                className="input"
                placeholder="Buscar..."
                autoComplete="off"
                onChange={handleChange}
                onKeyPress={(event)=>handleEnterKey(event)}
            />
        </div>
    </div>
  )
}

export default MessageHeader