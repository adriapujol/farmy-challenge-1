import styled from 'styled-components';
import { orange } from '../../colors';

const ButtonIcon = styled.button`

        cursor: pointer;
        background-color: transparent;
        border-style: none;
        font-size: 1rem;
        
        &:hover {
            color: ${orange};
        }
`;

export default ButtonIcon;