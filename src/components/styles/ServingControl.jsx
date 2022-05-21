import styled from 'styled-components';

const ServingControl = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    div:nth-child(2) {
        border: 1px solid orange;
        padding: 0.25rem 0.5rem;
    }
    
    div:nth-child(3) {
        position: relative;
        button {
            font-size: 1.1rem;
        }
        button:first-child {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -70%);
        }
        button:last-child {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -30%);
        }

    }

`;

export default ServingControl;