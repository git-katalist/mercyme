import styled, { css } from "styled-components";

export const Header = styled.header`
  height: 8vh;
  width: 100%;
  /* background-color: black; */
  color: white;

  ${({ primary }) =>
    primary &&
    css`
      background-color: green;
      font-size: 2rem;
    `}
`;
