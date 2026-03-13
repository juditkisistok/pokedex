import "./App.css";
import CardGrid from "./CardGrid";
import Filter from "./Filter";
import { useState } from "react";
import logo from "./assets/pokemon-logo.png";

function App() {
  const [currentType, setCurrentType] = useState("all");
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <div className="topbar">
        <header>
          <img src={logo} alt="Pokedex" />
        </header>
        <Filter
          currentType={currentType}
          setCurrentType={setCurrentType}
          favorites={favorites}
        />
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
