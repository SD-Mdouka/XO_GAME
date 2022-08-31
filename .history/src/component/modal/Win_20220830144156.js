import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Oicon from "../icons/Oicons";
import Xicon from "../icons/Xicons";

const Win = () => {
  const { winner } = useContext(GameContext);
  return (
    <div className="score">
      <p>you win !</p>
      <h3 className="score__title">
        {winner === "x" ? <Xicon /> : <Oicon />}
        Takes the round
      </h3>
      <div className="score__btns">
        <button className="btn btn-sm" onClick={handelReset}>
          Quit
        </button>
        <button className="btn btn-sm btn-yellow" onClick={handelNextRound}>
          Next Round
        </button>
      </div>
    </div>
  );
};

export default Win;
