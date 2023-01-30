import React from "react";
import NewsContainer from "../NewsContainer/NewsContainer";
import { useSelector } from "react-redux";
const NewsResults = () => {
  const search = useSelector((data) => data.search);
  return <div>NewsResults</div>;
};

export default NewsResults;
