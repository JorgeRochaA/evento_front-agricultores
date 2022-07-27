import axios from "axios"
import { URL, createParameters } from './base'

export interface formValues {
    nameWholesaler?: string;
    location?: string;
    product?: string;
    sector?: string;
}

export const filterWholesalers = (data:formValues ) =>{
    let parameters = createParameters(data)

    return axios.post(`${URL}/api/v1/wholesalersfilter?${parameters}`, data)
}

