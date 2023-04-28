// Navigate.js

import React, { useEffect, useState } from "react";
import classes from "./Paginate.module.css";

const Paginate = ({
  postsPerPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={classes.pagination__container}>
      <ul>
        {pageNumbers.length !== 0 && (
          <li className={classes.pagination__item}>
            <a onClick={previousPage}>
              <span>Prev</span>
            </a>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className={classes.pagination__item}>
            <a
              onClick={() => paginate(number)}
              className={
                number === currentPage ? classes.active : classes.pageNumber
              }
            >
              <span>{number}</span>
            </a>
          </li>
        ))}
        {pageNumbers.length !== 0 && (
          <li className={classes.pagination__item}>
            <a onClick={nextPage}>
              <span>Next</span>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Paginate;
