import { configureStore, Store } from "@reduxjs/toolkit";
import authReducer from '../slices/auth'
import wholesalerReducer from '../slices/wholesalers'
import chatRoomReducer from '../slices/chatroom'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        wholesalers: wholesalerReducer,
        chatRoom: chatRoomReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch