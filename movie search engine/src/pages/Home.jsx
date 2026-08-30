//user interface for the home page
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState(""); //esto es para que se pueda renderizar bien cada vez que camnbiamos algo

  const movies = [
    { id: 1, title: "Titanic", release_date: "1997" },
    { id: 2, title: "Titanic", release_date: "1997" },
    { id: 3, title: "Titanic", release_date: "1997" },
  ];
  const handleSearch = (e) => {
    e.preventDefault(); //para que no borre el texto cuando tocamos submit
    alert(searchQuery);
    //setSearchQuery("---"); //pone --- despues de tocar search
    setSearchQuery("");
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            //se renderiza si el titulo empieza con searchQuery.
            // si no hay texto el display es todas las pelis
            //cada vez que se tipea algo se renderiza y se rerun todo lo que esta en home
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id}></MovieCard>
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
