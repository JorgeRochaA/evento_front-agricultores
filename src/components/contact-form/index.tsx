import * as Contact from "./styled";
import Message from "./message";
import ContainerInput from "./containerInput";
import Products, { params as paramsProducts } from "./products";
import { Label, Error } from "../common";
import { useEffect, useState } from "react";
import account from "../../assets/account.png";
import ProductButton from "./productButton";
import { sendMessage } from "../../services/contact";
import { useForm, SubmitHandler } from "react-hook-form";
import { formValues } from "../../services/contact";
import { schemaContact } from "../../schemas/contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { wholesaler } from "../../types";
import usePost from "../../hooks/usePost";

const defaultWholesaler: wholesaler = {
	country: "",
	description: "",
	sector: "",
	name: "",
	productType: "",
	username: "",
};
interface params {
	userFarmer: string;
	userWholesaler?: wholesaler;
}

const App = (params: params): JSX.Element => {
	const [data, setData] = useState<string>("");
	const [resetProducts, setResetProducts] = useState<boolean>(false);
	const { loading, init, error, showMessage, type } = usePost();
	const wholesaler = { ...defaultWholesaler, ...params.userWholesaler };
	const productsShow = params?.userWholesaler?.productType.split(",");

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<formValues>({
		mode: "onBlur",
		resolver: yupResolver(schemaContact),
	});

	useEffect(() => {
		const { username } = wholesaler;
		setValue("emisor", params.userFarmer);
		setValue("receiver", username);
	}, [params.userFarmer, params.userWholesaler]);

	const handleSelect: paramsProducts["onSelect"] = (products) => {
		setValue("products", products);
	};

	const onSubmit: SubmitHandler<formValues> = async (data) => {
		const res = await init<string>(() => sendMessage(data));
		setData(res || "");
		setValue("products", []);
		setValue("message", "");
		setResetProducts(true);
		setTimeout(() => {
			setResetProducts(false);
		}, 1000);
	};

	return (
		<Contact.CardContact onSubmit={handleSubmit(onSubmit)}>
			<Contact.Title>Formulario de contacto</Contact.Title>
			<Message error={error} message={data} type={type} showMessage={showMessage}/>
			<Contact.Body>
				<ContainerInput label={wholesaler.name} error={errors.receiver}>
					<Contact.InputContact
						icon={account}
						readOnly
						{...register("receiver")}
					/>
				</ContainerInput>
				<ContainerInput label={"Mensaje"} error={errors.message}>
					<Contact.Message
						cols={30}
						rows={10}
						placeholder="Escriba su mensaje ..."
						{...register("message")}
					></Contact.Message>
				</ContainerInput>
				<Products
					products={productsShow}
					resetProducts={resetProducts}
					onSelect={handleSelect}
				/>
			</Contact.Body>
			<Contact.Footer>
				<Contact.SendButton type="submit">
					{loading ? "Enviando mensaje ..." : "Enviar Mensaje"}
				</Contact.SendButton>
			</Contact.Footer>
		</Contact.CardContact>
	);
};

export default App;
