import React, { useContext } from "react";
import Xicons from "../icons/Xicons";
import Oicons from "../icons/Oicons";
import { GameContext } from "../context/GameContext";

const Start = () => {
  const { activeUser, setActiveUser, changePlayeMode } =
    useContext(GameContext);
  return (
    <div className="start">
      <div className="start__header">
        <Xicons />
        <Oicons />
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg">Pick Player 1'st mark</h1>
        <div className="start__players">
          <span
            className={activeUser === "x" ? "start__players--active" : ""}
            onClick={() => setActiveUser("x")}
          >
            <Xicons color={activeUser === "x" ? "dark" : "light"} />
          </span>
          <span
            className={activeUser === "o" ? "start__players--active" : ""}
            onClick={() => setActiveUser("o")}
          >
            <Oicons color={activeUser === "o" ? "dark" : "light"} />
          </span>
        </div>
        <p className="text-light">remember:x goes first</p>
      </div>
      <div className="start__btns">
        <button
          className="btn btn-yellow"
          onClick={() => changePlayeMode("cpu")}
        >
          new game (vs CPU)
        </button>
        <button
          className="btn btn-blue"
          onClick={() => changePlayeMode("user")}
        >
          new game (vs Player)
        </button>
      </div>
    </div>
  );
};

export default Start;
