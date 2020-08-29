import styled, { css } from "styled-components";
import { transparentize } from "polished";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 0 20px;

  nav {
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;

    li {
      color: #fff;
      font-size: 15px;
      margin-right: 10px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  @media (max-width: 600px) {
    display: none;

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: transparent;
    }

    ${(props) =>
      props.open &&
      css`
        background: ${transparentize(0.2, `${props.theme.colors.primary}`)};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: ${({ open }) =>
          open ? "translateX(0)" : "translateX(-100%)"};
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-in-out;

        li {
          font-size: 28px;
          text-transform: uppercase;
          padding-bottom: 20px;
          font-weight: bold;
          color: ${props.theme.colors.text};
        }
      `}
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  background: ${(props) => props.theme.colors.secundary};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NameUser = styled.span`
  text-align: right;
  font-weight: 600;
`;

export const InfoUser = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const User = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  color: #fff;
  img {
    margin-left: 10px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const CartImage = styled.button`
  margin-left: 10px;
  background:transparent;
  display:flex;
  align-items:center;
    justify-content:center;
  span {
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    ::after {
      margin-left:25px;
      margin-bottom:10px;
      content: "${(props) => props.cart}";
      color: #fff;
      font-weight: 700;
      font-size: 0.75rem;
      height: 20px;
      width: 20px;
      background: #f92;
      border-radius: 50%;
      line-height: 20px;
    }
  }

  @media(max-width:600px){
    display:none
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
`;

export const Logout = styled.button`
  background: transparent;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
`;
