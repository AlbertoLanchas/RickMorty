import React, { useEffect, useState } from "react";
import { allCharacters } from "../functions/getCharacters";

const Characters = () => {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    allCharacters(setCharacters);
  }, []);
  return (
    <div>
      {characters !== null
        ? characters.map((character) => (
            <div key={character.id}>
              <a href={`characters/${character.id}`}>{character.name}</a>
              <img src={character.image} alt={character.name} />
            </div>
          ))
        : "No hay personajes"}
    </div>
  );
};

export default Characters;
