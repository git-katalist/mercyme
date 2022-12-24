import styled, { css, createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*, *::before, *::after{
margin:0;
padding:0;
box-sizing:border-box;
}
html, body{
height:100%;
background-color:teal;
color: white;
font-family: 'Poppins', sans-serif;
}
#__next{
height:auto;
display: grid;
grid-template-rows: auto 1fr auto;
/* background-color: magenta; */
}
body{
/* background-color:${({ theme }) => theme.colors.primary}; */
}
main{
    h1{
        padding: 2rem 0;
        font-weight: 500;
    }
    h4{
        color: yellow;
        font-size: 5rem;
    }
    p{
        color: white;
    }
    
}
`;

const Container = styled.div`
  /* padding: 1.5rem 1rem; */
  width: 100%;
  margin: 0 auto;

  ${({ fluid }) =>
    fluid &&
    css`
      max-width: 1440px;
      display: flex;
      align-items: center;
      height: 100%;
    `}
`;

export { Global, Container };
