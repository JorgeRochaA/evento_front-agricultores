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
  appUser: user;
}

export interface chatroom {
  name: string;
  lastMessage?: message;
}

export interface message {
  message: string;
  createdAt: string;
}
