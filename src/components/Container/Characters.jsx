import React, { useEffect, useState } from "react";
import { allCharacters } from "../../functions/getCharacters";
import Cards from "../Pure/Cards/Cards";
import Filters from "../Pure/Filters/Filters";
import "../../styles/Characters.css";
import Pagination from "../Pure/Pagination/Pagination";

const Characters = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log(data);
    })();
  }, [api]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters></Filters>
          </div>
          <div className="col-8">
            <div className="row">
              <Cards page="/" results={results}></Cards>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default Characters;
