import React from "react";
import { useState } from "react";

export const Categorias = () => {
  const [categories, setCategories] = useState(["First category"]);
  const [category, setCategory] = useState("");

  const addCategory = () => {
    setCategories((list) => [...list, category]);
    setCategory("");
  };
  const onSetCategory = (evt) => {
    setCategory(evt.target.value);
  };
  return (
    <>
      <h1>Cualquier maricada</h1>
      <input
        type="text"
        value={category}
        onChange={(event) => onSetCategory(event)}
      />
      <button onClick={() => addCategory()}>Añadir categoria</button>
      <ol>
        {categories.map((category, key) => {
          return <li key={key}>{category}</li>;
        })}
      </ol>
    </>
  );
};
