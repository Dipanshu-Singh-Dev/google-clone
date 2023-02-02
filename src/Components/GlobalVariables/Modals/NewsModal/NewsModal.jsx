import React from "react";
import { motion } from "framer-motion";
import variants from "../ModalVariants";
import ButtonVariants from "../../Variants/ButtonFramerVariants";
import styles from "./ProductModal.module.css";

const ImageModal = ({ handleClose, target, type }) => {
  console.log(handleClose, target);
  React.useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  });
  if (type !== "product") return null;
  return (
    <div>
      <motion.div
        className={styles.backdrop}
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflowY: "scroll" }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className={styles.container}
        >
          <img src={target.images[0]} className={styles.image} alt="preview" />

          <div className={styles.deets}>
            <h2 style={{ color: "black" }}>{target.title}</h2>
            <p>{target.description}</p>
            <div className={styles.buyDeets}>
              <p className={styles.price}>
                <span style={{ textDecoration: "line-through" }}>
                  {target.price + 100}
                </span>

                {"    " + target.price}
              </p>
              <a>
                <motion.button
                  style={{
                    cursor: "pointer",
                    padding: "5px 25px",
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
                  Buy
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageModal;
