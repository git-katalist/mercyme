import styled, { css } from "styled-components";

const ProductCards = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  /* grid-gap: 1rem; */
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: calc(1440px - 221px);
    column-gap: 32px;
    padding-left: 0;
    padding-right: 0;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    max-width: 287px;
    /* padding: 16px; */
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 920px) {
    align-items: flex-start;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 60%;
    margin: 0 auto;
    transition: all 400ms ease-in-out;

    &:hover {
      width: 70%;
    }
  }
`;
const ProductTitle = styled.h3`
  /* background-color: yellow; */
`;
const ProductButton = styled.a`
  border: none;
  outline: none;
  margin-right: 1rem;
  border-radius: 7px;
  padding: 7px 16px;
  text-decoration: none;
  background-color: gray;
  color: white;
  cursor: pointer;
  font-size: 16px;

  ${({ pager }) =>
    pager &&
    css`
      background-color: whitesmoke;
      color: black;
    `}
`;

export { ProductCards, ProductCard, ProductTitle, ImageWrapper, ProductButton };
