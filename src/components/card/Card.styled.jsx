import styled from 'styled-components';
import { yellow, blue, darkorange, red, green, lightgrey, darkgreen, darkgrey, white, black, orange } from '../../colors';

const CardStyle = styled.div`

    position: relative;
    width: 350px;
    height: 350px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    background-color: white;
    border-radius: 25px;

    img {
        height: 150px;
        width: auto;
        margin-bottom: 1rem;
    }

    h2 {
        color: ${darkorange};
    }
    .size {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        color: ${white};
        background-color: ${props => props.size === "large" ? red : props.size === "medium" ? orange : blue};
        width: 30px;
        height: 30px;
        text-align: center;
        margin-left: 1rem;
        font-size: 1.3rem;
        border-radius: 50%;
        font-weight: bold;
    }

    #card-buttons {
        position: absolute;
        bottom: 0.5rem;
        width: 90%;
    }
`

export default CardStyle;

