import "./App.css";
import CardGrid from "./CardGrid";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import logo from "./assets/pokemon-logo.png";

function App() {
  const [currentType, setCurrentType] = useState("all");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (currentType === "favorites" && favorites.length === 0) {
      setCurrentType("all");
    }
  }, [favorites, currentType]);

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
      {favorites.length > 0 && (
  <button
    className={`favorites-bookmark ${currentType === "favorites" ? "active" : ""}`}
    onClick={() => setCurrentType(currentType === "favorites" ? "all" : "favorites")}
  >
    <span>♥ {favorites.length}</span>
  </button>
)}
      <CardGrid
        currentType={currentType}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}

export default App;
