import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "../components/NavBar/NavBar.jsx";
import { unicCharacter } from "../functions/getCharacters.js";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState("");
  let { name, location, origin, gender, image, status, species } = character;
  useEffect(() => {
    unicCharacter(id, setCharacter);
  }, []);
  return (
    <>
      <NavBar></NavBar>
      {character !== null ? (
        <div className="container d-flex justify-content-center mb-5">
          <div className="d-flex flex-column gap-3">
            <h2 className="text-center">{name}</h2>
            <img src={image} alt={id} className="img-fluid" />
            {(() => {
              if (status === "Dead") {
                return <div className="badge bg-danger fs-5">{status}</div>;
              } else if (status === "Alive") {
                return <div className=" badge bg-success fs-5">{status}</div>;
              } else {
                return <div className="badge bg-secondary fs-5">{status}</div>;
              }
            })()}
            <div className="content detail-color">
              <div className="">
                <span className="fw-bold">Gender : </span>
                {gender}
              </div>
              <div className="">
                <span className="fw-bold">Location: </span>
                {location?.name}
              </div>
              <div className="">
                <span className="fw-bold">Origin: </span>
                {origin?.name}
              </div>
              <div className="">
                <span className="fw-bold">Species: </span>
                {species}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "No hay personaje"
      )}
    </>
  );
};

export default CharacterDetails;
