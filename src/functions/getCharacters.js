import axios from "axios";
import React, { useState, useEffect } from "react";

const allCharacters = async (state) => {
  // const [pageNumber, setPageNumber] = useState(1);
  // useEffect(() => {}, [request]);

  const request = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${1}`
  );
  state(request.data.results);
};

const unicCharacter = async (id, state) => {
  const request = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  state(request.data);
  console.log(request.data);
};

export { allCharacters, unicCharacter };
