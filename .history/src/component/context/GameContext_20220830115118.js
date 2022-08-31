import { createContext, useState } from "react";

const GameContext = createContext();

const GameState = (props) => {
  const [screen, setScreen] = useState("start"); // start , game
  const [activeUser, setActiveUser] = useState("x"); // x , o
  const [playerMode, setPlayerMode] = useState("user"); // user , ordinateur

  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        playerMode,
        setActiveUser,
        setPlayerMode,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export { GameContext, GameState };
