import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Plus Jakarta Sans", Times, sans-serif, serif;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 8192px) {
    ::-webkit-scrollbar {
      display: none;
    }
    body {
      opacity: 0;
    }
  }
  @media screen and (max-width: 3120px) {
    html {
      scroll-padding: 11rem;
    }
    header h5:not(header h5:last-child) {
      margin-right: 5rem;
    }
    body {
      background-image: linear-gradient(to right, #0c0c1e, #141414);
      opacity: 1;
    }
  }
  @media screen and (max-width: 960px) {
    html {
      scroll-padding: 9rem;
    }
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);