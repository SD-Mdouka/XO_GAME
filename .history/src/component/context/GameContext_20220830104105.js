import { createContext } from "react";

const GameConetext = createContext();

const GameState = (props) => {
  return <GameConetext.Provider>{props.children}</GameConetext.Provider>;
};
export { GameConetext, GameState };
