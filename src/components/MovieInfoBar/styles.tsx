import styled from "styled-components";

export const Wrapper = styled.div`
    
    width: 100%;
    background-color: var(--clr-dark-gray);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    width: 100%;
    justify-content: space-around;

    p {
        background-color: #27272a;
        color: var(--clr-light-gray);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: var(--font-lg);
    }

    @media (max-width: 960px) {
            display: block;
            width: 90%;
            margin: 0 auto;

            p {
                font-size: var(--font-md);
                text-align: center;
            }
    }

`
