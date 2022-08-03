import React, { useEffect, useState } from "react";
import { allCharacters } from "../../functions/getCharacters";
import Cards from "../Pure/Cards/Cards";
import Filters from "../Pure/Filters/Filters";
import "../../styles/Characters.css";
import Pagination from "../Pure/Pagination/Pagination";

const Characters = () => {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    allCharacters(setCharacters);
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters></Filters>
          </div>
          <div className="col-8">
            <div className="row">
              <Cards characters={characters}></Cards>
            </div>
          </div>
        </div>
      </div>
      <Pagination characters={characters} />
    </div>
  );
};

export default Characters;
