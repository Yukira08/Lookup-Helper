import React, { useEffect, useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchPaperItem from "./SearchPaperItem";
import "./SearchPaper.css";
import { BiSortAlt2, BiFilterAlt } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import ReactPaginate from "react-paginate";

const SearchPaperList = (props) => {
  return (
    <div className="container">
      <ul className="list-unstyled">
        {props.papers.map((paper) => (
          <SearchPaperItem
            key={paper.id}
            id={paper.id}
            title={paper.title}
            date={paper.date}
            description={paper.description}
            database={paper.source}
            count={paper.citation}
            url = {paper.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchPaperList;
