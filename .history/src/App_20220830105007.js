import { useContext } from "react";
import Board from "./component/board/Board";
import { GameState } from "./component/context/GameContext";
import Modal from "./component/modal/Modal";
import Start from "./component/start/Start";

function App() {
  const { screen } = useContext(GameState);
  return (
    <div className="App">
      <div className="container">
        {screen === "start" && <Start />}
        {screen === "start" && <Board />}
      </div>
      <Modal />
    </div>
  );
}

export default App;
