import React from "react";
import { useSelector } from "react-redux";
import variants from "../GlobalVariables/FramerVariants";
import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const ImagesResults = () => {
  const search = useSelector((data) => data.search);
  const [state, setState] = React.useState();

  React.useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${search}&client_id=G4cAdBioT6BgxlT3WYOmO0dgDuP8R1bDov5fuIEA5SA`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, [search]);

  return (
    <div className="images-container" style={{ padding: "25px 0" }}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 800: 1, 1000: 2 }}>
        <Masonry>
          {state?.results?.map((elem) => (
            <motion.img
              variants={variants}
              src={elem?.urls?.small}
              style={{ padding: "1px" }}
              alt="chal"
              id="123456"
              whileInView="inView"
              whileHover="hover"
              initial="normal"
              whileTap="click"
              transition={{ duration: 0.25 }}
              className="grid-item"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImagesResults;
