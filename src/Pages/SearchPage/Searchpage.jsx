import React from "react";
import { useParams } from "react-router-dom";
const Searchpage = () => {
  const { search } = useParams();
  return search ? <div>{search}</div> : null;
};

export default Searchpage;
