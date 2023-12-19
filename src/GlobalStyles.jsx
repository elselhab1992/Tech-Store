import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: roboto,sans-serif;
        width: 100%;
        min-height: 100vh;
        padding-top: 80px;
        text-transform: capitalize;
    }

    hr{
        height: 5px;
        width: 90px;
        background-color: ${(props) => props.theme.colors.secondary};
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyles;
