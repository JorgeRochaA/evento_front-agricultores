import axios from "axios"
import { URL} from './base'

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
    const res = await axios.post<response>(`${URL}/`, data)

    return res.data
}