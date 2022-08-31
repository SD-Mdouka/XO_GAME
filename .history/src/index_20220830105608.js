import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalState } from "./component/context/ModalContext";
import { GameContext } from "./component/context/GameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameContext>
      <ModalState>
        <App />
      </ModalState>
    </GameContext>
  </React.StrictMode>
);
