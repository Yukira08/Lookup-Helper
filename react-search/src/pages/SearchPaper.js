import React, { useEffect, useState, useRef, useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchPaperList from "../components/search/SearchPaperList";
import useHttp from "../hooks/use-http";
import { fetchPapers } from "../lib/api";
import Paginate from "../components/paginate/Paginate";
import { BiSortAlt2, BiFilterAlt } from "react-icons/bi";
import "../components/search/SearchPaper.css";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const SearchPaper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [sortState, setSortState] = useState("DEFAULT");

  const [papers, setPapers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputRef = useRef();

  const submitHandler = useCallback(async () => {
    
    setIsLoading(true);
    setError(null);
    const enteredInput = inputRef.current.value.replace(/\s/g, "+");
    try {
      const response = await fetch(
        `https://phuongdinh.pythonanywhere.com/api/search/${enteredInput}/?format=json`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const loadedPaper = [];
      for (const key in data) {
        const paperObj = {
          id: key,
          ...data[key],
        };
        loadedPaper.push(paperObj);
      }

      setPapers(loadedPaper);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    inputRef.current.value = "";
  }, []);


  //Sort Papers
  const sortPapers = (papers, sortState) => {
    return papers.sort((paperA, paperB) => {
      if (sortState === "DEFAULT") {
        return paperA.id > paperB.id ? 1 : -1;
      }
      if (sortState === "date") {
        return paperA.date < paperB.date ? 1 : -1;
      }
      if (sortState === "citation") {
        return paperA.citation < paperB.citation ? 1 : -1;
      }
      if (sortState === "database") {
        return paperA.source.toLowerCase() > paperB.source.toLowerCase() ? 1 : -1;
      }
    });
  };
  const sortedPapers = sortPapers(papers, sortState);

  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = papers.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(papers.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  let content = "";

  if (papers.length > 0) {
    content = <SearchPaperList papers={currentPosts} />;
  }

  if (error) {
    content = <p className="centered">{error}</p>;
  }

  if (isLoading) {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div>
      <div className="search">
        <h1 className="text-center pt-5 text-white">What is Search Paper?</h1>
        <p className="text-center text-white mb-5">A search function that queries papers from various academic databases to find what's needed for your research</p>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="searchForm text-center">
              <input type="text" placeholder="Search" ref={inputRef}></input>
              <button onClick={submitHandler}>
                <AiOutlineSearch size={27}/>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center my-4 container">
        <div className="results"></div>
        <div className="sort">
          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => setSortState(e.target.value)}
          >
            <option value="DEFAULT">Sort By (Default)</option>
            <option value="date">Sort By (Date)</option>
            <option value="citation">Sort By (Citation)</option>
            <option value="database">Sort By (Database)</option>
            <BiSortAlt2 />
          </select>
        </div>
      </div>
      
      <div>
        {content}
      </div>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={papers.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default SearchPaper;
