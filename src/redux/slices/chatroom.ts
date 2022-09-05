import { RootState } from "../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { chatRoomState } from "../../types";
import { getRandomColor } from "../../components/chat/utils";

const chatRoomEmpty: chatRoomState = {id: 0, name: '', color: getRandomColor()}

const initialState = {
    data: chatRoomEmpty
}


export const chatRoomSlice = createSlice({
    name: 'chatRoom',   
    initialState,
    reducers: {
        addChatRoom: (state, action: PayloadAction<chatRoomState>) => {
            state.data = action.payload
        },
        clearChatRoom: (state) => {
            state.data = chatRoomEmpty
        }
    }
})

export const {addChatRoom, clearChatRoom} = chatRoomSlice.actions

export const selectChatRoom = (state: RootState) => state.chatRoom.data


export default chatRoomSlice.reducer