import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, updatePageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center my-4 gap-4"
      focePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary fs-5 next"
      previousClassName="btn btn-primary fs-5 prev"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        updatePageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
