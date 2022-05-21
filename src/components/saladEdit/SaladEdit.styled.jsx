import styled from 'styled-components';


const SaladEditStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    .info {
        /* background-color: red; */
        border: 2px solid black;
        padding: 1rem;
    }

    .edit-name {
        /* width: 50%; */
        label, input {
            font-size: 2rem;
            margin-right: 0.5rem;
        }
        display: flex;

        button {
            cursor: pointer;
            background-color: transparent;
            border-style: none;
            &:hover {
                color: red;
            }
        }
    }
`


export default SaladEditStyle;