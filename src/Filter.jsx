import { pokemons } from "./Data";

export default function Filter({ currentType, setCurrentType }) {
  return (
    <div className="filter">
      {pokemons.map((pokemon) => (
        <button key={pokemon.id} onClick={() => setCurrentType(pokemon.type)}>
          {pokemon.type}
        </button>
      ))}
    </div>
  );
}
