import { useState } from 'react'
import styled from 'styled-components'
import { ImageUser } from '../form'
import {MdOutlineArrowDropDown, MdOutlineArrowDropUp} from 'react-icons/md'
import { Button } from '../form'
import { removeToken } from '../../services/auth'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks'
import { remove } from '../../redux/slices/auth'

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;   
    cursor: pointer;
    position: relative;
`

const DropDownContainer = styled.div<{visible:boolean}>`
  width: 150px;
  position: absolute;
  right: -16px;
  top: 38px;
  background-color: var(--color9);
  padding: .3rem;
  display: ${props=>props.visible?'flex':'none'};
  flex-direction: column;
`
interface params {
  username: string;
}

const User = (params:params) => {
  const[visibleOptions, setVisibleOptions] = useState<boolean>(false)
  let navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSignOff = () => { 
    removeToken()
    dispatch(remove())  
    navigate("/",{replace: true})
  }

  return (
    <Container onClick={()=>setVisibleOptions(!visibleOptions)}>
        <ImageUser style={{height: "30px", width:"30px"}}/> 
        {visibleOptions? <MdOutlineArrowDropUp/>:<MdOutlineArrowDropDown />}        
        <DropDownContainer visible={visibleOptions}>
          <span>{params.username}</span>  
          <Button onClick={handleSignOff}>Cerrar sesión</Button>
        </DropDownContainer>
    </Container>
  )
}

export default User
