import React from "react";
import styled from "styled-components";
import buyer from "../assets/buyer.jpg";
import icon from "../assets/search.png";

const Container = styled.div`
  width: 100%;
  color: var(--color2);
`;

const Banner = styled.section`
  margin-top: 4px;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 100px) {
    flex-direction: row;
  }
`;

const Contenido = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 655px) {
    width: 50%;
  }
`;

const Title = styled.p`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 3rem;
  line-height: 3rem;
  color: var(--color4);
  max-width: 90%;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  color: Var(--color9);
  max-width: 90%;
  text-align: center;
`;

const Image = styled.div`
  display: grid;
  place-items: center;
`;

const BuyerImage = styled.img`
  width: 600px;
  display: block;
  border-radius: 10px;
  max-width: 90%;
`;

const SearchContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  max-width: 100%;
  width: 90%;
`;

const Search = styled.input`
  line-height: 2.5rem;
  font-size: 1rem;
  width: 85%;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;
  color: Var(--color9);
`;
const Icon = styled.img`
  padding: 0 1rem;
  border-radius: 0 0.25rem 0.25rem 0;
  border: none;
  cursor: pointer;
  background-color: var(--color6);
  object-fit: scale-down;
`;

const page = () => {
  return (
    <Container>
      <Banner>
        <Contenido>
          <Title>Encuentre su cliente mayorista</Title>
          <Paragraph>
            Proporcionamos a los agricultores información sobre cómo encontrar y
            vender sus productos, podemos ayudarlos a aumentar sus ingresos.
          </Paragraph>
          <SearchContainer>
            <Search type="text" placeholder="Buscar mayorista por producto" />
            <Icon src={icon} alt="icon" />
          </SearchContainer>
        </Contenido>
        <Image>
          <BuyerImage src={buyer} alt="buyer" />
        </Image>
      </Banner>
    </Container>
  );
};

export default page;
