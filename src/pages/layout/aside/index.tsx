import styled from "styled-components";
import ItemAside from "./itemAside";
import { BsSearch } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";

const media = {
  table: "@media screen and (min-width: 895px)",
};

const Aside = styled.aside`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0.5rem;
  ${media.table} {
    position: fixed;
    height: 100%;
    width: auto;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const App = (): JSX.Element => {
  return (
    <Aside>
      <ItemAside
        page="/wholesalers"
        text="Buscar Mayorista"
        pathname={location.pathname}
      >
        <BsSearch color="var(--color4)" size="30px" />
      </ItemAside>
      <ItemAside page="/messages" text="Mensajes" pathname={location.pathname}>
        <BiMessageRoundedDetail color="var(--color4)" size="30px" />
      </ItemAside>
    </Aside>
  );
};

export default App;
