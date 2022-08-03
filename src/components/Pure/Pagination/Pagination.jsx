import React, { useEffect, useState } from "react";
import { allCharacters } from "../../../functions/getCharacters";

const Pagination = ({ pageNumber, updatePageNumber }) => {
  let next = () => {
    updatePageNumber((x) => x + 1);
  };
  let prev = () => {
    if (pageNumber === 1) return;
    updatePageNumber((x) => x - 1);
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={prev} className="btn btn-primary">
        Prev
      </button>
      <button onClick={next} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default Pagination;
