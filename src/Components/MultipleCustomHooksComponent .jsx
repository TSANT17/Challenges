import React from "react";
import useCounter from "../hooks/useCounter";

import BreakingBadQuoteComponent from "../Components/BreakingBadQuoteComponent";

const MultipleCustomHooksComponent = () => {
  const { count, increment } = useCounter(1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment Counter</button>
      <BreakingBadQuoteComponent counter={count} />
    </div>
  );
};

export default MultipleCustomHooksComponent;
