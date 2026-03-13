import "./App.css";
import CardGrid from "./CardGrid";
import Filter from "./Filter";
import { useState } from "react";

function App() {
  const [currentType, setCurrentType] = useState("all");
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <Filter setCurrentType={setCurrentType} />
      <CardGrid
        currentType={currentType}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}

export default App;
