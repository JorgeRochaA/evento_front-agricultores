import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  color: var(--color2);
`;

const Banner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  @media screen and (min-width: 1253px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Contenido = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 655px) {
    width: 70%;
  }
  @media screen and (min-width: 1253px) {
    height: 350px;
    width: 50%;
    justify-content: space-evenly;
    align-items: flex-start;
    text-align: left;
    margin-left: 5%;
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
  @media screen and (min-width: 1253px) {
    text-align: left;
    width: 600px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  color: Var(--color9);
  max-width: 90%;
  text-align: center;
  @media screen and (min-width: 1253px) {
    text-align: left;
    width: 600px;
  }
`;

const Image = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 725px) {
    width: 70%;
  }
  @media screen and (min-width: 1253px) {
    height: 450px;
    width: 50%;
  }
`;

const BuyerImage = styled.img`
  display: block;
  border-radius: 10px;
  max-width: 100%;
  @media screen and (min-width: 1253px) {
    height: 350px;
  }
`;

const SearchContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 90%;
  @media screen and (min-width: 585px) {
    width: 400px;
  }
`;

const Search = styled.input`
  line-height: 2.5rem;
  font-size: 1rem;
  width: 90%;
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
            <Icon src={"/search.png"} alt="icon" />
          </SearchContainer>
        </Contenido>
        <Image>
          <BuyerImage src={"/buyer.jpg"} alt="buyer" />
        </Image>
      </Banner>
    </Container>
  );
};

export default page;
