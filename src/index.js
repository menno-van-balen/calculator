import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <p style={{ textAlign: "center" }}>
      Coded and Designed by{" "}
      <a
        href="https://github.com/menno-van-balen"
        target="_blank"
        rel="noopener noreferrer"
      >
        Menno
      </a>
    </p>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
