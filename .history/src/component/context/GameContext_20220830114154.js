import { createContext, useState } from "react";

const GameContext = createContext();

const GameState = (props) => {
  const [screen, setScreen] = useState("start"); // start , game
  return (
    <GameContext.Provider
      value={{
        screen,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export { GameContext, GameState };
