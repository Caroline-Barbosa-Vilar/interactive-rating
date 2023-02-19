import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  * {
    border: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
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
  
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>
);
