import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {formValues, filterWholesalers } from '../../services/wholesalers'
import {stateAsync} from '../../types'

interface wholesaler {
    username: string;
    token: string
}

interface wholesalersState {
    wholesalers: wholesaler[];
    status: stateAsync
}

const initialState: wholesalersState = {
    wholesalers: [],
    status: 'idle'
}

export const loginAsync = createAsyncThunk(
    'wholesalers/filter', 
    async (data: formValues) => {
        const res = await filterWholesalers(data)
        return res.data
    }
)

export const wholesalers = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setWholesalers: (state, action: PayloadAction<wholesaler[]>) => {
            state.wholesalers = action.payload
        },
        clearWholesalers: (state) => {
            state.wholesalers = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state)=> {
                state.status = 'loading'
            })
            .addCase(loginAsync.fulfilled, (state, action)=> {
                state.status = 'idle'
                state.wholesalers = action.payload
            })
            .addCase(loginAsync.rejected, (state)=> {
                state.status = 'failed'
            })
    }
})

export const {setWholesalers, clearWholesalers} = wholesalers.actions

export const selectUser = (state: RootState) => state.auth.user

export default wholesalers.reducer