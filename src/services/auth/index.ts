import axios from "axios"
import { URL } from '../base'
import * as types from './types'

const BASE_URL = `${URL}/api/auth`

//<registerUserResponse>
export const registerUser = async (data: types.formValuesRegister) =>{
    let res = await axios.post<types.registerUserResponse>(`${BASE_URL}/signup`, data)
    return res.data
}

export const loginUser = async (data: types.formValues) => {
    const res = await axios.post( `${BASE_URL}/signin`, data)
    let {email, username, authorities} = res.data  
    let appUserRole = authorities[0].authority
    let user = {email, username, appUserRole} as types.loginUserResponse
    return user
}

export const setToken = (userToken:string) => {
    sessionStorage.setItem('token', userToken)
}

export const setUserStorage = (user:types.loginUserResponse) => {
    sessionStorage.setItem('user', JSON.stringify(user))
}

export const  getToken = ():string|null => {    
    return sessionStorage.getItem('token');
}

export const getUserStorage = (): types.loginUserResponse => {
    const userString = sessionStorage.getItem('user') || "null"
    const user = JSON.parse(userString) 
    return user
}

export const removeTokenAndUser = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
}