import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Shared/header'
import Navigation from './routes'
import { getToken } from './services/auth'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Navigation/>
    </BrowserRouter>
  )
}

export default App
