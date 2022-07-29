
export type stateAsync = 'idle' | 'pending' | 'succeeded' | 'failed';

export interface messageUser {
    message: string;
    type: number;
}