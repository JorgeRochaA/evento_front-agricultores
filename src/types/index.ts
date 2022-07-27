
export type stateAsync = 'idle' |'loading' | 'failed';

export interface messageUser {
    message: string;
    type: number;
}