import axios from "axios"
import { URL, createParameters } from './base'
import { wholesaler } from "../types";

export interface formValues {
    name?: string;
    country?: string;
    product?: string;
    sector?: string;
    sortBy?: string;
    itemPerPage: number;
    page: number;
}

export interface response {
    currentPage: number;
    mayoristas: wholesaler[];
    totalItems: number;
    totalPages: number;
    total: number;
    isNextFinal: boolean;
    isPreviousInitial: boolean;    
}

export const filterWholesalers = async (data:formValues ) =>{    
    let parameters = createParameters(data)
    const res = await axios.get<response>(`${URL}/api/auth/mayoristas/filter2?${parameters}`)
    return res.data
}

