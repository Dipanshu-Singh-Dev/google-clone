import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "../VideoContainer/VideoContainer";
import { motion } from "framer-motion";
import styles from "./VideoResults.module.css";
import { AnimatePresence } from "framer-motion";
import Modal from "../GlobalVariables/Modals/Modal";
const key = "AIzaSyDkNAovVDt9mhVvpkPLuVOZBkoyySYKP2c";
const variants = {
  animate: {
    duration: 0.2,
  },
  normal: {
    scale: 0.9,
    opacity: 0.5,
    transition: {
      duration: 0.2,
    },
  },
  inView: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    scale: 1.025,
    zIndex: 1,
    transition: {
      duration: 0.2,
    },
  },
  click: {
    scale: 1,
    zIndex: 1,
    transition: {
      duration: 0.2,
    },
  },
};
const VideoResults = () => {
  const search = useSelector((data) => data.search);
  let [loading, setLoading] = React.useState(false);
  let [Error, setError] = React.useState(false);
  const [results, setResults] = React.useState();
  const [modalOpen, setModalOpen] = React.useState({
    opened: false,
    target: null,
  });
  React.useEffect(() => {
    fetch(
      `https://pixabay.com/api/videos/?key=33257373-bf64c232f02301ff9dc0aa075&q=${search}
  `
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError(false);
        setResults(data);
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [search]);
  const handleClose = () => {
    setModalOpen(false);
  };
  return loading ? (
    <p>Loading</p>
  ) : Error ? (
    <p>Something went wrong</p>
  ) : (
    <div className={styles.container}>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen.opened && (
          <Modal
            handleClose={handleClose}
            target={modalOpen.target}
            type="image"
          />
        )}
      </AnimatePresence>
      {results?.hits.map((elem) => {
        return (
          <motion.div
            style={{ borderRadius: "15px", paddingBottom: "0" }}
            variants={variants}
            initial="normal"
            whileHover="hover"
            whileTap="click"
            whileInView="inView"
          >
            <VideoContainer
              elem={elem}
              onClick={() =>
                setModalOpen({ ...modalOpen, opened: true, target: elem })
              }
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default VideoResults;
