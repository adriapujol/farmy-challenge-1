import styled from 'styled-components';

const FlexWrap = styled.div`
    display: flex;
    flex-direction: ${props => props.column ? "column" : ""};
    justify-content: ${props => props.center ? "center" : props.between ? "space-between" : props.around ? "space-around" : props.evently ? "space-evently" : ""};
    align-items: ${props => props.center ? "center" : ""};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "auto"};
    max-height: ${props => props.maxHeight ? props.maxHeight : "auto"};
    max-width: ${props => props.maxWidth ? props.maxWidth : "auto"};
    min-height: ${props => props.minHeight ? props.minHeight : "auto"};
    min-width: ${props => props.minWidth ? props.minWidth : "auto"};
    padding: ${props => props.padding ? props.padding : "auto"};
`;

export default FlexWrap;