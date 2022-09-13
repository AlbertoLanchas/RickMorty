import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import "./Filter.scss";

const Filters = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updatePageNumber("");
    updateStatus("");
    updateGender("");
    updateSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline"
      >
        Clear filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updateSpecies={updateSpecies}
          updatePageNumber={updatePageNumber}
        />
        <Gender
          updateGender={updateGender}
          updatePageNumber={updatePageNumber}
        />
      </div>
    </div>
  );
};

export default Filters;
