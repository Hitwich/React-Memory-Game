import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        transition: 0.3s;
    }
    body{
        overflow-x:hidden;
    }

`

export default GlobalStyle