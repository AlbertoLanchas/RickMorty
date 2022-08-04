import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { unicCharacter } from "../functions/getCharacters.js";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    unicCharacter(id, setCharacter);
  }, []);
  return (
    <>
      {character ? (
        <div>
          <h3>Personaje con el id {id}</h3>
          <p>Personaje {character.name} </p>
        </div>
      ) : (
        "No hay personaje"
      )}
    </>
  );
};

export default CharacterDetails;
