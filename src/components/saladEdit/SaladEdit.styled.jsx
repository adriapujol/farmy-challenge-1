import styled from 'styled-components';
import { white } from '../../colors';


const SaladEditStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    width: 100%;
    background-color: ${white};
    
    .edit-name {
        label, input {
            font-size: 2rem;
            margin-right: 0.5rem;
        }
    }
`


export default SaladEditStyle;