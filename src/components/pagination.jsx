import React from "react";
import { range } from "lodash";

const Pagination = ({ pageSize, itemCount, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemCount / pageSize);
  const pages = range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <button
              href=""
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// const allName = [1,23,'dd'];
// allName.ma

export default Pagination;
