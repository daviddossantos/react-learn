import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;

  h1 {
    margin-bottom: 20px;
  }

  form {
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.3);
    background: #ffffff;
    width: 400px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 20px;
    text {
      color: #000;
      font-weight: 500;
      text-align: left;
    }

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
  }
  @media (max-width: 600px) {
    form {
      width: 350px;
    }
  }
`;

export const Recouver = styled.button`
  height: 50px;
  width: 100%;

  background: ${(props) => props.theme.colors.secundary};
  border: 2px solid ${(props) => props.theme.colors.secundary};

  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
`;
export const Title = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 22px;
`;
export const GoBack = styled.a`
  font-weight: bold;

  color: #fff;
  border-bottom-style: solid;
  border-width: 2px;
  border-bottom-color: #f92;
`;
export const Email = styled.input`
  transition: border-color 0.2s;
  background: #edf1f5;
  margin-bottom: 20px;
  padding: 0 20px;
  border: 2px solid #fff;
  border-radius: 5px;
  height: 50px;
  width: 320px;
  transform: 400px;

  ::placeholder {
    color: #757575;
  }
  :focus {
    border-color: #9e96f7;
  }
`;
