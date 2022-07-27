import axios from "axios"
import { URL } from './base'

export interface formValues {
    username: string;
    password: string;
}

export interface formValuesRegister extends formValues {
    email:string;
}

export interface registerUserResponse {
    token: string
}
//<registerUserResponse>
export const registerUser = async (data: formValuesRegister) =>{
    let res = await axios.post<registerUserResponse>(`${URL}/api/v1/registration`, data)
    console.log(res)
    return res.data
}

export const loginUser = (data: formValues) => {
    return axios.post( `${URL}/login`, data)
}

export const setToken = (userToken:string) => {
    sessionStorage.setItem('token', JSON.stringify(userToken))
}

export const  getToken = () => {    
    const token:any = sessionStorage.getItem('token');
    const userToken = JSON.parse(token);
    return userToken
}

export const removeToken = () => {
    sessionStorage.removeItem('token')
}