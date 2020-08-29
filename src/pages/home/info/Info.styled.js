import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 40%;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  p,
  ul li {
    margin-bottom: 10px;
    color: #000;
    text-align: left;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  margin: 20px 0 20px 0;
`;
