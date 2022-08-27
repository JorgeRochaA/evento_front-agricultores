import axios from "axios";
import { URL } from "./base";

export interface formValues {
  chatRoomId: number;
  created_at: string;
  emisor: string;
  textMessage: string;
}

export const createMessage = async (message: formValues) => {
  const res = await axios.post(`${URL}/chatmessages`, message);
  return res.data;
};
