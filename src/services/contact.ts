import axios from "axios"
import { URL as local} from './base'

const URL = false ? 
    'https://virtserver.swaggerhub.com/JKCRAFTDOM_1/Evento2/1.0.0'
    : local

export interface formValues {
    receiver: string;
    emisor: string;
    message: string;
    products: string[];
}

export interface response {
    message: string
}

export const sendMessage = async (data: formValues) => {
    const res = await axios.post<string>(`${URL}/chatrooms`, data)
    return res.data
}