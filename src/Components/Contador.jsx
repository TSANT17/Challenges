import React, { useState } from "react";

export const Contador = () => {
  const [substract, setSubstract] = useState(30);
  const handleSubstract = () => {
    return setSubstract(substract - 1);
  };
  const handleReset = () => {
    return setSubstract(30);
  };
  return (
    <>
      <h1>Contador</h1>
      <div>{substract}</div>
      <button onClick={() => handleSubstract()}>Substract</button>
      <button onClick={() => handleReset()}>Reset</button>
    </>
  );
};
