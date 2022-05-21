import styled from 'styled-components';

const IngredientStyled = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin-bottom: 1rem;

    & > * {
        flex:2;
        text-align:center;
    }

    & > :first-child {
        flex:3;
        text-align:left;
    }
    
    & > :nth-child(2) {
        text-align:left;
    }

    & > :last-child {
       flex: 1;
        text-align: right;
    }
`;

export default IngredientStyled;