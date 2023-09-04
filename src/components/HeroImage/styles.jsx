import styled from 'styled-components'

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, rgba(0, 0, 0, 0)
        41%, rgba(0, 0, 0, 0.65)
        100%

    ), 
    url(${({ image }) => image}), var(--clr-dark-gray);
    background-size: 100% cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animatedHeroImage 1.5s ease-in-out;

    @keyframes animatedHeroImage {
        from {
            opacity: 0.3;
            filter: blur(2rem);
        }

        to {
            opacity: 1;
            filter: blur(0);
        }
    }
`

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`

export const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    min-height: 100px;
    margin-right: 20px;
    color: var(--clr-white);

    h1 {
        font-size: var(--font-xl);

        @media (max-width: 720px) {
            font-size: var(--font-lg);
        }
    }

    p {
        font-size: var(--font-md);

        @media (max-width: 720px) {
            font-size: var(--font-sm);
        }
    }

    @media (max-width: 720px) {
        max-width: 100%;
    }

`