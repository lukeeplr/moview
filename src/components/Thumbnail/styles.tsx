import styled from 'styled-components'

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    min-height: 100%;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: thumb 0.5s;

    &:hover {
        opacity: 0.8;
    }



    @keyframes thumb {
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