import Card from "./Card";
import { pokemons } from "./Data";

export default function CardGrid({ currentType }) {
  console.log("currentType:", currentType);
  const filteredPokemons =
    currentType === "all"
      ? pokemons
      : pokemons.filter((p) => p.type === currentType);

  return (
    <div className="card-grid">
      {filteredPokemons.map((pokemon) => (
        <Card key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}
