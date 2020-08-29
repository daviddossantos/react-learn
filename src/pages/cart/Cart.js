import React, { useEffect, useState } from "react";
import {
  Container,
  Item,
  InfoItems,
  ItemName,
  ItemHighLight,
  Goback,
  CarEmpty,
  StyledItemRemove,
  MyCart,
  Separator,
  Amount,
  StyledInfo,
  ButtonDecrement,
  ButtonIncrement,
} from "./Cart.styled";
import Header from "../components/header/Header";
import { AiOutlineDelete } from "react-icons/ai";
import {
  MdKeyboardBackspace,
  MdAddCircle,
  MdRemoveCircle,
} from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useCart } from "../../contexts/CartProvidert";
import { AUTH_ROUTES } from "../../constants/auth.routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const history = useHistory();
  const { cart, decrementItem, updateAmountItem } = useCart();
  const [itemSelected, setItemSelect] = useState(false);

  useEffect(() => {}, []);

  function handleRemoveItem(item) {
    // setItemSelect(true);
    decrementItem(item);

    if (cart.length > 0) {
      toast.success("Item removido com sucesso!");
    }
  }

  function decrementAmoutItem(item) {
    let { amountSelect } = item;
    amountSelect--;
    if (amountSelect >= 1) {
      item.amountSelect = amountSelect;
      updateAmountItem(item);
    }
  }

  function incrementAmoutItem(item) {
    let { amountSelect } = item;
    amountSelect++;
    if (amountSelect > item.qtd) {
      toast.error("Quantidade indisponivel");
    } else {
      item.amountSelect = amountSelect;
      updateAmountItem(item);
    }
  }

  if (cart.length === 0) {
    return (
      <Container>
        <Header />
        <CarEmpty>
          <h1>Seu Carrinho esta vazio</h1>
          <text>
            Adicione produtos clicando no botão “Comprar” na página de produto.
          </text>

          <Goback onClick={() => history.push(AUTH_ROUTES.LIST_ITEMS)}>
            Voltar para página inicial
          </Goback>
        </CarEmpty>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <MyCart>
        <button
          onClick={() => {
            history.push(AUTH_ROUTES.LIST_ITEMS);
          }}
        >
          <MdKeyboardBackspace style={{ color: "#000" }} size={30} />
        </button>
        <h1>Meu Carrinho</h1>
      </MyCart>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {cart.map((item) => (
          <Item key={item.id} itemSelected={itemSelected}>
            <StyledInfo>
              <img src={item.primaryImage} alt={item.title} />
              <InfoItems>
                <ItemName>{item.title}</ItemName>
                <text>Vendido por David Cruz</text>
                <text>Entregue por David Cruz</text>
                <ItemHighLight>
                  <strong>Tamanho: </strong>
                  <span>{item.size}</span>
                </ItemHighLight>
                <ItemHighLight>
                  <strong>Cor: </strong> <span>{item.color}</span>
                </ItemHighLight>
              </InfoItems>
              <StyledItemRemove
                onClick={() => {
                  handleRemoveItem(item);
                }}
              >
                <AiOutlineDelete size={25} style={{ color: "#757575" }} />
              </StyledItemRemove>
            </StyledInfo>
            <Separator />
            <Amount>
              <span>Quantidade:</span>
              <ButtonDecrement onClick={() => decrementAmoutItem(item)}>
                <MdRemoveCircle style={{ color: "#eeee" }} size={25} />
              </ButtonDecrement>
              <input value={item.amountSelect} />
              <ButtonIncrement onClick={() => incrementAmoutItem(item)}>
                <MdAddCircle style={{ color: "#eeee" }} size={25} />
              </ButtonIncrement>
            </Amount>
          </Item>
        ))}
      </div>
    </Container>
  );
}
