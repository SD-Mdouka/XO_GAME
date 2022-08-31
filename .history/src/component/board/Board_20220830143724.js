import React, { useContext } from "react";
import Xicons from "../icons/Xicons";
import Oicons from "../icons/Oicons";
import Refrsh from "../icons/Refrsh";
import BorardCard from "./BorardCard";
import { GameContext } from "../context/GameContext";

const Board = () => {
  const { squares, xnext, ties } = useContext(GameContext);
  return (
    <div className="board">
      <div className="board__header">
        <div>
          <Xicons />
          <Oicons />
        </div>
        <div className="board__turn">
          {!xnext ? (
            <Xicons color={"ligth"} size="sm" />
          ) : (
            <Oicons color={"ligth"} size="sm" />
          )}
          trun
        </div>
        <div>
          <button className="btn btn-sm board__restart">
            <Refrsh />
          </button>
        </div>
      </div>
      <div className="board__body">
        {squares.map((sq, ix) => (
          <BorardCard key={ix} index={ix} user={sq} active={ix === 5} />
        ))}
      </div>
      <div className="board__footer">
        <div className="card bg-blue">
          <p className="text-light">x (you)</p>
          <strong className="text-2xl">{ties.x}</strong>
        </div>
        <div className="card bg-light">
          <p className="text-light">ties</p>
          <strong className="text-2xl">{ties.x + ties.o}</strong>
        </div>
        <div className="card bg-yellow">
          <p className="text-light">o (cpu)</p>
          <strong className="text-2xl">{ties.o}</strong>
        </div>
      </div>
    </div>
  );
};

export default Board;
