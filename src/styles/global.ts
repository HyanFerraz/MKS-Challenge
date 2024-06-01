import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme["white"]};
        color: ${(props) => props.theme["gray-600"]};
        -webkit-font-smoothing: antialiased;
        font-size: 1rem;
    }
`;
