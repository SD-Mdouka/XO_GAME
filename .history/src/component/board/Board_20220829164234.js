import React from "react";
import Xicons from "../icons/Xicons";
import Oicons from "../icons/Oicons";
import Refrsh from "../icons/Refrsh";
import BorardCard from "./BorardCard";

const Board = () => {
  const squars = [" ", "o", "x", " ", "o", "x", " ", "o", "x"];
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
        {squars.map((sq, ix) => (
          <BorardCard key={ix} index={ix} user={sq} active={ix === 5} />
        ))}
      </div>
      <div className="board__footer">
        <div className="card bg-blue">
          <p className="text-light">x (you)</p>
          <strong className="text-2xl">10</strong>
        </div>
      </div>
    </div>
  );
};

export default Board;
