import React from "react";
import { useSelector } from "react-redux";
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
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 400: 1, 600: 2, 800: 3, 1000: 4 }}
      >
        <Masonry>
          {state?.results?.map((elem) => (
            <img
              src={elem?.urls?.small}
              style={{ padding: "1px" }}
              alt="chal"
              id="123456"
              className="grid-item"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImagesResults;
