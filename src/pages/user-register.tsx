import React from 'react'
import styled from 'styled-components'
import user from '../assets/user.png'

const Container = styled.main`
  max-width: 400px;
  box-shadow: 0 4px 4px #5E738E80;
  padding: 40px;
  border-radius: 4px;
  background-color: var(--color9);
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0,0,0,.125);
`

const ImageUser = styled.img`
  display: block;
  border-radius: 50%;
  height: 96px;
  width: 96px;
`
const Input = styled.input`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  display: block;
  border-radius: 0.25rem;  
  border: 1px solid #ced4da;
  margin-top: .5rem;
  width: 100%;
`
const Label = styled.label`
  margin-top: .5rem;
  align-self: flex-start;
  color: var(--color3);
  font-weight: bold;
`

const Button = styled.button`
  margin-top: .5rem;
  padding: 0.375rem 0.75rem;
  color: var(--color9);
  background-color: var(--color3);
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`
const registrarUsuario = () => {
  const handleSubmit = (e) => { 

  }
  return (
    <Container>
      <ImageUser src={user}/>
      <form action="" onSubmit={handleSubmit}>
        <Label htmlFor="">Usuario</Label>
        <Input type="text" name="username"/>
        <Label htmlFor="">Correo electronico</Label>
        <Input type="text" />
        <Label htmlFor="">Contraseña</Label>
        <Input type="text" name="password"/>
        <Button>Registrarse</Button>
      </form>

    </Container>
  )
}

export default registrarUsuario