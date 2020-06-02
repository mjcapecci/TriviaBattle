import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
html {
  scroll-behavior: auto;
}
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.mainFont};
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
