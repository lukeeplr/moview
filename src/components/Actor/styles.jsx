import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 5px;
    text-align: center;

    h3 {
        margin: 10px 0 0 0;
        color: var(--clr-dark-gray);
        font-size: var(--font-md);
    }

    p {
        margin: 5px 0;
        color: #3F3F46;
        font-size: var(--font-sm)
    }
`

export const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
    height: 200px;
    border-radius: 15px;
    box-shadow: 8px -5px 8px rgba(0, 0, 0, 0.2);
`