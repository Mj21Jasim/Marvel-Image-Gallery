function ImageCard({ character, onExplore }) {
  return (
    <article className="character-card">
      <div className="image-container">
        <img
          src={character.image}
          alt={character.name}
        />

        <span className="team-badge">
          {character.team}
        </span>
      </div>

      <div className="card-content">
        <h2>{character.name}</h2>

        <p>{character.description}</p>

        <button onClick={() => onExplore(character)}>
          Explore Character
        </button>
      </div>
    </article>
  );
}

export default ImageCard;