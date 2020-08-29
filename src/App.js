import React from "react";
import { GlobalStyle } from "./styles/global.styled";
import AuthProvider from "./contexts/AuthProvider";
import CartProvider from "./contexts/CartProvidert";
import Routes from "./routes/index.routes";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

export default function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={light}>
        <AuthProvider>
          <GlobalStyle />
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </CartProvider>
  );
}
