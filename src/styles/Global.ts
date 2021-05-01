import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-preto: #000000;
    --color-branco: #FFFFFF;
    --color-cinza-gelo: #F7FCFF;
    --color-dark-gray: #505050;
    --color-gray: #CFCFD2;
    --color-dark-roxo: #1E1B57;
    --color-soft-roxo: #787698;
    --color-roxo: #534CCE;
    --color-contraste: #F14D9C;
  }

  ::selection {
    background: var(--color-roxo);
    color: var(--color-cinza-gelo);
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-contraste);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-roxo);
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  
  html, body, #__next {
    height: 100%;
    min-height: 100vh;
    scrollbar-width: thin;
    scroll-behavior: smooth;
    background-color: var(--color-branco);
    scrollbar-color: var(--color-contraste) transparent;
  }

  body {
    font-family: 'Poppins', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: var(--color-dark-gray);
  }

  input, button, textarea {
    font-family: 'Poppins', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle