// index.js
import React from "react";
import { createRoot } from "react-dom/client"; // Importer createRoot depuis react-dom/client
import { Provider } from "react-redux";
import store from "./redux";
import "./App.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));

console.log("Avant le rendu de l'application");

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

console.log("Après le rendu de l'application");
