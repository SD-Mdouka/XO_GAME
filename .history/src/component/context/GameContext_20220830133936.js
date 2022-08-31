import { createContext, useContext, useState } from "react";
import { calcuSquaer } from "../helpers/calcuSquer";
import { ModalContext } from "./ModalContext";

const GameContext = createContext();

const GameState = (props) => {
  const { showModal, setModalMode } = useContext(ModalContext);
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
  };
  //state winner
  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);
  //check winner
  const chekWinner = (ns) => {
    const isWinner = calcuSquaer(ns);
    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.lines);
      //set ties
      showModal();
      setModalMode("winner");
    }
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
