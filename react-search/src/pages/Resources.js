import React, { useState, useEffect } from "react";

import ResourcesList from "../components/resources/ResourcesList";
import useHttp from "../hooks/use-http";
import { fetchResources } from "../lib/api";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Resources = () => {
  const {
    sendRequest,
    status,
    data: loadedResources,
    error,
  } = useHttp(fetchResources, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner/>
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  };

  if( status === 'completed' && (!loadedResources || loadedResources.length === 0)){
    return (
      <h1>No Resources found</h1>
    )
  };
  return (
    <div class="resources">
      <div class="heading">Databases</div>
      <ResourcesList resources={loadedResources} />
    </div>
  );
};

export default Resources;
