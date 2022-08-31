import { createContext, useContext, useEffect, useState } from "react";
import { calcuSquaer } from "../helpers/calcuSquer";
import { ModalContext } from "./ModalContext";

const GameContext = createContext();

const GameState = (props) => {
  const { showModal, setModalMode, hideModal } = useContext(ModalContext);
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
    if (squares[ix] || winner) {
      return;
    }
    const currentUser = xnext ? "o" : "x";

    if (playerMode === "cpu" && currentUser !== activeUser) {
      return;
    }

    let ns = [...squares];
    ns[ix] = !xnext ? "x" : "o";

    setSquares(ns);
    setXnext(!xnext);

    //check winner
    chekWinner(ns);
  };
  //state winner
  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);
  const [ties, setTies] = useState({ x: 0, o: 0 });
  //check winner
  const chekWinner = (ns) => {
    const isWinner = calcuSquaer(ns);
    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.lines);
      //set ties
      const ti = { ...ties };
      ti[isWinner.winner] += 1;
      setTies(ti);
      showModal();
      setModalMode("winner");
    }
  };
  /*new round chalange */
  const handelReset = () => {
    setSquares(new Array(9).fill(""));
    setXnext(false);
    setWinner(null);
    setWinnerLine(null);
    setActiveUser("x");
    setTies({ x: 0, o: 0 });
    hideModal();
    setScreen("start");
  };
  const handelNextRound = () => {
    setSquares(new Array(9).fill(""));
    setWinner(null);
    setWinnerLine(null);
    hideModal();
    setXnext(winner === "x");
  };
  /*is no winner*/
  const checkWinnner = () => {
    const moves = squares.filter((sq) => sq === "");
    if (moves.length === 0) {
      setWinner("no");
      showModal();
      setModalMode("winner");
    }
  };
  /*auto check cpu */
  useEffect(() => {
    checkWinnner();
  }, [xnext, winner, screen]);
  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        xnext,
        squares,
        ties,
        winner,
        winnerLine,
        setActiveUser,
        changePlayeMode,
        handelSquareClicke,
        handelReset,
        handelNextRound,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export { GameContext, GameState };
