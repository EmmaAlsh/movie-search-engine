import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{ title: "Titanic", release_date: "1997" }}></MovieCard>
      <MovieCard
        movie={{ title: "Jurassic Park", release_date: "1993" }}
      ></MovieCard>
    </>
  );
}

//image,
//name of the movie
//release date
//favorite

export default App;
