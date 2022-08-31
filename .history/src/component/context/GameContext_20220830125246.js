import { createContext, useState } from "react";

const GameContext = createContext();

const GameState = (props) => {
  /*initial game */
  const [screen, setScreen] = useState("start"); // start , game
  const [activeUser, setActiveUser] = useState("x"); // x , o
  const [playerMode, setPlayerMode] = useState("user"); // user , cpu

  const changePlayeMode = (mode) => {
    setPlayerMode(mode);
    setScreen("game");
  };
  /*in the game */
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [xnext, setXnext] = useState(false);

  const handelSquareClicke = (ix) => {
    const currentUser = xnext ? "o" : "x";

    if (playerMode === "cpu" && currentUser !== activeUser) {
      return;
    }

    let ns = [...squares];
    ns[ix] = !xnext ? "x" : "o";

    setSquares(ns);
    setXnext(!xnext);

    //check winner
  };

  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        squares,
        setActiveUser,
        changePlayeMode,
        handelSquareClicke,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export { GameContext, GameState };
