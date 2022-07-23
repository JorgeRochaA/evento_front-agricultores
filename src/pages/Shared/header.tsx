import { Link } from "react-router-dom";
import { selectUser } from "../../redux/slices/auth";
import { useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import UserInfo from "../../components/user";

const Container = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5f5f5;
  color: var(--color2);
  padding: 25px;
  border-bottom: 1px solid #cdcdcd;
`;

const Burger = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  .bar {
    height: 3px;
    width: 70%;
    background-color: #2c3c5b;
    border-radius: 5px;
    transition: 0.5s;
  }
  &.open {
    .bar {
      &:first-child {
        transform: translate(0, 7px) rotate(-45deg);
      }
      &:last-child {
        transform: translate(0, -11px) rotate(40deg);
      }
    }
  }
  @media screen and (min-width: 654px) {
    display: none;
  }
`;
const Logo = styled.img`
  height: 54px;
  margin-top: 6px;
`;

const ItemContainer = styled.div`
  position: absolute;
  top: 70px;
  left: -100%;
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f5f5f5;
  transition: 0.5s;
  z-index: 2;
  border-bottom: 1px solid #cdcdcd;
  &.open {
    left: 0;
  }
  & > div:not(:last-child) {
    border-bottom: 1px solid #cdcdcd;
  }
  @media screen and (min-width: 655px) {
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #f5f5f5;
    gap: 25px;
    border: none;
    & > div:not(:last-child) {
      border-bottom: none;
      width: auto;
    }
  }
`;
export const Item = styled.div`
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
  & > a {
    text-decoration: none;
    color: inherit;
    height: 100%;
  }

  @media screen and (min-width: 655px) {
    max-width: fit-content;
  }
`;

const header = () => {
  const user = useAppSelector(selectUser);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <Burger className={menuIsOpen ? "open" : ""} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
      </Burger>
      <ItemContainer className={menuIsOpen ? "open" : ""}>
        <Item>Lista de mayorista</Item>
        {user.token ? (
          <>
            <Item>
              <Link to="/panel-user">Panel</Link>
            </Item>
            <Item>
              <UserInfo username={user?.username} toggleMenu={toggleMenu} />
            </Item>
          </>
        ) : (
          <>
            <Item onClick={toggleMenu}>
              <Link to="/register">Registrarse</Link>
            </Item>
            <Item onClick={toggleMenu}>
              <Link to="/login" className="link">
                Iniciar sesión
              </Link>
            </Item>
          </>
        )}
      </ItemContainer>
    </Container>
  );
};

export default header;
