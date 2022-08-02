import React, { useState, useEffect } from "react";

function FetchData() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;
  console.log(results);

  let api = `https://rickandmortyapi.com/api/character/?page=${1}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return <div>FetchData</div>;
}

export default FetchData;
