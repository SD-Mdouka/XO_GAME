import Board from "./component/board/Board";
import Modal from "./component/modal/Modal";
import Start from "./component/start/Start";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Start /> */}
        <Board />
      </div>
      <Modal />
    </div>
  );
}

export default App;
