import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 80px;
  background: ${(props) => props.theme.colors.primary};
  padding: 0 30px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  color: #fff;
  width: 90%;
  max-width: 980px;
  img {
    width: 50px;
  }
  @media (max-width: 600px) {
    justify-content: space-between;
    padding: 0 5px;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.primary};
`;
