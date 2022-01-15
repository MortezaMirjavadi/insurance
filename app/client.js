import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "@Components/App";
import { store } from "@Store/initial";
import "@Assets/styles/main.scss";

function renderApp({ App }) {
  const rootElement = document.getElementById("root");

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    rootElement
  );
}

renderApp({ App });
