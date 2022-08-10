import axios from "axios"
import { URL as local} from './base'

const URL = true ? 
    'https://virtserver.swaggerhub.com/JKCRAFTDOM_1/Evento2/1.0.0'
    : local

export interface formValues {
    userWholesaler: string;
    userFarmer: string;
    message: string;
    products: string[];
}

export interface response {
    message: string
}

export const sendMessage = async (data: formValues) => {
    const res = await axios.post<response>(`${URL}/api/contact-wholesaler`, data)
    console.log(res)
    return res.data
}