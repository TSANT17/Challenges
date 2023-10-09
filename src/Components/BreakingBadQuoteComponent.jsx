import React from "react";
import useFetch from "../hooks/useFetch";

const BreakingBadQuoteComponent = ({ counter }) => {
  const url = `https://breakingbadapi.com/api/quotes/${counter}`;

  const { data, isLoading, hasError } = useFetch(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError.message}</div>;
  }

  return (
    <div>
      <blockquote>{data[0].quote}</blockquote>
      <p>- {data[0].author}</p>
    </div>
  );
};

export default BreakingBadQuoteComponent;
