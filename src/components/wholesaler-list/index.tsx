import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../redux/hooks'
import { selectIsSortLocal, selectSortWholesalers, selectWholesaler } from '../../redux/slices/wholesalers'
import { wholesaler } from '../../types'
import Item from '../wholesaler-list-item'
import image from '../../assets/wholesaler.jpg'
import Contact from '../contact-form'
import ReactModal, {Styles} from 'react-modal'
import {GrFormClose} from 'react-icons/gr'
import { selectUser } from '../../redux/slices/auth'

ReactModal.setAppElement('#root');

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

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`
interface params {
    style?: React.CSSProperties;
}

const App = (params:params) => {
    let wholesalers:wholesaler[] = []
    const wholesalersState = useAppSelector(selectWholesaler)
    const wholesalerSort = useAppSelector(selectSortWholesalers)    
    const userCurrent = useAppSelector(selectUser)
    const isSortLocal = useAppSelector(selectIsSortLocal)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [wholesalerSelect, setWholesalerSelect] = useState<wholesaler>()
    
    wholesalers = isSortLocal? wholesalerSort: wholesalersState

    const handleClose = () => {
      setShowModal(false)
    }

    const handleContact = (wholesaler:wholesaler) => {
        setWholesalerSelect(wholesaler)
        setShowModal(true)
    }

    return (
        <Container style={params.style}>
            <ReactModal 
                isOpen={showModal} 
                style={style}
                >
                <GrFormClose style={styleClose} size='1.5rem' onClick={handleClose}/>
                <Contact userWholesaler={wholesalerSelect} userFarmer={userCurrent.username}/>
            </ReactModal>
            {wholesalers.map((v, i) => <Item
                key={i}
                image={image}
                onContact={handleContact}
                {...v}
            />)}
        </Container>
    )
}

export default App