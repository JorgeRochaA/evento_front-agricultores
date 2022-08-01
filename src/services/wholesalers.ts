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


export const filterWholesalers = async (data:formValues ) =>{    
    let parameters = createParameters(data)
    const res = await axios.get<any[]>(`${URL}/api/auth/mayoristfilter?${parameters}`)
    let wholesalers = []

    wholesalers = res.data.map((v) => {
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

