import { pokemons } from "./Data";

export default function Filter({ setCurrentType }) {
  const uniquePokemonTypes = [...new Set(pokemons.map((p) => p.type))];
  return (
    <div className="filter">
      <button onClick={() => setCurrentType("all")}>All</button>
      {uniquePokemonTypes.map((type) => (
        <button key={type} onClick={() => setCurrentType(type)}>
          {type}
        </button>
      ))}
      <button onClick={() => setCurrentType("favorites")}>
        Show favorites
      </button>
    </div>
  );
}
