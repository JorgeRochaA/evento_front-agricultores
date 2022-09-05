import { useState } from "react";
import styled from "styled-components";
import { ImageUser } from "../common";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { Button } from "../common";
import { removeTokenAndUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { removeUser } from "../../redux/slices/auth";
import { clearChatRoom } from "../../redux/slices/chatroom";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	cursor: pointer;
	position: relative;
	width: 100%;
`;

const DropDownContainer = styled.div<{ visible: boolean }>`
	position: absolute;
	top: 38px;
	background-color: var(--color9);
	padding: 0.3rem;
	display: ${(props) => (props.visible ? "flex" : "none")};
	flex-direction: column;
	align-items: center;
	width: 100%;
	border: 1px solid #cdcdcd;
	padding-bottom: 10px;
	@media screen and (min-width: 655px) {
		right: -16px;
		width: 150px;
		border: none;
	}
`;

interface params {
	username: string;
	toggleMenu: () => void;
}

const User = (params: params) => {
	const [visibleOptions, setVisibleOptions] = useState<boolean>(false);
	let navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleLogOut = () => {
		params.toggleMenu();
		removeTokenAndUser();
		dispatch(removeUser());
		dispatch(clearChatRoom());
		navigate("/", { replace: true });
	};

	return (
		<Container onClick={() => setVisibleOptions(!visibleOptions)}>
			<ImageUser style={{ height: "30px", width: "30px" }} />
			<span>@{params.username}</span>
			{visibleOptions ? (
				<MdOutlineArrowDropUp />
			) : (
				<MdOutlineArrowDropDown />
			)}
			<DropDownContainer visible={visibleOptions}>
				<Button onClick={handleLogOut}>Cerrar sesión</Button>
			</DropDownContainer>
		</Container>
	);
};

export default User;
