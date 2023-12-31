import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

type Props = {
    backdrop: string;
}

export const Wrapper = styled.div<Props>`
    background: ${({ backdrop }) => 
    backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : '#000'
};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0; 
        }
        to {
            opacity: 1;
        }
    }
`

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 20px;

    @media (max-width: 768px) {
        display: block;
        max-height: none;
    }
`

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--clr-white);
    overflow: hidden;

    h1 {
        font-size: var(--font-xl);

        @media (max-width: 768px) {
            font-size: var(--font-md);
    }
    }

    p {
        font-size: var(--font-lg);

        @media (max-width: 768px) {
            font-size: var(--font-sm);
    }
    }
`