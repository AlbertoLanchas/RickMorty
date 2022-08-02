import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { unicCharacter } from "../../functions/getCharacters.js";

const CharacterDetails = () => {
  const params = useParams();
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    unicCharacter(params.id, setCharacter);
  }, []);
  return (
    <>
      {character !== null ? (
        <div>
          <h3>Personaje con el id {params.id}</h3>
          <p>Personaje {character.name} </p>
        </div>
      ) : (
        "No hay personaje"
      )}
    </>
  );
};

export default CharacterDetails;
