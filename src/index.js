import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { getThemeMode } from "./ThemeMode";
import Website from "./Website";

ReactDOM.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>,
  document.querySelector("#root")
);

document.body.classList.add(`${getThemeMode()}-mode`);
