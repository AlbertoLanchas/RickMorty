import React, { useEffect, useState } from "react";
import { allCharacters } from "../../functions/getCharacters";
import Cards from "../Pure/Cards/Cards";
import Filters from "../Pure/Filters/Filters";

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
              <Cards></Cards>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
