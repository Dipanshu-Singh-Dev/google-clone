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
  let { search, type } = useSelector((data) => {
    return data;
  });

  let results = useGoogleSearch(search, type);
  React.useEffect(() => {
    if (results) setLoading(false);
    if (results && Object.keys(results)[0] === "error") setError(true);
  }, [results]);
  if (!search) return <p>Something went wrong</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavbarSearch val={search} />
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
        {loading ? (
          <p>Loading</p>
        ) : Error ? (
          <p>Something went wrong</p>
        ) : (
          <div>
            <ResultsNumber
              totalResults={results?.searchInformation.formattedTotalResults}
              searchTime={results?.searchInformation.formattedSearchTime}
            />
            {results.items.map((elem) => {
              const { link, displayLink, title, snippet } = elem;
              return (
                <ResultContainer
                  link={link}
                  displayLink={displayLink}
                  title={title}
                  snippet={snippet}
                />
              );
            })}
          </div>
        )}
      </div>
      <SearchFooter />
    </div>
  );
};

export default Searchpage;
