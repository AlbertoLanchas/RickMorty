import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Cards from "../components/Pure/Cards/Cards";
import InputGroup from "../components/Pure/Filters/Category/InputGroup";

import "../styles/Episodes.css";

const Location = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const { name, type, dimension } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <div className="row mb-4">
          <h2 className="text-center mb-3">
            Location:{" "}
            <span className="text-primary">
              {name === "" ? "Unknown" : name}
            </span>
          </h2>
          <h5 className="text-center">
            Dimension: {dimension === "" ? "Unknown" : dimension}
          </h5>
          <h6 className="text-center">
            Type: {type === "" ? "Unknown" : type}
          </h6>
        </div>
        <div className="row">
          <div class="col-lg-3 col-12">
            <h4 class="text-center mb-4">Pick Location</h4>
            <InputGroup name="Location" total={126} setID={setID} />
          </div>
          <div className="col-lg-8 col-12">
            {" "}
            <div class="row">
              <Cards page="/locations/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
