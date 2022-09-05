import { BrowserRouter } from 'react-router-dom'
import Navbar from './pages/layout/header'
import { useAppDispatch } from './redux/hooks'
import { setUser } from './redux/slices/auth'
import Navigation from './routes'
import { getToken, getUserStorage, removeTokenAndUser } from './services/auth'


function App() {
  const token = getToken()
  const user = getUserStorage()
  const dispatch = useAppDispatch()
  
  if(token && user) {    
    dispatch(setUser(user))
  } else {
    removeTokenAndUser()
  } 

  return (
    <BrowserRouter>
      <Navbar/>
      <Navigation/>
    </BrowserRouter>
  )
}

export default App
