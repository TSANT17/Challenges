import React from "react";
import "./FirtsApp.css";

export const FirstApp = (props) => {
  return (
    <>
      <div className="separacion">Que haces</div>
      <h1>{props.title}</h1>
      <span className="separacion">10</span>
      <span className="separacion">{props.numero}</span>
    </>
  );
};
