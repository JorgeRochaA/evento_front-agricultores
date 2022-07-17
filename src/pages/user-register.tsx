import React, { useState } from 'react'
import styled from 'styled-components'
import user from '../assets/user.png'
import {useForm, SubmitHandler} from 'react-hook-form'
import { registerUser, formValues } from '../services/auth'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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
const Error = styled.p`
  color: red;
`

const Message = styled.div`
  border-radius: 5px;
  background-color: var(--color1);
  color: var(--color2);
  text-align: center;
  height: 40px;
  margin: .5rem 0;
  padding: .5rem;
  width: 100%;
`

const schema = yup.object().shape({
  username: yup.string().min(6, "Ingrese al menos 6 caracteres").required("Usuario requerido"),
  password: yup.string().min(6, "Ingrese al menos 6 caracteres").required("Constraseña requerido."),
  email: yup.string().email( "Debe ser un correo").required("Correo requerido.")
}).required();


const App = () => {  
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(false)
  let timer:ReturnType<typeof setTimeout>

  const {register, handleSubmit, formState:{errors}} = useForm<formValues>({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit:SubmitHandler<formValues> =  async (data) => { 

    try{
      setLoading(true)
      let res =  await registerUser({
        email: data.username, 
        password: data.password, 
        username: data.username
      }) 
      setIsRegister(true)
      setLoading(false)
      if(timer) clearInterval(timer)
      timer = setTimeout(function(){
        setIsRegister(false)
      }, 2000);

    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }

  }

  return (
    <Container>
      <ImageUser src={user}/>
      {isRegister && <Message>Usuario Creado</Message>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="">Usuario</Label>
        <Input type="text" {...register("username")}/>
        {errors.username && <Error>{errors.username.message}</Error>}
        <Label htmlFor="">Correo electronico</Label>
        <Input type="text" {...register("email")} />
        {errors.email && <Error>{errors.email.message}</Error>}
        <Label htmlFor="">Contraseña</Label>
        <Input type="password" {...register("password")}/>
        {errors.password && <Error>{errors.password.message}</Error>}
        <Button>{isLoading? "Procesando ..." : "Registrarse"}</Button>
      </form>

    </Container>
  )
}

export default App