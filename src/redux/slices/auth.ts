import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { loginUser, formValues, setToken } from '../../services/auth' 

interface user {
    username: string;
    token: string
}
interface authState {
    user: user;
    status: 'idle' |'loading' | 'failed'
}

const initialState: authState = {
    user: {username: '', token: ''},
    status: 'idle'
}

export const loginAsync = createAsyncThunk(
    'auth/login', 
    async (data: formValues) => {
        const res = await loginUser(data)
        setToken("token")
        return res.data
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<user>) => {
            state.user = action.payload
        },
        remove: (state) => {
            state.user = {username: '', token: ''}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state)=> {
                state.status = 'loading'
            })
            .addCase(loginAsync.fulfilled, (state, action)=> {
                state.status = 'idle'
                state.user = action.payload
            })
            .addCase(loginAsync.rejected, (state)=> {
                state.status = 'failed'
            })
    }
})

export const {add, remove} = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user

export default authSlice.reducer