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
import { formValues } from '../services/auth/types'
import { useNavigate } from 'react-router-dom'
import useTimer from '../hooks/useTimer'
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../schemas/auth'
import { useAppDispatch } from '../redux/hooks'
import { loginAsync, selectError, selectLoading} from '../redux/slices/auth'
import { useAppSelector } from '../redux/hooks'



const login = () => {
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const {showMessage, initTimer} = useTimer(2)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {register, handleSubmit, formState: {errors}} = useForm<formValues>({
    mode: 'onBlur',
    resolver: yupResolver(schemaLogin)
  })

  const onSubmit:SubmitHandler<formValues> =  async (data) => { 
    dispatch(loginAsync(data))
    .then(data => {
      if(data.type === 'auth/login/rejected') 
        initTimer()
      else 
        navigate("/panel-user", {replace:true})
    })  

  }

  return (
    <Card>
      <ImageUser />
      {showMessage && <MessageError>{error}</MessageError>}
      <form action=""  style={styleForm} onSubmit={handleSubmit(onSubmit)}>
        <Label >Email</Label>
        <Input {...register('email')}/>
        {errors.email && <Error>{errors.email.message}</Error>}
        <Label >Contraseña</Label>
        <Input type="password" {...register('password')}/>
        {errors.password && <Error>{errors.password.message}</Error>}
        <Button >{loading === 'pending' ? "Cargando ...":"Iniciar sesión"}</Button>
      </form>
    </Card>
  )
}

export default login