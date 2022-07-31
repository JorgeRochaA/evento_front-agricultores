import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {formValues, filterWholesalers,wholesalerResponse } from '../../services/wholesalers'
import {stateAsync} from '../../types'
import _ from 'lodash'

interface options extends formValues{
    isSortLocal: boolean;
}

interface wholesalersState {
    wholesalers: wholesalerResponse[];
    status: stateAsync;
    options: options;
}

const initialState: wholesalersState = {
    wholesalers: [],
    status: 'idle',
    options: {itemPerPage: 10, sortBy: 'name', isSortLocal: false}
}

const joinData = (data:formValues, state:RootState):formValues => {
    const {sortBy, itemPerPage} = state.wholesalers.options
    const dataNew = {...data, sortBy, itemPerPage}
    return dataNew
}

const joinDataState = (state:RootState): formValues => {
    const {country, itemPerPage, name, product, sector, sortBy} = state.wholesalers.options
    const dataNew: formValues = {country, itemPerPage, name, product, sector, sortBy}
    return dataNew
}

export const filterWholesalersAsync = createAsyncThunk(
    'wholesalers/filter', 
    async (data: formValues|null, {getState}) => {
        const state = getState() as RootState
        let dataNew = data? joinData(data, state) : joinDataState(state)
        const res = await filterWholesalers(dataNew)        
        return res
    }
)


export const wholesalers = createSlice({
    name: 'wholesalers',
    initialState,
    reducers: {
        setWholesalers: (state, action: PayloadAction<wholesalerResponse[]>) => {
            state.wholesalers = action.payload
        },
        clearWholesalers: (state) => {
            state.wholesalers = []
        }, 
        setOptionSortBy: (state, action:PayloadAction<string>) => {
            state.options.sortBy = action.payload
            state.options.isSortLocal = true
        },
        setOptionItemPerPage: (state, action:PayloadAction<number>) => {
            state.options.itemPerPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(filterWholesalersAsync.pending, (state)=> {
                state.status = "pending"
            })
            .addCase(filterWholesalersAsync.fulfilled, (state, action)=> {
                state.status = "succeeded"
                state.options.isSortLocal = false
                state.wholesalers = action.payload
            })
            .addCase(filterWholesalersAsync.rejected, (state)=> {
                state.status = 'failed'
            })
    }
})

export const {setWholesalers, clearWholesalers, setOptionSortBy, setOptionItemPerPage} = wholesalers.actions

export const selectWholesaler = (state: RootState) => state.wholesalers.wholesalers

export const selectIsSortLocal = (state: RootState) => state.wholesalers.options.isSortLocal

export const selectSortWholesalers = (state: RootState) => {
    const wholesalers = state.wholesalers.wholesalers
    const sortBy = state.wholesalers.options.sortBy
    return _.sortBy(wholesalers, [sortBy, 'asc']) as wholesalerResponse[]
}

export const selectCountWholesaler = (state: RootState) => state.wholesalers.wholesalers.length

export default wholesalers.reducer