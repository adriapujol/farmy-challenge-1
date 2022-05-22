import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Lato', sans-serif;
    background-color: #fcfcfc;
}

::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
}

::-webkit-scrollbar-track {
    background-color:rgba(157,177,124, 0.2);
    border-radius: 100vh;
}

::-webkit-scrollbar-thumb {
    background-color:rgba(157,177,124, 0.6);
    border-radius: 100vh;
}

::-webkit-scrollbar-thumb:hover {
    background-color:rgba(157,177,124, 1);
}

@supports (scrollbar-color: red blue) {
    * {
        scrollbar-color: rgba(157,177,124, 0.6) rgba(157,177,124, 0.2);
        scrollbar-width: thin;
    }
}

`;

export default GlobalStyle;