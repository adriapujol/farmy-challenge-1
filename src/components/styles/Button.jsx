import styled from "styled-components";

const ButtonStyled = styled.button`

    cursor:pointer;
    border-radius: 25px;
    background-color: ${props => props.cancel ? "lightgrey" : "orange"};
    border-style: none;
    padding: 0.5rem 1rem;

    &:hover {
        background-color: ${props => props.cancel ? "darkgrey" : "darkorange"};
    }
`;

export default ButtonStyled;