export interface formValues {
    email:string;
    password: string;
}

export interface formValuesRegister extends formValues {    
    username: string;
}

export interface registerUserResponse {
    token: string
}

export interface loginUserResponse {
    email: string;
    username: string;
    appUserRole: string;
}