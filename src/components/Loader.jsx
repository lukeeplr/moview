import styled from 'styled-components'

const Loader = styled.div`
    border: 10px solid var(--clr-light-gray);
    border-top: 10px solid var(--clr-medium-gray);
    height: 70px;
    width: 70px;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 20px auto;


    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

export default Loader