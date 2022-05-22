import styled from 'styled-components';

const IngredientsStyled = styled.table`

        width: 100%;
        overflow-y: scroll;
        border-collapse: collapse;

        td, tr, th {
            padding: 1rem;
            z-index: 3;
        }
        
        thead {
            position: sticky;
            top: 0;
            background-color: #F4E285;
            z-index: 3;
        }

        th:after {
            content: '';
            position: absolute;
            height: 100%;
            left: 0;
            bottom: 0;
            width: 100%;
            box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
            z-index: 2;
        }

        tbody tr:nth-child(2n-1) {
        background-color: rgba(0, 0, 0, 0.1)
        }
        /* th: {
            width: 100px;
        }
        th:first-child {
            width: 100px;
        }
        th:last-child {
            width: 100px;
        }
        tbody tr: {
            width: 100px;
        }
        tbody tr:first-child {
            width: 100px;
        }
        tbody tr:last-child {
            width: 100px;
        } */

`;

export default IngredientsStyled;