import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  html {
    font-size: 62.5%;
    font-weight: 300;
    scroll-behavior: smooth;
  }

  body {
    align-items: center;
    background-color: #131519;
    display: flex;
    flex-direction: column;
    font-family: 'Overpass', sans-serif;
    justify-content: space-evenly;
    margin: 0;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
