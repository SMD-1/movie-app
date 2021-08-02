import { useState, useEffect } from "react";
import Movie from "./Component/Movie";
import "./App.css";
import Navbar from "./Component/Navbar";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2d248459fa33105bff866bf17b092b83&page=1";

// const SEARCH_API =
//   "https://api.themoviedb.org/3/search/movie?&api_key=2d248459fa33105bff866bf17b092b83&query=";

function App() {
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
  useEffect(async () => {
    await fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  return (
    <div className="container">
      <div className="headerContainer">
        <Navbar />
      </div>
      <div id="movies">
        {movies.length > 0 &&
          movies.map((movie) => {
            return <Movie {...movie} key={movie.id} />;
          })}
      </div>
    </div>
  );
}

export default App;
