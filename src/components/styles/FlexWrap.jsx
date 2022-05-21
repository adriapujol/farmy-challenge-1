import styled from 'styled-components';

const FlexWrap = styled.div`
    display: flex;
    flex-direction: ${props => props.column ? "column" : ""};
    justify-content: ${props => props.center ? "center" : props.between ? "space-between" : props.around ? "space-around" : props.evently ? "space-evently" : ""};
    align-items: ${props => props.center ? "center" : ""};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.width : "auto"};

    & > * {
        padding: height: ${props => props.childPad ? props.childPad : 0};
    } 
`;

export default FlexWrap;