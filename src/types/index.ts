export type stateAsync = "idle" | "pending" | "succeeded" | "failed";

export enum messageType {
	FAILED,
	SUCCEEDED,
}

export interface messageUser {
	message: string;
	type: messageType;
}

export interface property {
	name: string;
	value: string;
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
	username: string;
	image?: string;
}

export interface chatroom {
	id: number;
	name?: string;
	receiver?: string;
	emisor?: string;
	lastMessage?: message;
}

export interface chatRoomState {
	id: number;
	name: string;
	color: string;
}

export interface message {
	chatRoomId?: number;
	textMessage: string;
	created_at: string;
	emisor?: string;
}

export interface lastMessage {
	chatRoomId: number;
	emisor: string;
	textMessage: string;
	created_at: string;
}
