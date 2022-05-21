import styled from 'styled-components';


const SaladEditStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    .info {
        border: 2px solid lightgray;
        
    }

    .edit-name {
        /* display: flex; */
        /* align-items: center; */
        label, input {
            font-size: 2rem;
            margin-right: 0.5rem;
        }
    }
`


export default SaladEditStyle;