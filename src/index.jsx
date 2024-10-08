import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./assets/scss/main.css";
import "./assets/scss/File.scss";
import TagManager from "react-gtm-module";

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
