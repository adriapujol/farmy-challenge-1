import styled from 'styled-components';
import { white } from '../../colors';
const ServingControl = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    div:first-child {
        border: 1px solid orange;
        text-align: center;
        padding: 0.25rem 0.7rem;
        background-color: ${white};
        margin: 0rem 0.5rem;
    }
`;

export default ServingControl;