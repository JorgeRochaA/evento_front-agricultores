import axios from "axios"
import {chats} from './data.json'
import { chatroom, message } from "../types"
import { URL as local} from './base'

const URL = false ? 
    'https://virtserver.swaggerhub.com/JKCRAFTDOM_1/Evento2/1.0.0'
    : local

export interface response {
   
}

export const getChatsByUser = async (username: string) => {
    //const res = await axios.get(`${URL}/api/chatroom/${username}`)
    //return res.data as chatroom[]
    
    return chats
}

export const getMessagesByChatroom = async(chatroom: number) =>{

    const res = await axios.get<message[]>(`${URL}/chatrooms/${chatroom}/chatmessages`)
    
    return res.data
}