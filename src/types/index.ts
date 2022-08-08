
export type stateAsync = 'idle' | 'pending' | 'succeeded' | 'failed';

export enum messageType {
    FAILED = 'failed',
    SUCCEEDED = 'succeeded'
}

export interface messageUser {
    message: string;
    type: messageType;
}

export interface property {
    name: string;
    value:string;
}

export interface user {
    username: string;
}

export interface wholesaler {
    name: string;    
    description: string;
    productType: string;
    sector: string;
    country: string;
    appUser: user;    
}