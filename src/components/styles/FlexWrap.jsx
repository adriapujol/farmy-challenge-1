import styled from 'styled-components';

const FlexWrap = styled.div`
    display: flex;
    flex-direction: ${props => props.column ? "column" : ""};
    justify-content: ${props => props.center ? "center" : props.between ? "space-between" : props.around ? "space-around" : props.evently ? "space-evently" : ""};
    align-items: ${props => props.center ? "center" : ""};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "auto"};
    max-height: ${props => props.maxHeight ? props.maxHeight : "auto"};
    padding: ${props => props.padding ? props.padding : "auto"};
`;

export default FlexWrap;