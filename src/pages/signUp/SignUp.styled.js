import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;

  background: ${(props) => props.theme.colors.primary};

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

export const SignIn = styled.a`
  width: 100%;
  text-align: center;
  margin: 10px 0;
  display: flex;
  font-weight: 600;
  color: #4194dc;
  justify-content: center;
  margin-top: 30px;
  cursor: initial;
  color: #fff;
  font-size: 15px;
  a {
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: #f92;
    padding-bottom: 2px;
    margin-left: 5px;
  }
`;
