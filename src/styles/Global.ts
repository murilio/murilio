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

  a {
    text-decoration: none;
    color: var(    --color-roxo);
  }

  /* styles markdown */

  h1 {
    font-size: 32px;
    line-height: 40px;
    vertical-align: baseline;
    letter-spacing: normal;
    word-spacing: 0px;
    margin: 24px 0px 16px;
    padding: 0px 0px 9.6px;
    font-weight: 600;
    border-bottom: solid 1px #ddd;
  }

  h2 {
    font-size: 24px;
    line-height: 30px;
    vertical-align: baseline;
    letter-spacing: normal;
    word-spacing: 0px;
    margin: 24px 0px 16px;
    padding: 0px 0px 7.2px;
    font-weight: 600;
  }

  h3 {
    font-size: 20px;
    line-height: 25px;
    vertical-align: baseline;
    letter-spacing: normal;
    word-spacing: 0px;
    margin: 24px 0px 16px;
    padding: 0px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    vertical-align: baseline;
    letter-spacing: normal;
    word-spacing: 0px;
    margin: 0px 0px 16px;
    padding: 0px;
  }

  code {
    background-color: rgba(242, 242, 242, 1);
    padding: 2px 4px;
  }

  pre {
    background: rgb(29, 31, 33);
    color: rgb(248, 248, 242);
    white-space: pre;
    overflow: auto;
    padding: 1.5rem;
    margin: 1.5rem 0px;
    border-radius: 3px;

    > code {
      color: #f8f8f2;
      background-color: transparent;
      text-shadow: 0 1px rgb(0 0 0 / 30%);
      direction: ltr;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      tab-size: 4;
      hyphens: none;
    }
  }

  ul {
    padding-left: 20px;
  }

  /* end style markdown */

  /* styles categories */
  .golang, .go {
    background-color: #7fd5ea88;
    color: #007d9c;
    padding: 5px;
    border-radius: 4px;
    font-size: 13px;
  }

  .react-js, .react {
    background-color: #61dafb88;
    color: var(--color-preto);
    padding: 5px;
    border-radius: 4px;
    font-size: 13px;
  }
  /* end styles categories */
`

export default GlobalStyle
