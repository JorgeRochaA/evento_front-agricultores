import {useState} from 'react';
import {IoIosSend} from 'react-icons/io';
import './messageInputStyles.css'

function MessageInput() {

    const [message,setMessage] = useState('');

    const handleChange = (e:any) => {
        setMessage(e.target.value)
    }

    const handleSubmit = () => {
        //LOGICA DE ENVIO
        setMessage('')
    }

  return (
    <div className='input-container'>
        <input type="text" 
        placeholder='Mensaje...'
        className='input' name="message" value={message} onChange={e => handleChange(e)}/>
        <button type="button" className='btn' onClick={handleSubmit}>
        <IoIosSend/>
        </button>
    </div>
  )
}

export default MessageInput