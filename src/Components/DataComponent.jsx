import React from "react";
import useFetch from "../hooks/useFetch";

const DataComponent = () => {
  const url = "https://jsonplaceholder.typicode.com/posts"; // Example URL
  const { data, isLoading, hasError } = useFetch(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError.message}</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>true</pre>
    </div>
  );
};

export default DataComponent;
