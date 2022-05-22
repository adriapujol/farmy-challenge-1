import styled from 'styled-components';
import { yellow, green, lightgrey, darkgreen, darkgrey, white, black } from '../../colors';


const ProductStyled = styled.button`
    cursor: pointer;
    
    * {
        cursor: pointer;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    color: ${black};
    background-color: transparent;
    border-style: none;
    font-size: 1.1rem;

    .fa-circle-plus {
        display: none;
    }

    &:hover{
        color: white;
        background-color: ${darkgreen};

        .fa-circle-plus {
            display: inline-block;
        }
    }
`


export default ProductStyled;