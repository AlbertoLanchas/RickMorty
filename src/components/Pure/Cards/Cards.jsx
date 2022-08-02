import React, { useEffect, useState } from "react";
import { allCharacters } from "../../../functions/getCharacters";
import styles from "../../../styles/Cards.module.scss";

const Cards = () => {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    allCharacters(setCharacters);
  }, []);
  console.log(characters);

  return (
    <>
      {characters !== null
        ? characters.map((character) => {
            let { id, name, image, location, status } = character;
            return (
              <div key={character.id} className="col-4 mb-4 position-relative">
                <div className={styles.cards}>
                  <img
                    src={image}
                    alt={name}
                    className={`${styles.img} img-fluid`}
                  />
                  <div style={{ padding: "10px" }} className="content">
                    <div className="fs-5 fw-bold mb-4">{name}</div>
                    <div className="">
                      <div className="fs-6">Last Location</div>
                      <div className="fs-5">{location.name}</div>
                    </div>
                  </div>
                </div>
                {(() => {
                  if (status === "Alive") {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-success`}
                      >
                        {status}
                      </div>
                    );
                  } else if (status === "Dead") {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-danger`}
                      >
                        {status}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-secondary`}
                      >
                        {status}
                      </div>
                    );
                  }
                })()}
              </div>
            );
          })
        : "No characters found :("}
    </>
  );
};

export default Cards;
