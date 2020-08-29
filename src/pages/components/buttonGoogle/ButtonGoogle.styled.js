import styled from "styled-components";
import { shade, border } from "polished";

export const SytledButtonGoogle = styled.a`
  margin-top: 15px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #2c88d9;
  background: #2c88d9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  text-align: center;
  font-weight: bold;
  transition: background 0.2s ease 0s;
  cursor: pointer;

  span {
    display: flex;
    background: #fff;
    padding: 3px;
    border: 1px solid #fff;
    border-radius: 5px;
    margin-right: 5px;
  }

  :hover {
    background: ${shade(0.1, "#2c88d9")};
  }
`;
