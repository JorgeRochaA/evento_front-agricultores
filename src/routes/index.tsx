import {Route, Routes} from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import UserRegister from '../pages/user-register'
import UserPanel from '../pages/wholesalers-panel'
import MessagePanel from '../pages/message-panel'
import PrivateRoute from '../hocs/privateRoute'
import Page404 from '../pages/page-404'

const routes  = () => (    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<UserRegister/>}/>
        <Route path="/messages" element={<MessagePanel/>}/>
        <Route path="/wholesalers" element={
            <PrivateRoute><UserPanel/></PrivateRoute>     
        }/>
        <Route path="*" element={<Page404/>} />
    </Routes>
)

export default routes