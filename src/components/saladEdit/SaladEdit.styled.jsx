import styled from 'styled-components';
import { yellow, green, lightgrey, darkgreen, darkgrey, white, black } from '../../colors';


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