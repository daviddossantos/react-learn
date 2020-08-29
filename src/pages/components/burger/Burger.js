import React from "react";
import { StyledBurger } from "./Burger.styled";

export default function Burger({ open, setOpen }) {
  return (
    <StyledBurger onClick={() => setOpen(!open)} open={open}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
