import React from "react";
import { useSelector } from "react-redux";
import ProductContainer from "../ProductContainer/ProductContainer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AnimatePresence } from "framer-motion";
import ProductModal from "../GlobalVariables/Modals/ProductModal/ProductModal";
const ShoppingResults = () => {
  console.log("shoppingresults called");
  const search = useSelector((data) => data.search);
  let [data, setData] = React.useState();
  let [loading, setLoading] = React.useState(true);
  let [Error, setError] = React.useState(false);
  const [modalState, setmodalState] = React.useState({
    modalOpen: false,
    target: null,
  });
  const handleClose = () => {
    setmodalState({ ...modalState, modalOpen: false });
  };
  React.useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setData(data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [search]);
  const modalOpener = (elem) => {
    setmodalState({
      ...modalState,
      modalOpen: true,
      target: elem,
    });
  };
  return (
    <div style={{ margin: "25px 0" }}>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalState.modalOpen && (
          <ProductModal
            handleClose={handleClose}
            target={modalState.target}
            type="product"
          />
        )}
      </AnimatePresence>
      {loading ? (
        <p>Loading</p>
      ) : Error ? (
        <p>Something went wrong</p>
      ) : (
        <ResponsiveMasonry>
          <Masonry>
            {data?.products?.map((elem) => {
              return <ProductContainer elem={elem} modalOpener={modalOpener} />;
            })}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </div>
  );
};

export default ShoppingResults;
