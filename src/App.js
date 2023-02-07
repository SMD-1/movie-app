import { useState, useEffect } from "react";
import Movie from "./Component/Movie";
import "./App.css";
import { FaGithub } from "react-icons/fa";

const FEATURED_API =
  "https://api.themoviedb.org/3/trending/all/week?api_key=2d248459fa33105bff866bf17b092b83";

const App = () => {
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

  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=2d248459fa33105bff866bf17b092b83&query=";

  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
      });
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <div className="navbar">
        <form onSubmit={handleOnSubmit}>
          <div className="search">
            <input
              type="search"
              placeholder="search"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </div>
        </form>
        <div className="github">
          <a href="https://github.com/SMD-1/movie-app">
            <FaGithub color="white" size="2.5rem" />
          </a>
        </div>
      </div>
      <div id="movies">
        {movies.length > 0 &&
          movies.map((movie) => {
            return <Movie {...movie} key={movie.id} />;
          })}
      </div>
    </div>
  );
};

export default App;
