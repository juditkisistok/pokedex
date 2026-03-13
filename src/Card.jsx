export default function PokemonCard({
  id,
  name,
  type,
  hp,
  attack,
  favorites,
  setFavorites,
}) {
  return (
    <div className="card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <h1>{name}</h1>
      <p>{favorites.includes(id) ? "Favorite" : ""}</p>
      <p>{type}</p>
      <p>{hp}</p>
      <p>{attack}</p>
      <button
        onClick={() =>
          setFavorites((prevFavorites) =>
            prevFavorites.includes(id)
              ? prevFavorites.filter((favId) => favId !== id)
              : [...prevFavorites, id],
          )
        }
      >
        {favorites.includes(id) ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
}
