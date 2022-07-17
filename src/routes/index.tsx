import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import UserRegister from '../pages/user-register'

const routes  = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<UserRegister/>}/>
    </Routes>
)

export default routes