import axios from "axios"
import { chatroom } from "../types"
import { URL as local} from './base'

const URL = true ? 
    'https://virtserver.swaggerhub.com/JKCRAFTDOM_1/Evento2/1.0.0'
    : local

export interface response {
   
}

export const getChatsByUser = async (username: string) => {
    const res = await axios.get(`${URL}/api/chatroom/${username}`)
    return res.data as chatroom[]
}