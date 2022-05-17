import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: "sidebar" "content" "content" "content" "content" "content"
                         "sidebar" "content" "content" "content" "content" "content"
                         "sidebar" "content" "content" "content" "content" "content";
    height: 100vh;
    width: 100%;

    .sidebar {
        background-color: green;
        grid-area: "sidebar";
        overflow-y: scroll;
    }

    .content {
        grid-area: "content";
        /* grid-column: "content";
        grid-row: "content"; */
    }

`

export default Grid;