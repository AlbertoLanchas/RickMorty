import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/Cards.module.scss";

const Cards = ({ page, results }) => {
  return (
    <>
      {results
        ? results.map((x) => {
            let { id, name, image, location, status } = x;

            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`${page}${id}`}
                key={x.id}
                className="col-lg-4  col-md-6 col-12 mb-4 position-relative text-dark"
              >
                <div
                  className={`${styles.cards} d-flex  flex-column justify-content-center`}
                >
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
              </Link>
            );
          })
        : "No characters found :("}
    </>
  );
};

export default Cards;
