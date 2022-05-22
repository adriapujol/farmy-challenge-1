import { createGlobalStyle } from "styled-components";
import { lightgrey } from '../../colors';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Lato', sans-serif;
    background-color: ${lightgrey};
}

::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
}

::-webkit-scrollbar-track {
    background-color:rgba(0,0,0, 0.1);
    border-radius: 100vh;
}

::-webkit-scrollbar-thumb {
    background-color:rgba(0,0,0, 0.2);
    border-radius: 100vh;
}

::-webkit-scrollbar-thumb:hover {
    background-color:rgba(0,0,0, 0.4);
}

@supports (scrollbar-color: red blue) {
    * {
        scrollbar-color: rgba(0,0,0, 0.6) rgba(0,0,0, 0.2);
        scrollbar-width: thin;
    }
}

`;

export default GlobalStyle;