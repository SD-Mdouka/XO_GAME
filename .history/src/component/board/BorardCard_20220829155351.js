import React from "react";

const BorardCard = ({ user = "nouser", active, index }) => {
  return (
    <div className="card shadow-gray">
      {user === "x" && <Xicons color={"dark"} size="lg" />}
      {user === "o" && <Oicons color={"light"} size="lg" />}
    </div>
  );
};

export default BorardCard;
