import "./App.css";
import Board from "./component/board/Board";
import Start from "./component/start/Start";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Start />
        <Board />
      </div>
    </div>
  );
}

export default App;
