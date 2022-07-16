import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import buyer from '../assets/buyer.jpg'
import icon from '../assets/search.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  color: var(--color2);
  height: 1vh;
`
const NavBar = styled.nav`
  width: 100%;
  height: 56px;
  color: var(--color2);
  background-color: #F5F5F5;
  box-shadow: 0px 4px #5E738E80;
  padding: .5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

`
const Logo = styled.img`
  height: 54px;
`

const ItemContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  font-weight: bold;
  flex-grow: 1;
  justify-content: end;
`
const Item = styled.div`
`
const Banner = styled.section`
  margin-top: 4px;
  padding: 3rem 1rem;
  display: flex;
  gap: 2rem;
  background-color: var(--color2);
`

const Contenido = styled.div`
  width: 50%;
`

const Title = styled.p`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 3rem;
  line-height: 3rem;
  color: var(--color4);
`

const Image = styled.div`
  
`

const BuyerImage = styled.img`
  width: 600px;
  display: block;
  border-radius: 10px;
`

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  color: Var(--color6);
`
const SearchContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`

const Search = styled.input`
    line-height: 2.5rem;
    font-size: 1rem;
    width: 17rem;
    background: none;
    border: 1px solid rgba(255,255,255,.4);
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
`
const Icon = styled.img`
    padding: 0 1rem;
    border-radius: 0 .25rem .25rem 0;
    border: none;
    cursor: pointer;
    background-color: var(--color6);
    object-fit: scale-down;
`

const page = () => {
  return (
    <Container>
      <NavBar>
        <Logo src={logo} alt="logo"/>
        <ItemContainer>
            <Item>Lista de mayorista</Item>
            <Item>Registrarse</Item>
            <Item>
              <Link to="/login" className='link'>Iniciar sesión</Link>
            </Item>
        </ItemContainer>
      </NavBar>
      <Banner>
        <Contenido>
          <Title>Encuentre su cliente mayorista</Title>
          <Paragraph>Proporcionamos a los agricultores información sobre cómo encontrar y vender sus productos, podemos ayudarlos a aumentar sus ingresos.</Paragraph>
          <SearchContainer>
            <Search type="text" placeholder='Buscar mayorista por producto' />
            <Icon src={icon} alt="icon" />            
          </SearchContainer>
        </Contenido>
        <Image>
            <BuyerImage src={buyer} alt="buyer" />
        </Image>
      </Banner>
    </Container>
  )
}

export default page