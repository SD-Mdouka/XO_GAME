import React from "react";
import Win from "./Win";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="container">
          <Win />
        </div>
      </div>
    </div>
  );
};

export default Modal;
