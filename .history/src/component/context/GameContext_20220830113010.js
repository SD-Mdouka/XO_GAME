import { createContext, useState } from "react";

const GameContext = createContext();

const GameState = ({ children }) => {
  const [screen, setScreen] = useState("start"); // start , game
  return (
    <GameContext.Provider
      value={{
        screen,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
export { GameContext, GameState };
