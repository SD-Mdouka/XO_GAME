import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalState } from "./component/context/ModalContext";
import { GameContext, GameState } from "./component/context/GameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalState>
      <GameState>
        <App />
      </GameState>
    </ModalState>
  </React.StrictMode>
);
