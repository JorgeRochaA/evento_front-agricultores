import {
	Card,
	ImageUser,
	Label,
	Button,
	Error,
	Input,
} from "../components/common";
import MessageUser from "../components/common/messageUser";
import { useState } from "react";
import { styleForm } from "../components/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerUser } from "../services/auth";
import { formValuesRegister } from "../services/auth/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../schemas/auth";
import useTimer from "../hooks/useTimerMessage";
import { formatResponseErrorService } from "../services/base";
import { messageType, messageUser } from "../types";

const App = () => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const { showMessage, initTimer, activateShowMessage, disabledShowMessage } =
		useTimer(2);
	const [message, setMessage] = useState<messageUser>({
		message: "",
		type: messageType.SUCCEEDED,
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<formValuesRegister>({
		mode: "onBlur",
		resolver: yupResolver(schemaRegister),
	});

	const onSubmit: SubmitHandler<formValuesRegister> = async (data) => {
		try {
			setLoading(true);
			disabledShowMessage();
			let res = await registerUser(data);
			setMessage({
				message: `Usuario Creado! Active su usuario mediante su correo ${data.email}`,
				type: messageType.SUCCEEDED,
			});
			activateShowMessage();
			reset({ username: "", password: "", email: "" });
		} catch (error) {
			const errorResponse = formatResponseErrorService(error);
			setMessage({
				message: errorResponse.message,
				type: messageType.FAILED,
			});
			initTimer();
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card>
			<ImageUser />
			{showMessage && (
				<MessageUser type={message.type}>
					<p>{message.message}</p>
				</MessageUser>
			)}
			<form action="" onSubmit={handleSubmit(onSubmit)} style={styleForm}>
				<Label htmlFor="">Usuario</Label>
				<Input type="text" {...register("username")} />
				{errors.username && <Error>{errors.username.message}</Error>}
				<Label htmlFor="">Correo electronico</Label>
				<Input type="text" {...register("email")} />
				{errors.email && <Error>{errors.email.message}</Error>}
				<Label htmlFor="">Contraseña</Label>
				<Input type="password" {...register("password")} />
				{errors.password && <Error>{errors.password.message}</Error>}
				<Button>{isLoading ? "Procesando ..." : "Registrarse"}</Button>
			</form>
		</Card>
	);
};

export default App;
