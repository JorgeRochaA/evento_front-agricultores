import styles from "./messageInputStyles.module.css";
import { createMessage } from "../../../services/messages";
import { IoIosSend } from "react-icons/io";
import { MessageError } from "../../common/index";
import { response, formValues } from "../../../services/messages";
import { schemaMessage } from "../../../schemas/message";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactLoading from "react-loading";
import usePost from "../../../hooks/usePost";
import useTimer from "../../../hooks/useTimerMessage";
export interface props {
  chat: number;
  onNewMessage: (message: formValues) => void;
  sender: string;
}
const styleMessage = {
  height: "20px",
  width: "260px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  fontSize: "12px",
  backgroundColor: "transparent",
  color: "red",
};
const MessageInput = (props: props) => {
  const { loading, init, error } = usePost();
  const { showMessage, initTimer } = useTimer(3);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ textMessage: string }>({
    mode: "onBlur",
    resolver: yupResolver(schemaMessage),
  });

  const onSubmit: SubmitHandler<{ textMessage: string }> = async (data) => {
    let newMessage: formValues = {
      chatRoomId: props.chat,
      created_at: new Date().toISOString(),
      emisor: props.sender,
      textMessage: data.textMessage,
    };
    const res = await init<response>(() => createMessage(newMessage));
    initTimer();
    if (res) {
      reset({ textMessage: "" });
      props.onNewMessage(res);
    }
  };

  return (
    <div
      className={styles.input_container}
      style={{
        flexDirection: "column",
        position: "sticky",
        bottom: "0px",
        width: "100%",
      }}
    >
      {errors.textMessage ? (
        <MessageError style={styleMessage}>
          {errors.textMessage && errors.textMessage.message}
        </MessageError>
      ) : (
        ""
      )}
      {showMessage && error ? (
        <MessageError style={styleMessage}>mensaje no enviado</MessageError>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Mensaje..."
          className={styles.input}
          {...register("textMessage")}
          autoComplete="off"
        />
        <button type="submit" className={styles.btn}>
          {loading ? (
            <ReactLoading
              className="loader"
              type={"spin"}
              height={"70%"}
              width={"70%"}
              color="#fff"
            />
          ) : (
            <IoIosSend />
          )}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
