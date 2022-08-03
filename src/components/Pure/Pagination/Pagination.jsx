import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, updatePageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center my-4 gap-4"
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      previousClassName="btn btn-primary fs-5 prev"
      nextClassName="btn btn-primary fs-5 next"
      activeClassName="active"
      pageCount={info?.pages}
      onPageChange={(data) => {
        updatePageNumber(data.selected + 1);
      }}
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  );
};

export default Pagination;
