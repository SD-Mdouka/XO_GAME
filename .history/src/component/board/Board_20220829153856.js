import React from "react";
import Xicons from "../icons/Xicons";
import Oicons from "../icons/Oicons";
import Refrsh from "../icons/Refrsh";

const Board = () => {
  return (
    <div className="board">
      <div className="board__header">
        <div>
          <Xicons />
          <Oicons />
        </div>
        <div className="board__turn">
          <Xicons color={"ligth"} size="sm" /> trun
        </div>
        <div>
          <button className="btn btn-sm board__restart">
            <Refrsh />
          </button>
        </div>
      </div>
      <div className="board__body">
        <h1 className="text-lg">Pick Player 1'st mark</h1>
        <div className="board__players">
          <span className="board__players--active">
            <Xicons color={"dark"} />
          </span>
          <span>
            <Oicons color={"light"} />
          </span>
        </div>
        <p className="text-light">remember:x goes first</p>
      </div>
      <div className="board__footer">
        <button className="btn btn-yellow">new game (vs CPU)</button>
        <button className="btn btn-blue">new game (vs Player)</button>
      </div>
    </div>
  );
};

export default Board;