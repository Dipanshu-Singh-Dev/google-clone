import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal/ImageModal";
import styles from "./Modal.module.css";
import modalVariants from "./ModalVariants";
const Modal = ({ handleClose, target, type }) => {
  console.log(handleClose, target, type);
  let currentModal;
  React.useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  });
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
