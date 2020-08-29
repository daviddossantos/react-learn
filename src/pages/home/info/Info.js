import React from "react";
import { Container, Title, Subtitle } from "./Info.styled";

export default function Info() {
  return (
    <Container>
      <Title>Estudo React JS</Title>
      <p>
        Olá pessoal, esse projeto foi criado com o intuito de apresentar algumas
        funcionalidades que são utilizadas constantemente em qualquer site.
      </p>
      <p>
        O foco principal desse desenvolvimento foi botar a mão na massa e criar
        tudo do zero.
      </p>
      <p>Para esse desenvolvimento foi utilizado as seguintes bibliotecas:</p>

      <ul>
        <li>Styles Components; React Router; React Lottie;</li>
        <li>Polished; Firebase Authentication; React Icons; React Router;</li>
        <li>Axios; Unform; Yup;</li>
      </ul>
      <Subtitle>Funcionalidades Implementadas:</Subtitle>
      <ul>
        <li>Cadastrar; Efetuar Login; Recuperar Senha;</li>
        <li>Menu Hambúguer;</li>
        <li>Implementação carrinho de comprar; manter histórico de items;</li>
      </ul>
    </Container>
  );
}
