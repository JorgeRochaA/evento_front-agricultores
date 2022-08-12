import {Burger, Container, Item, ItemContainer, Logo} from './styled'
import { Link } from "react-router-dom";
import { selectUser } from "../../../redux/slices/auth";
import { useAppSelector } from "../../../redux/hooks";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import UserInfo from "../../../components/user";

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
        <Item>Lista de mayoristas</Item>
        {user.username ? (
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
