import { pokemons } from "./Data";

export default function Filter({ currentType, setCurrentType }) {
  const uniquePokemonTypes = [...new Set(pokemons.map((p) => p.type))];
  return (
    <div className="filter">
      <button className={currentType === "all" ? "active" : ""} onClick={() => setCurrentType("all")}>All</button>
      {uniquePokemonTypes.map((type) => (
        <button key={type} className={currentType === type ? "active" : ""} onClick={() => setCurrentType(type)}>
          {type}
        </button>
      ))}
      <button
      className={currentType === "favorites" ? "active" : ""}
       onClick={() => setCurrentType("favorites")}>
        Show favorites
      </button>
    </div>
  );
}
