import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { StyledHeader, ContainerHeader } from "./Header.styled";
import Menu from "../menu/Menu";
import Burger from "../burger/Burger";
import { AUTH_ROUTES } from "../../../constants/auth.routes";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <ContainerHeader>
      <StyledHeader>
        <Link to={AUTH_ROUTES.HOME}>
          <img src={logo} alt="logo" />
        </Link>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </StyledHeader>
    </ContainerHeader>
  );
}
