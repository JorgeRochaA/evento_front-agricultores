import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import UserInfo from '../../components/user'
import { useAppSelector } from '../../redux/hooks'
import {selectUser} from '../../redux/slices/auth'

const Container = styled.nav`
  width: 100%;
  height: 9vh;
  color: var(--color2);
  background-color: #F5F5F5;
  border-bottom: 1px solid #cdcdcd;
  padding: .5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

`
const Logo = styled.img`
  height: 54px;
`

const ItemContainer = styled.div`
  display: flex;
  gap: 10px; 
  flex-grow: 1;
  justify-content: flex-end;   
`
const Item = styled.div`
  font-weight: bold;
  & > a {
    text-decoration:none;
    color: inherit;
  }

`

const header = () => {
  const user = useAppSelector(selectUser)
  return (
    <Container>
        <Link to="/">
            <Logo src={logo} alt="logo"/>
        </Link>   
          <ItemContainer>
              <Item>Lista de mayorista</Item>
              { user.token ?
                <>
                  <Item><Link to="/panel-user">Panel</Link></Item>
                  <Item><UserInfo username={user?.username}/></Item>                                
                </>
                :<>
                  <Item><Link to="/register">Registrarse</Link></Item>
                  <Item><Link to="/login" className='link' >Iniciar sesión</Link></Item>                
                </>
              }              
          </ItemContainer>
    </Container>
  )
}

export default header