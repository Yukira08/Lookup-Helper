import React, {useEffect} from "react";
import ReactHtmlParser from "react-html-parser";

import Test from "../components/Test";
import { fetchTutorials } from "../lib/api";
import useHttp from "../hooks/use-http";

const Tutorials = () => {

  const {
    sendRequest,
    status,
    data: loadedTutorials,
    error,
  } = useHttp(fetchTutorials, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return <div className="centered">Loading</div>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedTutorials || loadedTutorials.length === 0)) {
    return <h1>No Tutotrials found</h1>;
  }
  console.log(loadedTutorials);
  return (
    <div className="container mt-5">
      {loadedTutorials.map((tutorial) => (
        <div>{ ReactHtmlParser(tutorial.text)}</div>
      ))}
    </div>
  );
};

export default Tutorials;
