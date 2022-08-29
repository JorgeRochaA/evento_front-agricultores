import { AxiosError } from "axios";
import { errorService } from "./types";

//export const URL:string = "http://localhost:8080"
export const URL:string = "https://commerceagri.herokuapp.com"

export const createParameters = (data: object) : string => {
    let parameters: string = "";

    (Object.keys(data) as (keyof typeof data)[]).forEach( (value) => {
        if(data[value] !== undefined && data[value] !== '')
            parameters += `&${value}=${data[value]}`

    })  
    
    return (parameters.length > 0)? parameters.substring(1): parameters
}

export const formatResponseErrorService = (error: any) => {
    const err = error as AxiosError
    const res = err.response?.data as errorService
    return res
}

