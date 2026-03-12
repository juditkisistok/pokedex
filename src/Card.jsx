export default function Card({id, name, type, hp, attack}) {
    return (
      <div className="card">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <h1>{name}</h1>
        <p>{type}</p>
        <p>{hp}</p>
        <p>{attack}</p>
      </div>
    )
  }