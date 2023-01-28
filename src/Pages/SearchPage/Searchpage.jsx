import SearchFooter from "../../Components/SearchFooter/SearchFooter"; /* eslint-disable no-unused-vars */
import React from "react";
import useGoogleSearch from "../../Hook/useGoogleSearch";
import NavbarSearch from "../../Components/NavbarSearch/NavbarSearch";
import ResultsNumber from "../../Components/ResultsNumber/ResultsNumber";
import ResultContainer from "../../Components/ResultContainer/ResultContainer";
import { useSelector } from "react-redux";
import styles from "./SearchPage.module.css";
import { maxWidth } from "@mui/system";
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "100vw",
      }}
    >
      <NavbarSearch val={search} />
      <div
        id={styles.Results}
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          gap: "10px",
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
