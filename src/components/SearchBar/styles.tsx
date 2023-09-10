import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background-color: var(--clr-dark-gray);
    padding: 0 20px;
`

export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 100%;
    height: 50%;
    background-color: #27272a;
    margin: 0 auto;
    border-radius: 10px;
    padding: 0.6rem 1rem;
    display: flex;
    
    input {
        border: none;
        background-color: transparent;
        height: 100%;
        width: 100%;
        color: var(--clr-medium-gray);
        font-size: 1.5rem;

        &::placeholder {
            color: var(--clr-medium-gray);
        }

        &:focus {
            outline: none;
        }
    }

    svg {
        font-size: 2rem;
        color: var(--clr-medium-gray);
        margin: 0 1rem 0 0.2rem;
    }

`