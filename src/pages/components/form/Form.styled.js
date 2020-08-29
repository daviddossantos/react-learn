import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const StyledForm = styled(Unform)`
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.3);
  background: #ffffff;
  width: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  input {
    width: 100%;
    height: 50px;
    border-width: 2px;
    border-style: solid;
    border-color: #edf1f5;
    margin-bottom: 10px;
    padding: 0 20px;
    border-radius: 5px;
    font-weight: 500;
    transition: border-color 0.2s;
    background: #edf1f5;
    ::placeholder {
      color: #757575;
    }
    :focus {
      border-color: #9e96f7;
    }
  }
`;
