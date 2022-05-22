import styled from 'styled-components';
import { lightgreen } from '../../colors';

const ProductsStyled = styled.div`

    .input-box {
        padding: 1rem 2rem;
        width: 100%;
        height: 5vh;
    }

    input {
        width: 100%;
        padding: 0.3rem;
        text-align: center;
    }
    .products-list {
        overflow-y: scroll;
        height: 90vh;
    }

    background-color: ${lightgreen};
`;


export default ProductsStyled;