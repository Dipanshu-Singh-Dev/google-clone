import SearchFooter from "../../Components/SearchFooter/SearchFooter"; /* eslint-disable no-unused-vars */
import React from "react";
import useGoogleSearch from "../../Hook/useGoogleSearch";
import NavbarSearch from "../../Components/NavbarSearch/NavbarSearch";
import ResultsNumber from "../../Components/ResultsNumber/ResultsNumber";
import ResultContainer from "../../Components/ResultContainer/ResultContainer";
import { useSelector } from "react-redux";

const Searchpage = () => {
  let [loading, setLoading] = React.useState(true);
  let [Error, setError] = React.useState(false);
  let data = useSelector((data) => data[0]);
  data && localStorage.setItem("search", data);
  if (!data) data = localStorage.getItem("search");

  let results = useGoogleSearch(data);
  React.useEffect(() => {
    if (results) setLoading(false);
    if (results && Object.keys(results)[0] === "error") setError(true);
    console.log(results);
  }, [results]);
  results && console.log(results);
  return loading ? (
    <p>Loading</p>
  ) : Error ? (
    <p>Something went wrong</p>
  ) : (
    <div>
      {data && <NavbarSearch val={data} />}
      <div
        style={{
          width: "50%",
          marginLeft: "12.5%",
          textAlign: "left",
          padding: "2px 5px",
          fontSize: "14px",
          color: "gray",
        }}
      >
        <ResultsNumber
          totalResults={
            results ? results.searchInformation.formattedTotalResults : null
          }
          searchTime={
            results ? results.searchInformation.formattedSearchTime : null
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "50%",
          marginLeft: "12.5%",
          paddingBottom: "25px",
          textAlign: "left",
        }}
      >
        {results?.items.map((elem) => (
          <ResultContainer
            link={elem.link}
            displayLink={elem.displayLink}
            title={elem.title}
            snippet={elem.snippet}
          />
        ))}
      </div>
      <SearchFooter />
    </div>
  );
};

export default Searchpage;
