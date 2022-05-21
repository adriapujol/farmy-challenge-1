import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    /* grid-template-areas: "sidebar content"; */
    height: 100vh;
    width: 100%;

    .sidebar {
        background-color: green;
        /* grid-area: "sidebar"; */
        overflow-y: scroll;
    }

    .content {
        /* width: 100%; */
        /* grid-area: "content"; */
        /* grid-column: "content";
        grid-row: "content"; */
    }

`

export default Grid;