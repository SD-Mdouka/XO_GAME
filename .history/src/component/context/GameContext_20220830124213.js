import { createContext, useState } from "react";

const GameContext = createContext();

const GameState = (props) => {
  /*initial game */
  const [screen, setScreen] = useState("start"); // start , game
  const [activeUser, setActiveUser] = useState("x"); // x , o
  const [playerMode, setPlayerMode] = useState("user"); // user , cpu
  /*in the game */
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [xnext, setXnext] = useState(false);

  const changePlayeMode = (mode) => {
    setPlayerMode(mode);
    setScreen("game");
  };
  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        setActiveUser,
        changePlayeMode,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export { GameContext, GameState };
