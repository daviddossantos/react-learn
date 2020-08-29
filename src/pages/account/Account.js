import React from "react";
import { StyledAccount, ContainerAccout } from "./Account.styled";
import Header from "../components/header/Header";
import { useAuth } from "../../contexts/AuthProvider";
import { APP_ROUTES } from "../../constants/app.routes";
import { useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useCart } from "../../contexts/CartProvidert";

export default function Account() {
  const { signOut } = useAuth();
  const { cleanCart } = useCart();
  const history = useHistory();
  function handleSignOut() {
    cleanCart();
    signOut();
    history.push(APP_ROUTES.ROOT);
  }
  return (
    <StyledAccount>
      <Header />
      <ContainerAccout>
        <button onClick={handleSignOut}>
          Deslogar <FiLogOut size={20} />
        </button>
      </ContainerAccout>
    </StyledAccount>
  );
}
