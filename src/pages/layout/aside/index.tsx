import styled from "styled-components";
import ItemAside from "./itemAside";
import { BsSearch } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useAppSelector } from "../../../redux/hooks";
import { selectUser } from "../../../redux/slices/auth";

const Aside = styled.aside`
	background-color: #fff;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	padding: 0.5rem;
	position: fixed;
	height: 100%;
	width: 123px;
`;

const App = (): JSX.Element => {
	const user = useAppSelector(selectUser)

	return (
		<Aside>
			<ItemAside
				page="/wholesalers"
				text="Buscar Mayorista"
				pathname={location.pathname}
				rol={user.appUserRole}
			>
				<BsSearch color="var(--color4)" size="30px" />
			</ItemAside>
			<ItemAside
				page="/messages"
				text="Mensajes"
				pathname={location.pathname}
				rol={user.appUserRole}
			>
				<BiMessageRoundedDetail color="var(--color4)" size="30px" />
			</ItemAside>
		</Aside>
	);
};

export default App;
