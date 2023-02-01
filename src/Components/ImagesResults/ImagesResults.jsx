import { useSelector } from "react-redux";
import React from "react";
import variants from "../GlobalVariables/FramerVariants";
import { motion, AnimatePresence } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageModal from "../GlobalVariables/Modals/ImageModal/ImageModal";
const ImagesResults = () => {
  const search = useSelector((data) => data.search);
  const [state, setState] = React.useState();
  const [modalOpen, setModalOpen] = React.useState({
    opened: false,
    target: null,
  });
  const handleClose = () => {
    setModalOpen(false);
  };
  React.useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${search}&client_id=G4cAdBioT6BgxlT3WYOmO0dgDuP8R1bDov5fuIEA5SA&per_page=30`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, [search]);
  return (
    <div layout className="images-container" style={{ padding: "25px 0" }}>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen.opened && (
          <ImageModal
            handleClose={handleClose}
            target={modalOpen.target}
            type="image"
          />
        )}
        {/* correcting commit */}
      </AnimatePresence>
      <ResponsiveMasonry columnsCountBreakPoints={{ 600: 1, 800: 2, 1000: 3 }}>
        <Masonry>
          {state?.results?.map((elem) => (
            <motion.img
              onClick={() =>
                setModalOpen({ ...modalOpen, opened: true, target: elem })
              }
              variants={variants}
              src={elem?.urls?.small}
              style={{ margin: "2px", borderRadius: "5px", cursor: "pointer" }}
              alt="chal"
              id="123456"
              whileInView="inView"
              whileHover="hover"
              initial="normal"
              whileTap="click"
              className="grid-item"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImagesResults;
