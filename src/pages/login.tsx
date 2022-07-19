import {useState} from 'react'
import {styleForm} from '../components/styles'
import {
  Card, 
  ImageUser,
  Label,
  Button,
  MessageError,
  Input  
} from '../components/form'
import { useForm, SubmitHandler } from 'react-hook-form'
import { loginUser, formValues, setToken } from '../services/auth'
import { useNavigate } from 'react-router-dom'
import useTimer from '../hooks/useTimer'

const login = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const {value: showMessage, initTimer} = useTimer(2)
  const {register, handleSubmit} = useForm<formValues>()
  let navigate = useNavigate()

  const onSubmit:SubmitHandler<formValues> =  async (data) => { 

    try{
      setLoading(true)
        let res =  await loginUser({ 
        password: data.password, 
        username: data.username
      })     
      setToken(res.data) 
      setToken({"token":"token"})
      navigate("/panel-user", {replace:true})

    }catch(error){
      console.log(error)
      initTimer()
    }finally{
      setLoading(false)
    }

  }

  return (
    <Card>
      <ImageUser />
      {showMessage && <MessageError>Datos incorrectos</MessageError>}
      <form action=""  style={styleForm} onSubmit={handleSubmit(onSubmit)}>
        <Label >Usuario</Label>
        <Input {...register('username')}/>
        <Label >Contraseña</Label>
        <Input type="password" {...register('password')}/>
        <Button >{isLoading? "Cargando ...":"Iniciar sesión"}</Button>
      </form>
    </Card>
  )
}

export default login