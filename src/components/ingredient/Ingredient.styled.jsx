import styled from 'styled-components';

const IngredientStyled = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-bottom: 1rem;

    & > * {
        flex:1;
        text-align:center;
    }

    & > :first-child {
        text-align:left;
    }

    & > :last-child {
       
        text-align: right;
    }
`;

export default IngredientStyled;