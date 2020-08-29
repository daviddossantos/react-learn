import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  font: 400 14px Roboto, sans-serif;
  background-color: ${(props) => props.theme.colors.background};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}



input,
button,
textarea {
  font: 400 14px Roboto, sans-serif;
  border:none;
}
a,
body,
ul,
li,
a,
p {

  color:${(props) => props.theme.colors.text};
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-align:center;
  text-decoration:none;
}

img {
  max-width:100%;
}

`;
