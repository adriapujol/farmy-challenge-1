import styled from "styled-components";
import { yellow, green, lightgrey, darkgreen, darkgrey, darkorange, white, black, orange, grey, lightgreen } from '../../colors';

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