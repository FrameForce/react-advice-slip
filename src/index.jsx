import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import "@fontsource/dancing-script/700.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/700.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
