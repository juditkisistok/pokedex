import { pokemons } from "./Data";
import { pokemonTypes } from "./Data";

export default function Filter({ currentType, setCurrentType }) {
  const uniquePokemonTypes = [...new Set(pokemons.map((p) => p.type))];
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
      <button
      className={currentType === "favorites" ? "active" : ""}
       onClick={() => setCurrentType("favorites")}>
        Show favorites
      </button>
    </div>
  );
}
