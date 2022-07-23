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
  padding: 3rem 1rem;
  display: flex;
  gap: 2rem;
  background: rgb(21, 31, 53);
  background: linear-gradient(
    90deg,
    rgba(21, 31, 53, 1) 0%,
    rgba(44, 60, 91, 1) 35%
  );
`;

const Contenido = styled.div`
  width: 50%;
`;

const Title = styled.p`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 3rem;
  line-height: 3rem;
  color: var(--color4);
`;

const Image = styled.div``;

const BuyerImage = styled.img`
  width: 600px;
  display: block;
  border-radius: 10px;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  color: Var(--color9);
`;
const SearchContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const Search = styled.input`
  line-height: 2.5rem;
  font-size: 1rem;
  width: 17rem;
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
