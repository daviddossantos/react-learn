import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  h1,
  h2,
  text,
  strong {
    color: #000;
  }

  h1 {
    margin: 10px 0;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;

  img {
    width: 150px;
  }

  @media (max-width: 600px) {
    img {
      width: 100px;
    }
  }
`;

export const Item = styled.div`
  margin: 10px 0 20px 20px;
  padding: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 600px;

  @media (max-width: 600px) {
    margin: 20px;
  }
`;

export const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;

  text {
    margin: 5px 0;
  }

  @media (max-width: 600px) {
    text,
    strong {
      font-size: 12px;
    }
  }
`;

export const ItemName = styled.text`
  font-weight: 600;
  font-size: 20px;
  text-align: left;
`;
export const ItemHighLight = styled.div`
  margin: 5px 0;

  span {
    color: #000;
  }
`;

export const Goback = styled.button`
  padding: 15px;
  background: ${(props) => props.theme.colors.secundary};
  border: 1px solid ${(props) => props.theme.colors.secundary};
  color: #fff;
  height: 50px;
  width: 300px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const CarEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;

  text {
    margin-bottom: 20px;
  }
`;

export const StyledItemRemove = styled.button`
  border: none;
  background: transparent;
`;
export const MyCart = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  h1 {
    margin-left: 10px;
  }

  button {
    background: transparent;
  }
`;

export const Separator = styled.div`
  width: 100%;
  border: 2px solid #eeeeee;
  margin-top: 20px;
`;

export const Amount = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    font-weight: 600;
    margin-right: 10px;
    color: #000;
  }
  input {
    margin: 0 10px;
    width: 50px;
    padding: 15px;
    text-align: center;
    border: 2px solid #eeeeee;
  }

  @media (max-width: 600px) {
    span {
      font-size: 12px;
    }
  }
`;

export const ButtonDecrement = styled.button`
  background: #fff;
`;
export const ButtonIncrement = styled(ButtonDecrement)`
  background: #fff;
`;
