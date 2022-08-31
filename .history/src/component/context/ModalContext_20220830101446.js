import { createContext } from "react";

const ModalContext = createContext();

const ModalState = (props) => {
  return <ModalContext.Provider>{props.children}</ModalContext.Provider>;
};
