import axios from "axios"

const URL:string = "https://agri-commerce.herokuapp.com/api/v1/registration"

export interface formValues  {
    username: string;
    password: string;
    email:string;
}
export const registerUser = (data: formValues) =>{
    return axios.post(URL, data)
}

