import { pokemonTypes } from "./Data";

export default function PokemonCard({
  id,
  name,
  type,
  hp,
  attack,
  favorites,
  setFavorites,
}) {
  const typeColor = pokemonTypes.find((t) => t.name === type)?.color || "#000";
  return (
    <div className="card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <h1>{name}</h1>
      <p
        className="type-badge"
        style={{ border: `1px solid ${typeColor}`, color: typeColor }}
      >
        {type}
      </p>
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
        {favorites.includes(id) ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#ff4757"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
  4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 
  21.35z"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff4757"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
  4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 
  21.35z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
