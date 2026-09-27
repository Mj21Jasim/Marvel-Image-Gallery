import ImageCard from "./ImageCard";

function Gallery({ characters, onExplore }) {
  return (
    <section className="gallery-section" id="gallery">

      <div className="section-heading">
        <span>MARVEL UNIVERSE</span>

        <h2>Iconic Characters</h2>

        <p>
          Explore legendary heroes, villains and
          cosmic characters from the Marvel universe.
        </p>
      </div>

      <div className="gallery">
        {characters.map((character) => (
          <ImageCard
            key={character.id}
            character={character}
            onExplore={onExplore}
          />
        ))}
      </div>

    </section>
  );
}

export default Gallery;