import axios from "axios"
import { itemOptionsPerPage } from "../components/wholesaler-list-options/utils";
import { URL, createParameters } from './base'

export interface formValues {
    name?: string;
    country?: string;
    product?: string;
    sector?: string;
    sortBy?: string;
    itemPerPage?: number;
}

export interface wholesalerResponse {
    id: number; 
    name: string;    
    description: string;
    productType: string;
    sector: string;
    country: string;
    username: string;    
}

export interface response {
    currentPage: number;
    mayoristas: any[];
    totalItems: number;
    totalPages: number;
}

export const filterWholesalers = async (data:formValues ) =>{    
    let parameters = createParameters(data)
    const res = await axios.get<response>(`${URL}/api/auth/mayoristas/filter?${parameters}`)
    let wholesalers = []

    wholesalers = res.data.mayoristas.map((v) => {
        return {
            id: v.id,
            name: v.name,    
            description: v.description,
            productType: v.productType,
            sector: v.sector,
            country: v.country,
            //username: v.appUser.username   
        }
    })

    return wholesalers as wholesalerResponse[]
}

