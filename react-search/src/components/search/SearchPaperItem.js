import React from "react";
import ReactHtmlParser from "react-html-parser";

import "./SearchPaperItem.css";

const SearchPaperItem = (props) => {
  return (
    <li className="search__items">
      <div className="row">
        <div className="col-lg-10 col-md-10 search__items-heading">
          <a href={props.url} target="_blank">
            <h5 className="mb-3">{props.title}</h5>
          </a>

          <p>{props.description}</p>
        </div>
        <div className="col-lg-2 col-md-2">
          <div className="search__database">
            <p className="p-0 m-0 font-weight-bold">Database</p>
            <p className="p-0 mt-3">{props.database}</p>
          </div>
          <div className="mt-3 search__citation">
            <p className="p-0 m-0 font-weight-bold">Citation count</p>
            {props.count === -1 ? (
              <p className="p-0 mt-3" style={{ fontSize: "25px" }}>
                N/A
              </p>
            ) : (
              <p className="p-0 mt-3" style={{ fontSize: "25px" }}>
                {props.count}
              </p>
            )}
          </div>
        </div>
      </div>
      <p className="search__dates">{props.date}</p>
      <div className="hr"></div>
    </li>
  );
};

export default SearchPaperItem;
