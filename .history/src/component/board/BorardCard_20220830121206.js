import React from "react";
import Xicons from "../icons/Xicons";
import Oicons from "../icons/Oicons";

const BorardCard = ({ user = "nouser", active, index }) => {
  return (
    <div
      className={`card 
      ${active && user === "x" && "shadow-blue"}
    ${active && user === "o" && "shadow-yellow"}
    ${!active ? "shadow-gray" : "active"}
    `}
    >
      {user === "x" && <Xicons color={"light"} size="lg" />}
      {user === "o" && <Oicons size="lg" />}
    </div>
  );
};

export default BorardCard;
