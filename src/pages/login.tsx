import {useState} from 'react'
import {styleForm} from '../components/styles'
import {
  Card, 
  ImageUser,
  Label,
  Button,
  MessageError,
  Input,  
  Error
} from '../components/form'
import { useForm, SubmitHandler } from 'react-hook-form'
import { loginUser, formValues, setToken } from '../services/auth'
import { useNavigate } from 'react-router-dom'
import useTimer from '../hooks/useTimer'
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../schemas/auth'
import { useAppDispatch } from '../redux/hooks'
import {add, loginAsync} from '../redux/slices/auth'

const login = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const {showMessage, initTimer} = useTimer(2)
  const {register, handleSubmit, formState: {errors}} = useForm<formValues>({
    mode: 'onBlur',
    resolver: yupResolver(schemaLogin)
  })
  let navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onSubmit:SubmitHandler<formValues> =  async (data) => { 

    try{
       setLoading(true)
      //let res =  await loginUser(data)     
      //setToken(res.data)  
      //dispatch(loginAsync(data))
      setToken("token")
      dispatch(add({username: data.username, token: 'token'}))
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
        {errors.username && <Error>{errors.username.message}</Error>}
        <Label >Contraseña</Label>
        <Input type="password" {...register('password')}/>
        {errors.password && <Error>{errors.password.message}</Error>}
        <Button >{isLoading? "Cargando ...":"Iniciar sesión"}</Button>
      </form>
    </Card>
  )
}

export default login