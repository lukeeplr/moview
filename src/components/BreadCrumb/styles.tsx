import { styled } from "styled-components";

export const Wrapper = styled.div`
    height: 60px;
    background-color: var(--clr-dark-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    `

export const Content = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  a {
    text-decoration: none;
  }

  span {
    font-size: var(--font-md);
    color: var(--clr-light-gray);
    @media (max-width: 768px) {
        font-size: var(--font-sm);
    }
  }

`