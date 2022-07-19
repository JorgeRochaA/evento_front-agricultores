import axios from "axios"

const URL:string = "https://agri-commerce.herokuapp.com"

export interface formValues {
    username: string;
    password: string;
}

export interface formValuesRegister extends formValues {
    email:string;
}


export const registerUser = (data: formValuesRegister) =>{
    return axios.post(`${URL}/api/v1/registration`, data)
}

export const loginUser = (data: formValues) => {
    return axios.post( `${URL}/login`, data)
}

export const setToken = (userToken:object) => {
    sessionStorage.setItem('token', JSON.stringify(userToken))
}

export const  getToken = () => {    
    const token:any = sessionStorage.getItem('token');
    const userToken = JSON.parse(token);
    return userToken
  }