import React from "react";
import NewsContainer from "../NewsContainer/NewsContainer";
import { useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AnimatePresence } from "framer-motion";
import Modal from "../GlobalVariables/Modals/Modal";
const key = "pub_16233214b5315d1d86aa40b37c2c810e00e5a";
const NewsResults = () => {
  const search = useSelector((data) => data.search);
  const [results, setResults] = React.useState();
  let [loading, setLoading] = React.useState(false);
  let [Error, setError] = React.useState(false);
  const [modalState, setmodalState] = React.useState({
    modalOpen: false,
    target: null,
  });
  React.useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=${key}&q=${search}&language=en`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError(false);
        console.log(data);
        setResults(data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);
  const modalOpener = (elem) => {
    setmodalState({
      ...modalState,
      modalOpen: true,
      target: elem,
    });
  };
  const handleClose = () => {
    setmodalState({ ...modalState, modalOpen: false });
  };
  return (
    <div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalState.modalOpen && (
          <Modal
            handleClose={handleClose}
            target={modalState.target}
            type="news"
          />
        )}
      </AnimatePresence>
      {loading ? (
        <p>Loading</p>
      ) : Error ? (
        <p>Something went wrong</p>
      ) : (
        <div style={{ padding: "25px 0" }}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 500: 1, 700: 2, 900: 3 }}
          >
            <Masonry>
              {results?.results.map((elem) => (
                <NewsContainer elem={elem} modalOpener={modalOpener} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
    </div>
  );
};

export default NewsResults;
