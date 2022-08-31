import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import Restart from "./Restart";
import Win from "./Win";

const Modal = () => {
  const { show, showModal } = useContext(ModalContext);
  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal__content">
            <div className="container">
              {/* <Win /> */}
              <Restart />
            </div>
          </div>
        </div>
      )}
      <button onClick={showModal}></button>
    </>
  );
};

export default Modal;
