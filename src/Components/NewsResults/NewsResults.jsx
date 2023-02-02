import React from "react";
import NewsContainer from "../NewsContainer/NewsContainer";
import { useSelector } from "react-redux";
const key = "pub_16233214b5315d1d86aa40b37c2c810e00e5a";
const NewsResults = () => {
  const search = useSelector((data) => data.search);
  const [results, setResults] = React.useState();
  let [loading, setLoading] = React.useState(true);
  let [Error, setError] = React.useState(false);
  React.useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=${key}&q=${search}&language=en`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError(false);
        setResults(data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  });
  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : Error ? (
        <p>Something went wrong</p>
      ) : (
        <p>NewsResults</p>
      )}
    </div>
  );
};

export default NewsResults;
