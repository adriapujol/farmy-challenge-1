import styled from "styled-components";
import { lightgrey, darkorange, white, orange, grey } from '../../colors';

const ButtonStyled = styled.button`

    cursor:pointer;
    border-radius: 25px;
    background-color: ${props => props.cancel ? "transparent" : orange};
    color: ${props => props.cancel ? grey : white};
    border-style: none;
    padding: 0.5rem 1rem;

    &:hover {
        background-color: ${props => props.cancel ? lightgrey : darkorange};
    }
`;

export default ButtonStyled;