import "./App.css";
import CardGrid from "./CardGrid";
import Filter from "./Filter";
import { useState } from "react";

function App() {
  const [currentType, setCurrentType] = useState("all");
  const [favorites, setFavorites] = useState([]);
  return (
    <>
    <div className="topbar">
      <header>
        <img src="/pokemon-logo.png" alt="Pokedex" />
      </header>
      <Filter currentType={currentType} setCurrentType={setCurrentType} favorites={favorites} />
      </div>
      <CardGrid
        currentType={currentType}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}

export default App;
