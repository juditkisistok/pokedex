import { pokemons } from "./Data";
import { pokemonTypes } from "./Data";

export default function Filter({ currentType, setCurrentType, favorites }) {
  const uniquePokemonTypes = [...new Set(pokemons.map((p) => p.type))];
  const numberOfFavorites = favorites.length;
  return (
    <div className="filter">
      <button className={currentType === "all" ? "active" : ""} onClick={() => setCurrentType("all")}>All</button>
      {uniquePokemonTypes.map((type) => {
        const color = pokemonTypes.find((t) => t.name === type)?.color;
        return (
          <button 
            key={type} 
            className={currentType === type ? "active" : ""} 
            onClick={() => setCurrentType(type)}
            style={{ '--type-color': color }}
          >
            {type}
          </button>
        );
      })}
      {numberOfFavorites > 0 && <button
      className={`favorites-btn ${currentType === "favorites" ? "active" : ""}`}
       onClick={() => setCurrentType("favorites")}>
        Show favorites ({numberOfFavorites})
      </button>}
    </div>
  );
}
