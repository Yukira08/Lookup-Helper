import React, { useEffect } from "react";
import { fetchTools } from "../lib/api";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ToolsList from "../components/Tools/ToolsList";

const Tools = () => {
  const {
    sendRequest,
    status,
    data: loadedTools,
    error,
  } = useHttp(fetchTools, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedTools || loadedTools.length === 0)
  ) {
    return <h1>No Tools found</h1>;
  }
  return (
    <div>
      <div class="heading">Tools</div>
      <ToolsList tools={loadedTools}/>
    </div>
  )
};

export default Tools;
