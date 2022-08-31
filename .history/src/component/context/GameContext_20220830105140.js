import { createContext, useState } from "react";

const GameConetext = createContext();

const GameState = (props) => {
  const [screen, setScreen] = useState("game"); // start , game
  return (
    <GameConetext.Provider
      value={{
        screen,
      }}
    >
      {props.children}
    </GameConetext.Provider>
  );
};
export { GameConetext, GameState };
