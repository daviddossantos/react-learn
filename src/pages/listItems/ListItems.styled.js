import styled from "styled-components";
import { shade } from "polished";

export const StyledListItems = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Title = styled.div`
  padding: 20px 0;
  color: #000;
  font-size: 38px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const Items = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1500px;
  height: 100vh;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 1fr 1fr 1fr;
  padding: 0 20px;
  grid-gap: 10px;
  justify-content: center;
  button {
    height: 80px;
    padding: 15px;
    color: #fff;
    background: ${(props) => props.theme.colors.primary};
    border: none;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    transition: background 0.2s ease 0s;
    width: 100%;

    :hover {
      background: ${shade(0.2, "#818")};
    }
  }

  @media (max-width: 600px) {
    button {
      font-size: 12px;
    }
  }
`;

export const Image = styled.img`
  transition: background 1s ease 0s;
  :hover {
    opacity: 30%;
  }
`;
export const TitleItem = styled.div`
  background: #f92;

  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    span {
      font-size: 12px;
    }
  }
`;
