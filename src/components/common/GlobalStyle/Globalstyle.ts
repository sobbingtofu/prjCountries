import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: "Noto Sans KR", sans-serif;
    background-color:#ebecee;
  }
  .playwrite-co {
  font-family: "Playwrite CO", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  }
`;

export default GlobalStyle;
