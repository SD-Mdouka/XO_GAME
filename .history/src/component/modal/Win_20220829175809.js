import React from "react";
import Xicon from "../icons/Xicons";

const Win = () => {
  return (
    <div className="score">
      <p>you win !</p>
      <h3>
        <Xicon /> Takes the round
      </h3>
      <div className="scor__btn">
        <button className="btn btn-sm">Quit</button>
        <button className="btn btn-sm btn-yellow">Next Round</button>
      </div>
    </div>
  );
};

export default Win;
