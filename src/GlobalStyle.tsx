import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --maxWidth: 1280px;
        --clr-white: #ffffff;
        --clr-light-gray: #f4f4f5;
        --clr-medium-gray: #d4d4d8;
        --clr-dark-gray: #18181b;
        --font-xl: 2.5rem;
        --font-lg: 1.5rem;
        --font-md: 1.2rem;
        --font-sm: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Inder', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--clr-white)
    }

    h3 {
        font-size: 1.1rem;
        font-weight: 600;
    }

    p {
        font-size: 1rem;
        color: var(--white);
    }

`