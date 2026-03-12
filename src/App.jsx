import "./App.css";
import CardGrid from "./CardGrid";
import Filter from "./Filter";
import { useState } from "react";

function App() {
  const [currentType, setCurrentType] = useState("all");
  return (
    <>
      <Filter currentType={currentType} setCurrentType={setCurrentType} />
      <CardGrid currentType={currentType} />
    </>
  );
}

export default App;
