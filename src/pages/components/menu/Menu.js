import React from "react";
import {
  StyledMenu,
  InfoUser,
  NameUser,
  CartImage,
  User,
  ContainerUser,
  Logout,
} from "./Menu.styled";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";
import { AUTH_ROUTES } from "../../../constants/auth.routes";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../../contexts/CartProvidert";
import { APP_ROUTES } from "../../../constants/app.routes";

export default function Menu({ open }) {
  const history = useHistory();
  const { currentUser, signOut } = useAuth();
  const { cart, cleanCart } = useCart();

  function handleLogout() {
    cleanCart();
    signOut();
    history.push(APP_ROUTES.ROOT);
  }
  return (
    <StyledMenu open={open}>
      <nav>
        <li>
          <Link to={AUTH_ROUTES.HOME}>Início</Link>
        </li>
        <li>
          <Link to={AUTH_ROUTES.LIST_ITEMS}>Produtos</Link>
        </li>
        {open && (
          <li>
            <Logout onClick={handleLogout}>Deslogar</Logout>
          </li>
        )}
      </nav>

      <ContainerUser>
        <User onClick={() => history.push(AUTH_ROUTES.ACCOUNT)}>
          <InfoUser>
            {currentUser.displayName && (
              <NameUser>{currentUser.displayName}</NameUser>
            )}
            <span>{currentUser.email}</span>
          </InfoUser>
          {currentUser.photoURL && (
            <img src={currentUser.photoURL} alt="foto" />
          )}
        </User>
        <CartImage
          cart={cart.length}
          onClick={() => history.push(AUTH_ROUTES.CART)}
        >
          <FiShoppingCart size={25} style={{ color: "#fff" }} />
          <span></span>
        </CartImage>
      </ContainerUser>
    </StyledMenu>
  );
}
