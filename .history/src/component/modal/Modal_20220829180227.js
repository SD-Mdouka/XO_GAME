import React from "react";
import Restart from "./Restart";
import Win from "./Win";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="container">
          {/* <Win /> */}
          <Restart />
        </div>
      </div>
    </div>
  );
};

export default Modal;
