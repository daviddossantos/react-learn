import styled, { css } from "styled-components";

export const StyledBurger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    background: #000;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    display: flex;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => (open ? "#fff" : "#000")};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;
      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }
      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
