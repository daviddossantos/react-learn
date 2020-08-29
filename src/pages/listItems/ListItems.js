import React, { useState } from "react";
import {
  Items,
  Image,
  TitleItem,
  Title,
  StyledListItems,
} from "./ListItems.styled";
import Header from "../components/header/Header";
import { CART_ITEMS } from "../../constants/cart.items";
import { useHistory } from "react-router-dom";
import { AUTH_ROUTES } from "../../constants/auth.routes";
import { useCart } from "../../contexts/CartProvidert";

export default function ListItems() {
  const [items, setItems] = useState(CART_ITEMS);
  const { incrementItem, cart, updateAmountItem } = useCart();
  const history = useHistory();

  function handleItem(item) {
    const newcart = cart.slice();

    const isExist = newcart.includes(item);

    if (isExist) {
      item.amountSelect++;
      updateAmountItem(item);
    } else {
      item["amountSelect"] = 1;
      incrementItem(item);
    }

    history.push(AUTH_ROUTES.CART);
  }

  return (
    <StyledListItems>
      <Header />
      <Title>Tênis Nike</Title>
      <Items>
        {items.map((item) => (
          <div key={item.id}>
            <Image src={item.primaryImage} alt={item.title} />
            <TitleItem>
              <span>{item.title}</span>
            </TitleItem>
            <button onClick={() => handleItem(item)}>Comprar</button>
          </div>
        ))}
      </Items>
    </StyledListItems>
  );
}
