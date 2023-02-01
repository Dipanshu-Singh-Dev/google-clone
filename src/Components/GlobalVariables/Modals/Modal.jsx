import React from "react";
import ReactDOM from "react-dom";

const ImageModal = ({ handleClose, target }) => {
  console.log(handleClose, target);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <>
          <ImageModal handleClose={handleClose} target={target} />
        </>,
        document.querySelector("body")
      )}
    </React.Fragment>
  );
};

export default ImageModal;
