import {Route, Routes} from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import UserRegister from '../pages/user-register'
import PanelUser from '../pages/user-panel'
import PrivateRoute from '../hocs/privateRoute'
import Pruebas from '../pages/pruebas'
import Page404 from '../pages/page-404'

const routes  = () => (    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pruebas" element={<Pruebas/>}/>
        <Route path="/register" element={<UserRegister/>}/>
        <Route path="/panel-user" element={
            <PrivateRoute><PanelUser/></PrivateRoute>     
        }/>
        <Route path="*" element={<Page404/>} />
    </Routes>
)

export default routes