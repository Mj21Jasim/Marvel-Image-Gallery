function Header({ search, setSearch }) {
  return (
    <header className="header">
      <div className="logo">
        MARVEL<span>LEGENDS</span>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#gallery">Characters</a>
        <a href="#about">About</a>
      </nav>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search characters..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;