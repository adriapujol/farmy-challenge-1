import styled from 'styled-components';
import { yellow, green, lightgrey, darkgreen, darkgrey, white, black } from '../../colors';


const NavbarStyled = styled.nav`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    background-color: ${darkgreen};
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;

    a {
        color: ${white};
        font-family: 'Koulen', cursive;
        font-size: 2rem;
        text-decoration: none;

        &:hover {
            color: ${yellow};
        }
    }

    a:last-child {
        font-size: 1.5rem;
        align-self: center;
    }




`;

export default NavbarStyled;