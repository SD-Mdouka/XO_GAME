import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { ModalContext } from "../context/ModalContext";

const Restart = () => {
  const { handelReset } = useContext(GameContext);
  const { hideModal } = useContext(ModalContext);
  return (
    <div className="restart">
      <h3 className="restart__title">Restart Game ?</h3>
      <div className="restart__btns">
        <button className="btn btn-sm" onClick={handelReset}>
          no,cancel
        </button>
        <button className="btn btn-sm btn-yellow" onClick={hideModal}>
          yes,restart
        </button>
      </div>
    </div>
  );
};

export default Restart;
