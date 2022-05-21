import styled from 'styled-components';

const FlexWrap = styled.div`
    display: flex;
    flex-direction: ${props => props.column ? "column" : ""};
    justify-content: ${props => props.center ? "center" : props.space ? "space-between" : props.even ? "space-around" : ""};
    align-items: ${props => props.center ? "center" : ""};

`;

export default FlexWrap;