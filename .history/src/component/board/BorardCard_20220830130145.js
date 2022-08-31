import React, { useContext } from "react";
import Xicons from "../icons/Xicons";
import Oicons from "../icons/Oicons";
import { GameContext } from "../context/GameContext";

const BorardCard = ({ user = "nouser", active, index }) => {
  const { handelSquareClicke } = useContext(GameContext);
  return (
    <div
      className={`card 
      ${active && user === "x" && "shadow-blue"}
    ${active && user === "o" && "shadow-yellow"}
    ${!active ? "shadow-gray" : "active"}
    `}
      onClick={() => handelSquareClicke(index)}
    >
      {user === "x" && <Xicons color={`${active && "dark"}`} size="lg" />}
      {user === "o" && <Oicons color={`${active && "dark"}`} size="lg" />}
    </div>
  );
};

export default BorardCard;
