import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FirstApp } from "./Components/FirstApp";
import { Contador } from "./Components/Contador";
import { Categorias } from "./Components/Categorias";
import { GifGrid } from "./Components/GifGrid";
import { Counter2 } from "./Components/Counter2";
import DataComponent from "./Components/DataComponent";
import MultipleCustomHooksComponent from "./Components/MultipleCustomHooksComponent ";
import TodoApp from "./Components/TodoApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hola</h1>
      <hr />
      <FirstApp title={"NADA Y TU"} numero={10} />
      <hr />
      <Contador />
      <hr />
      <Categorias />
      <hr />
      <GifGrid /> <hr />
      <Counter2 /> <hr />
      <DataComponent /> <hr />
      <MultipleCustomHooksComponent /> <hr />
      <TodoApp />
    </div>
  );
}

export default App;
