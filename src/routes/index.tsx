import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Inicio from '../pages/inicio'
import Login from '../pages/login'
import RegistrarUsuario from '../pages/registrar-usuario'

const routes  = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<RegistrarUsuario/>}/>
        </Routes>
    </BrowserRouter>
)

export default routes