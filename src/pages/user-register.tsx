import {
  Card, 
  ImageUser,
  Label,
  Button,
  Message,
  Error,
  Input  
} from '../components/form'
import { useState } from 'react'
import {styleForm} from '../components/styles'
import {useForm, SubmitHandler} from 'react-hook-form'
import { registerUser, formValuesRegister } from '../services/auth'
import { yupResolver } from '@hookform/resolvers/yup';
import {schemaRegister} from '../schemas/auth'
import useTimer from '../hooks/useTimer'

const App = () => {  
  const [isLoading, setLoading] = useState<boolean>(false)
  const {value: showMessage, initTimer} = useTimer(2)

  const {register, handleSubmit, formState:{errors}} = useForm<formValuesRegister>({
    mode: 'onBlur',
    resolver: yupResolver(schemaRegister)
  })

  const onSubmit:SubmitHandler<formValuesRegister> =  async (data) => { 

    try{
      setLoading(true)
      let res =  await registerUser({
        email: data.email,    
        password: data.password, 
        username: data.username
      }) 
     
      setLoading(false)
      initTimer()

    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }

  }

  return (
    <Card>
      <ImageUser/>
      {showMessage && <Message>Usuario Creado</Message>}
      <form action="" onSubmit={handleSubmit(onSubmit)} style={styleForm}>
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
    </Card>
  )
}

export default App