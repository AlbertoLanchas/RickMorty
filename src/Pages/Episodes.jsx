import React, { useState, useEffect } from "react";
import Cards from "../components/Pure/Cards/Cards";
import InputGroup from "../components/Pure/Filters/Category/InputGroup";

import "../styles/Episodes.css";

const Episodes = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row mb-4">
        <h2 className="text-center mb-3">
          Episode:{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h2>
        <h5 className="text-center">
          Air Date:{air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div class="col-3">
          <h4 class="text-center mb-4">Pick Episodes</h4>
          <InputGroup name="Episode" total={51} setID={setID} />
        </div>
        <div className="col-8">
          {" "}
          <div class="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
