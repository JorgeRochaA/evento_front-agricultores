import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Container = styled.nav`
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
  & > a {
    text-decoration:none;
    color: inherit;
  }

`

const navbar = () => {
  return (
    <Container>
        <Link to="/">
            <Logo src={logo} alt="logo"/>
        </Link>   
          <ItemContainer>
              <Item>Lista de mayorista</Item>
              <Item>
              <Link to="/register">Registrase</Link>
              </Item>
              <Item>
              <Link to="/login" className='link'>Iniciar sesión</Link>
              </Item>
          </ItemContainer>
    </Container>
  )
}

export default navbar