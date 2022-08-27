import "./messageInputStyles.css";
import { createMessage } from "../../../services/messages";
import { formValues } from "../../../services/messages";
import { IoIosSend } from "react-icons/io";
import { MessageError } from "../../common/index";
import { schemaMessage } from "../../../schemas/message";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
interface props {
  chat: number;
  onNewMessage: (message: formValues) => void;
  sender: string;
}
const MessageInput = (props: props) => {
  const [message, setMessage] = useState("");

  const handleChange = (e: any): void => {
    setMessage(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({
    mode: "onBlur",
    resolver: yupResolver(schemaMessage),
  });

  const onSubmit: SubmitHandler<formValues> = () => {
    let newMessage: formValues = {
      chatRoomId: props.chat,
      created_at: new Date().toISOString(),
      emisor: props.sender,
      textMessage: message,
    };
    createMessage(newMessage)
      .then((result) => {
        setMessage("");
        props.onNewMessage(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="input-container"
      style={{
        flexDirection: "column",
        position: "fixed",
        bottom: "10px",
        width: "45%",
      }}
    >
      <MessageError
        style={{
          height: "20px",
          width: "260px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          fontSize: "12px",
          backgroundColor: "transparent",
          color: "red",
        }}
      >
        {errors.textMessage && errors.textMessage.message}
      </MessageError>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Mensaje..."
          className="input"
          value={message}
          {...register("textMessage")}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="btn">
          <IoIosSend />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
