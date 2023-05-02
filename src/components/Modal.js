import React from "react";

import { ModalContext } from "./context";

const modalStyles = {
  position: "absolute",
  top: "500px",
  left: "700px",
  width: "400px",
  height: "200px",
  bottom: "40px",
  border: "1px solid black",
  background: "lightblue",
};

const Modal = (props) => {
  return (
    <ModalContext.Consumer>
      {context => {
        if (context.showModal) {
          return (
            <div style={modalStyles}>
              <h1>Confirm Delete</h1><br></br><br></br>
              <button onClick={() => props.deleteTask(props.id)}>Delete</button>
            </div>
          );
        }

        return null;
      }}
    </ModalContext.Consumer>
  );
};

export default Modal;
