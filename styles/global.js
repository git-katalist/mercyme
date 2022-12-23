import { createGlobalStyle } from "styled-components";

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

export { Global };
