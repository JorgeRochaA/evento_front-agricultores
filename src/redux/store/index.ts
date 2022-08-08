import { configureStore, Store } from "@reduxjs/toolkit";
import authReducer from '../slices/auth'
import wholesalerReducer from '../slices/wholesalers'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        wholesalers: wholesalerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch