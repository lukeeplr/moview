import { styled } from "styled-components";


export const Wrapper = styled.button`
    display: block;
    background-color: var(--clr-dark-gray);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 20px;
    color: var(--clr-white);
    border: none;
    font-size: var(--font-lg);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`