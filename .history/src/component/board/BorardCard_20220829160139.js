import React from "react";
import Xicons from "../icons/Xicons";
import Oicons from "../icons/Oicons";

const BorardCard = ({ user = "nouser", active, index }) => {
  return (
    <div
      className={`card 
      ${active && user === "x" && "shadow-blue"}
    ${active && user === "o" && "shadow-yellow"}
    ${!active && "shadow-gray"}
    `}
    >
      {user === "x" && <Xicons color={"dark"} size="lg" />}
      {user === "o" && <Oicons color={"light"} size="lg" />}
    </div>
  );
};

export default BorardCard;
