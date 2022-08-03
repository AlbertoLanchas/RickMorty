import React, { useEffect, useState } from "react";
import { allCharacters } from "../../functions/getCharacters";
import Cards from "../Pure/Cards/Cards";
import Filters from "../Pure/Filters/Filters";
import "../../styles/Characters.css";
import Pagination from "../Pure/Pagination/Pagination";
import Search from "../Pure/Search/Search";

const Characters = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      // console.log(data);
    })();
  }, [api]);

  return (
    <div>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filters
            pageNumber={pageNumber}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          ></Filters>

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
