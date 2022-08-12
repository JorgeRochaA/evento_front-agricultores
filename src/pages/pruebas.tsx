import React, { useState } from "react";
import ContactForm from '../components/contact-form'
import ReactModal, {Styles} from 'react-modal'
import {GrFormClose} from 'react-icons/gr'

const style:Styles = {
  content: {
    maxWidth: '600px',
    margin: '0 auto',
    zIndex: '6',
    maxHeight: 'calc(100% - 138px)',
  },
  overlay: {
    zIndex: '5',
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
}

const styleClose:React.CSSProperties = {
  position: 'absolute',
  top: '1.5rem',
  right: '1rem',
  cursor: 'pointer'
}

ReactModal.setAppElement('#root');

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleClick = () => { 
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return <div>    
    <button onClick={handleClick}>click</button>
      <ReactModal 
        isOpen={showModal} 
        style={style}
        >
        <GrFormClose style={styleClose} size='1.5rem' onClick={handleClose}/>
        <ContactForm/>
      </ReactModal>
     
    </div>;
};

export default App;
