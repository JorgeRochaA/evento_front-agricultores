import axios from "axios"
import {chats} from './data.json'
import { chatroom, lastMessage } from "../types"
import { URL as local} from './base'

const URL = false ? 
    'https://virtserver.swaggerhub.com/JKCRAFTDOM_1/Evento2/1.0.0'
    : local

export const getChatsByUser = async (username: string) => {
    const res = await axios.get<chatroom[]>(`${URL}/chatrooms/list/${username}`)
    return res.data
}

export const getLastMessageByChat = async (chat: number) => {
    const res = await axios.get<lastMessage[]>(`${URL}/chatmessages/last/${chat}`)
    return res.data
}

export const getMessagesByChatroom = async(chatroom: number) =>{

    const res = await axios.get<message[]>(`${URL}/chatrooms/${chatroom}/chatmessages`)
    
    return res.data
}