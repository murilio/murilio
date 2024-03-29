import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-preto: #000000;
    --color-branco: #FFFFFF;
    --color-cinza-gelo: #F7FCFF;
    --color-dark-gray: #505050;
    --color-gray: #CFCFD2;
    --color-dark-roxo: #1E1B57;
    --color-soft-roxo: #57566f;
    --color-roxo: #534cce;
    --color-contraste: #F14D9C;
    --color-contraste-dark: #993163;
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
    color: var(--color-roxo);
  }

  a:hover {
    text-decoration: underline;
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
    background-color: var(--color-cinza-gelo);
    color: var(--color-contraste);
    font-size: 15px;
    padding: 2px 4px;
  }

  pre {
    background: #2d333b;
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

  blockquote {
    background-color: var(--color-cinza-gelo);
    padding: 20px;
    border-left: solid 5px var(--color-contraste);

    p {
      margin: 0;
    }
  }

  ul {
    padding-left: 20px;
  }
  /* end style markdown */

  /* styles categories */
  .git,
  .golang,
  .go,
  .react-js,
  .react,
  .javascript,
  .js,
  .html,
  .angular,
  .css {
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 13px;
  }

  .git {
    background-color: #e65328;
    color: var(--color-preto);
  }

  .golang, .go {
    background-color: #7fd5ea88;
    color: #004d61;

  }

  .react-js, .react {
    background-color: #61dafb88;
    color: var(--color-preto);
  }

  .javascript, .js {
    background-color: #fbbb19;
    color: var(--color-preto);
  }

  .html {
    background-color: #fc7700;
    color: var(--color-preto);
  }

  .angular {
    background-color: #f11653;
    color: var(--color-branco);
  }

  .css {
    background-color: #2491C8;
    color: var(--color-branco);
  }
  /* end styles categories */
`;

export default GlobalStyle;
