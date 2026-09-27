import { useState, Fragment } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import characters from "./data/characters";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const filteredCharacters = characters.filter((character) => {
    const matchesSearch = character.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || character.team === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <Fragment>
      <Header
        search={search}
        setSearch={setSearch}
      />

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-small">
              WELCOME TO THE
            </p>

            <h1>
              MARVEL
              <br />
              <span>LEGENDS</span>
            </h1>

            <p className="hero-text">
              Discover the heroes, villains and
              legendary characters that shaped
              the Marvel universe.
            </p>

            <a href="#gallery" className="hero-button">
              Explore Gallery
            </a>
          </div>

          <div className="hero-symbol">
            <div>MARVEL</div>
          </div>
        </section>

        <section className="filters">
          <button
            className={category === "All" ? "active" : ""}
            onClick={() => setCategory("All")}
          >
            All
          </button>

          <button
            className={category === "Avengers" ? "active" : ""}
            onClick={() => setCategory("Avengers")}
          >
            Avengers
          </button>

          <button
            className={category === "Guardians" ? "active" : ""}
            onClick={() => setCategory("Guardians")}
          >
            Guardians
          </button>

          <button
            className={category === "X-Men" ? "active" : ""}
            onClick={() => setCategory("X-Men")}
          >
            X-Men
          </button>

          <button
            className={category === "Fantastic Four" ? "active" : ""}
            onClick={() => setCategory("Fantastic Four")}
          >
            Fantastic Four
          </button>


          <button
            className={category === "Marvel" ? "active" : ""}
            onClick={() => setCategory("Marvel")}
          >
            Marvel
          </button>
        </section>

        <div className="gallery-info">
          <p>
            Showing <strong>{filteredCharacters.length}</strong> characters
          </p>
        </div>

        {filteredCharacters.length > 0 ? (
          <Gallery
            characters={filteredCharacters}
            onExplore={setSelectedCharacter}
          />
        ) : (
          <div className="no-results">
            <h2>No Characters Found</h2>
            <p>Try searching for another Marvel character.</p>
          </div>
        )}

        <section className="about" id="about">
          <div>
            <span>THE UNIVERSE</span>

            <h2>
              One Gallery.
              <br />
              Countless Legends.
            </h2>
          </div>

          <p>This isn't just a gallery,it's a tribute to the kid in all of us who belived a spider bite or a suit of ammor could change everything from a kid from Queens to a God from Asgard,every legend that made us dream is assembled here.
 
          </p>
        </section>

        <a href="#home" className="top-button">
          ↑
        </a>

        {selectedCharacter && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedCharacter(null)}
          >
            <div
              className="character-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setSelectedCharacter(null)}
              >
                ×
              </button>

              <img
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
              />

              <div className="modal-content">
                <span>{selectedCharacter.team}</span>

                <h2>{selectedCharacter.name}</h2>

                <p>{selectedCharacter.description}</p>

                <button
                  onClick={() => setSelectedCharacter(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer>
        <p>© 2026 Marvel Legends Gallery</p>
        <p>Inspired by Comics</p>
      </footer>
    </Fragment>
  );
}

export default App;