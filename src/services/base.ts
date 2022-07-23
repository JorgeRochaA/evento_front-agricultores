export const URL:string = "https://agri-commerce.herokuapp.com"

export const createParameters = (data: object) : string => {
    let parameters: string = "";

    (Object.keys(data) as (keyof typeof data)[]).forEach( (value) => {
        let firstTwoLetters:string = String(value).substring(0, 2)
        parameters += `&${firstTwoLetters}=${data[value]}`

    })  
    
    return (parameters.length > 0)? parameters.substring(1): parameters
}