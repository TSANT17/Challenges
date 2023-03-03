import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FirstApp } from "./Components/FirstApp";
import { Contador } from "./Components/Contador";
import { Categorias } from "./Components/Categorias";
import { GifGrid } from "./Components/GifGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hola</h1>
      <FirstApp title={"NADA Y TU"} numero={10} />
      <Contador />
      <Categorias />
      <GifGrid/>
    </div>
  );
}

export default App;
