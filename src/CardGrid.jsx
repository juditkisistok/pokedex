import PokemonCard from "./Card";
import { pokemons } from "./Data";

export default function CardGrid({ currentType, favorites, setFavorites }) {
  let filteredPokemons =
    currentType === "all"
      ? pokemons
      : pokemons.filter((p) => p.type === currentType);

  if (currentType === "favorites") {
    filteredPokemons = pokemons.filter((p) => favorites.includes(p.id));
  }

  return (
    <div className="card-grid">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          {...pokemon}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
}
