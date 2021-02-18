import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-size: 14px;
  }
  *:focus {
    outline: 0 !important;
  }
  body {
    background-color: #ebeff3;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: #183247;
    -webkit-font-smoothing: antialiased;
  }
  p {
    margin-bottom: 0;
    font-size: 13px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }

  a:hover {
    text-decoration: none;
  }
  hr {
    margin-top: 15px;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .center{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
