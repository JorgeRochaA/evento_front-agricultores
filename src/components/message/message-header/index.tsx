import styled from 'styled-components'
import Image from './image'
import Input from './input'
import {BiArrowBack } from 'react-icons/bi'

const Container = styled.div`
  height: 50px;
  background-color: var(--color2);
  display: flex; 
  align-items: center; 
  justify-content: space-between;
  gap: 1rem;
  padding: 0 .5rem;
  width: 100%;
  box-sizing: border-box;
` 

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
const TextUser = styled.span`
  color: var(--color1);
  height: 1rem;
  font-weight: bold;
`

const TextState = styled.span`
  color: var(--color8);
  font-size: .6rem;
`
const OptionsContainer = styled.div`
  display: flex;
  align-items: center; 
`

const InfoContainer = styled(OptionsContainer)`
  gap: .5rem;
`

interface params {
  name: string;
  state: string;
}

const App = (params: params) => {
  const handleSearch = (value:string) => { 

  }

  const handleClose = () => {
    
  }

  return (
    <Container>
        <InfoContainer>
          <BiArrowBack  color='var(--color1)' style={{cursor:'pointer'}} onClick={handleClose}/>
          <Image name={params.name}/>
          <TextContainer>
            <TextUser>{params.name}</TextUser>
            <TextState>{params.state}</TextState>
          </TextContainer>
        </InfoContainer>
        <OptionsContainer>
          <Input onSearch={handleSearch}/>
        </OptionsContainer>        
    </Container>
  )
}

App.defaultProps = {
  state: 'Online'
}

export default App