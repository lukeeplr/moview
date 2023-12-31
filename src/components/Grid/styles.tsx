import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;

    h1 {
        color: var(--clr-dark-gray);

        @media (max-width: 768px) {
            font-size: var(--font-lg);
        }
    }


`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem
`