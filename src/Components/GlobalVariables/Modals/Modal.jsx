import React from "react";
import ReactDOM from "react-dom";
import ImageModal from "./ImageModal/ImageModal";
const Modal = ({ handleClose, target, type }) => {
  console.log(handleClose, target, type);
  let currentModal;
  if (type === "image")
    currentModal = <ImageModal handleClose={handleClose} target={target} />;
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <>{currentModal}</>,
        document.querySelector("body")
      )}
    </React.Fragment>
  );
};

export default Modal;
