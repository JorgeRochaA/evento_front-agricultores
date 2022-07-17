import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Shared/navbar'
import Navigation from './routes'

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Navigation/>
    </BrowserRouter>
  )
}

export default App
