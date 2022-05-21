import styled from 'styled-components';


const SaladEditStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    .info {
        /* background-color: red; */
        border: 2px solid black;
        
    }

    .edit-name {
        label, input {
            font-size: 2rem;
            margin-right: 0.5rem;
        }
    }
`


export default SaladEditStyle;