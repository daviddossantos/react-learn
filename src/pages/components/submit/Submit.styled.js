import styled from "styled-components";

export const SytledSubmit = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.secundary};
  height: 50px;
  border: 0;
  color: ${(props) => props.theme.colors.text};
  border-radius: 5px;
  margin: 10px 0;
  font-weight: 700;
  transition: background 0.2s ease 0s;

  :hover {
    background: #1aae9f;
  }
`;
