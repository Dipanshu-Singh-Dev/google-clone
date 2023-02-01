import React from "react";
import { motion } from "framer-motion";
import variants from "../ModalVariants";
import ButtonVariants from "../../Variants/ButtonFramerVariants";
import styles from "../Modal.module.css";
const ImageModal = ({ handleClose, target }) => {
  React.useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  });
  return (
    <div>
      <motion.div
        className={styles.backdrop}
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          style={{
            textAlign: "center",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "gray",
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className={styles.container}
        >
          <img src={target.urls.full} alt="preview" height="80%" />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "3%",
            }}
          >
            <p>
              <span style={{ color: "black" }}>by </span> {target.user.name}
            </p>
            <p>
              <span style={{ color: "black" }}>Published on </span>
              {target.user.updated_at.substring(0, 10)}
            </p>
            <a href={target.urls.full}>
              <motion.button
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  margin: "25px",
                  border: "1px solid black",
                  backgroundImage:
                    "linear-gradient(to right,white, ghostwhite)",
                }}
                whileInView="inView"
                whileHover="hover"
                initial="hidden"
                whileTap="click"
                variants={ButtonVariants}
              >
                Download
              </motion.button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageModal;
