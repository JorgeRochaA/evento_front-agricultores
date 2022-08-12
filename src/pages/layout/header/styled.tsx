import styled from "styled-components";

export const Container = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5f5f5;
  color: var(--color2);
  padding: 25px;
  border-bottom: 1px solid #cdcdcd;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const Burger = styled.div`
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
export const Logo = styled.img`
  height: 54px;
  margin-top: 6px;
`;

export const ItemContainer = styled.div`
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