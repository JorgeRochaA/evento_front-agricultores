import { useState } from "react";
import styled from "styled-components";
import { ImageUser } from "../form";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { Button } from "../form";
import { removeToken } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { remove } from "../../redux/slices/auth";
import { Method } from "axios";
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

  const handleSignOff = () => {
    params.toggleMenu();
    removeToken();
    dispatch(remove());
    navigate("/", { replace: true });
  };

  return (
    <Container onClick={() => setVisibleOptions(!visibleOptions)}>
      <ImageUser style={{ height: "30px", width: "30px" }} />
      <span>{params.username}</span>
      {visibleOptions ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
      <DropDownContainer visible={visibleOptions}>
        <Button onClick={handleSignOff}>Cerrar sesión</Button>
      </DropDownContainer>
    </Container>
  );
};

export default User;
