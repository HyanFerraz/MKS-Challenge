import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
    }

    body {
        min-height: 100vh;
        background: ${(props) => props.theme["white"]};
        color: ${(props) => props.theme["gray-600"]};
        -webkit-font-smoothing: antialiased;
        font-size: 1rem;
        display: flex;
    }

    main {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
`;
