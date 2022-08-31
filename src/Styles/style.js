import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --red: #ff577f;
        --redFocus: #ff427f;
        --black: #59323f;
        --grey0: #F8F9FA;
        --grey1: #868E96;
        --grey2: #343B41;
        --grey3: #212529;
        --grey4: #121214;
        --feedSucess: #3fe864;
        --feedNegative: #e83f5b;
    }

    body {
        background-color: var(--grey4);
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4 {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    input, button, label {
        color: var(--grey0);
    }

`