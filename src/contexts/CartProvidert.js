import React, { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext(null);

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function cleanCart() {
    setCart([]);
    localStorage.setItem("@react-learn:cart", JSON.stringify([]));
  }

  function updateAmountItem(item) {
    const newcart = cart.slice();
    const index = newcart.indexOf(item);
    newcart.splice(index, 1, item);
    setCart(newcart);
    localStorage.setItem("@react-learn:cart", JSON.stringify(newcart));
  }

  function incrementItem(item) {
    setCart((previousCart) => [...previousCart, item]);
    localStorage.setItem("@react-learn:cart", JSON.stringify([...cart, item]));
  }
  function decrementItem(item) {
    const newcart = cart.slice();
    const index = newcart.indexOf(item);
    newcart.splice(index, 1);
    setCart(newcart);
    localStorage.setItem("@react-learn:cart", JSON.stringify(newcart));
  }

  useEffect(() => {
    async function loadingStorageData() {
      const storageCart = localStorage.getItem("@react-learn:cart");
      if (storageCart) {
        console.log(storageCart);
        setCart(JSON.parse(storageCart));
      }
    }
    loadingStorageData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        incrementItem,
        decrementItem,
        updateAmountItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
