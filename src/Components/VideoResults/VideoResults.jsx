import React from "react";
import { useSelector } from "react-redux";
const key = "AIzaSyCFL8GfWX0EvrpnziMl8Sma4qgr4mZHZDw";

const VideoResults = () => {
  const search = useSelector((data) => data.search);
  let [loading, setLoading] = React.useState(true);
  let [Error, setError] = React.useState(false);
  const [results, setResults] = React.useState();
  React.useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/${search}?part=snippet,id&part=id&maxResults=25&q=surfing&type=video&videoType=any&key=${key}`
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
  return loading ? (
    <p>Loading</p>
  ) : Error ? (
    <p>Something went wrong</p>
  ) : (
    <div></div>
  );
};

export default VideoResults;
