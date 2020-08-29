import React from "react";
import { Container } from "./Home.styled";
import Header from "../components/header/Header";
import Info from "./info/Info";

export default function Home() {
  return (
    <Container>
      <Header />
      <Info />
    </Container>
  );
}
