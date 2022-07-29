import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { loginUser, setToken, setUserStorage } from '../../services/auth' 
import { formValues, loginUserResponse } from '../../services/auth/types' 
import { stateAsync} from '../../types'
import { AxiosError } from "axios";
import { errorService } from "../../services/base";

interface authState {
    user: loginUserResponse;
    status: stateAsync,
    error: errorService | null
}

const userEmpty = {username: '', appUserRole: '', email: ''}

const initialState: authState = {
    user: userEmpty,
    status: "idle",
    error: null
}

export const loginAsync = createAsyncThunk(
    'auth/login', 
    async (data: formValues, {rejectWithValue}) => {
        try {
            const res = await loginUser(data)
            setToken("Autenticado")
            setUserStorage(res)
            return res         
        } catch (error) {
            const err = error as AxiosError
            const res = err.response?.data as errorService
            console.log(res)
            return rejectWithValue(res)
        }

    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<loginUserResponse>) => {
            state.user = action.payload
        },
        removeUser: (state) => {
            state.user = userEmpty
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state)=> {
                state.status = "pending"
            })
            .addCase(loginAsync.fulfilled, (state, action)=> {
                state.status = "succeeded"
                state.user = action.payload
            })
            .addCase(loginAsync.rejected, (state, action)=> {
                console.log(action)
                state.status = 'failed'
                state.error = action.payload as errorService
            })
    }
})

export const {setUser, removeUser} = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user

export const selectLoading =  (state: RootState) => state.auth.status

export const selectError =  (state: RootState) => state.auth.error?.message

export default authSlice.reducer