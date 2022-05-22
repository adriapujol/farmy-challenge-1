import styled from 'styled-components';
import { orange, grey, lightgrey, white } from '../../colors';

const ButtonActive = styled.button`
    cursor: pointer;
    background-color: ${props => props.active ? orange : "transparent"};
    color: ${props => props.active ? white : grey};
    font-size: ${props => props.active ? "0.9rem" : ""};
    padding: 0.2rem 0.4rem;
    border-radius: 10px;
    border-style: none;

    &:hover {
        background-color: ${props => props.active ? "" : lightgrey};
    }
`;

export default ButtonActive;