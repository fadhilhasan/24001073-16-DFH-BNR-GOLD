import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/app.scss";
import "./scss/bootstrap.scss";
import "./scss/fontawesome.scss";
import "./js/bootstrap.bundle.min.js";
import "./js/main.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
