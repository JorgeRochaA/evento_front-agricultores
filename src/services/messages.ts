import axios from "axios";
import { URL } from "./base";

export interface formValues {
  chatRoomId: number;
  created_at: string;
  emisor: string;
  textMessage: string;
}

export interface response extends formValues {}

export const createMessage = async (message: formValues) => {
  const res = await axios.post<response>(`${URL}/chatmessages`, message);
  return res.data;
};
