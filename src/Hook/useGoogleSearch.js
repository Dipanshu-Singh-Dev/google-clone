import React from "react";
const key = "AIzaSyAU4-RNW8sQ-Ky4MuRKr1Rr508QOGSP664";
const id = "7731e76d02986670d";
const useGoogleSearch = (term) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&q=${term}`
      )
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((e) => {
          console.log(e);
          setData(null);
        });
    };
    fetchData();
  }, [term]);
  return data ? data : null;
};

export default useGoogleSearch;
