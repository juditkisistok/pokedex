import "./App.css";
import CardGrid from "./CardGrid";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import logo from "./assets/pokemon-logo.png";

function App() {
  const [currentType, setCurrentType] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [showBookmark, setShowBookmark] = useState(false);
  const [bookmarkLeaving, setBookmarkLeaving] = useState(false);

  useEffect(() => {
    if (currentType === "favorites" && favorites.length === 0) {
      setCurrentType("all");
    }
  }, [favorites, currentType]);

  useEffect(() => {
    if (favorites.length > 0) {
      setShowBookmark(true);
      setBookmarkLeaving(false);

    } else if (showBookmark) {
      setBookmarkLeaving(true);
    }
  }, [favorites.length]);

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
      {showBookmark && (
  <button
    className={`favorites-bookmark ${currentType === "favorites" ? "active" : ""} ${bookmarkLeaving ? "leaving" : ""}`}
    onAnimationEnd={() => { if (bookmarkLeaving) setShowBookmark(false); }}
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
