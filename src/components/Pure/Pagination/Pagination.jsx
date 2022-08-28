import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

const Pagination = ({ info, pageNumber, updatePageNumber }) => {
  const [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.addEventListener("resize", updateDimension);
  }, []);
  return (
    <>
      <style jsx>{`
        @media (max-width: 760px) {
          .next,
          .prev {
            display: none;
          }
          .pagination {
            font-size: 14px;
          }
        }
      `}</style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4 btn_number"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev btn_pagination"
        nextClassName="btn btn-primary fs-5 next btn_pagination"
        activeClassName="active"
        pageCount={info?.pages}
        onPageChange={(data) => {
          updatePageNumber(data.selected + 1);
        }}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
      />
    </>
  );
};

export default Pagination;
