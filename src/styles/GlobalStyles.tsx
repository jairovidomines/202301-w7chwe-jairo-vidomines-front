import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, ::after, ::before {
box-sizing: border-box;
}

body {
  padding: 20px;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}

h1, h1 {
  padding: 0;
  margin: 0;
}

ol, ul, li {
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

`;

export default GlobalStyles;
