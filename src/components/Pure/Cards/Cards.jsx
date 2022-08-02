import React, { useEffect, useState } from "react";
import { allCharacters } from "../../../functions/getCharacters";

const Cards = () => {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    allCharacters(setCharacters);
  }, []);
  console.log(characters);

  return (
    <>
      {characters !== null
        ? characters.map((character) => (
            <div key={character.id} className="col-4">
              <a href={`characters/${character.id}`}>{character.name}</a>
              <img src={character.image} alt={character.name} />
            </div>
          ))
        : "No characters found :("}
    </>
  );
};

export default Cards;
