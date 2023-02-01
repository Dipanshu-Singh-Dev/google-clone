import React from "react";
import { useSelector } from "react-redux";
import ProductContainer from "../ProductContainer/ProductContainer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ShoppingResults = () => {
  const search = useSelector((data) => data.search);
  let [data, setData] = React.useState();
  let [loading, setLoading] = React.useState(true);
  let [Error, setError] = React.useState(false);
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

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : Error ? (
        <p>Something went wrong</p>
      ) : (
        <ResponsiveMasonry>
          <Masonry>
            {data?.products?.map((elem) => {
              return <ProductContainer elem={elem} />;
            })}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </>
  );
};

export default ShoppingResults;
