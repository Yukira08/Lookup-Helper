import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { getSingleTutorial } from "../lib/api";
import useHttp from "../hooks/use-http";
import ReactHtmlParser from "react-html-parser";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const TutorialDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { tutorialId } = params;
  const words = parseInt(tutorialId[1]) + 1;
  const next = "t" + words;
  const {
    sendRequest,
    status,
    data: loadedTutorial,
    error,
  } = useHttp(getSingleTutorial, true);

  useEffect(() => {
    sendRequest(tutorialId);
  }, [sendRequest, tutorialId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedTutorial.text) {
    return <p>No tutorial found!</p>;
  }
  return (
    <div className="container my-5">
      <div className="d-inline">{ReactHtmlParser(loadedTutorial.text)}</div>
      {words <= 4 && <Link to={`/tutorials/${next}/`} className="mb-5">{loadedTutorial.nextTitle}</Link>}
    </div>
  );
};

export default TutorialDetail;
