import styled from 'styled-components';

const Scrollbar = styled.div`
::-webkit-scrollbar {
    width: 0.6rem;
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

export default Scrollbar;
