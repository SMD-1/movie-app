import React from "react";
import { FaStar } from "react-icons/fa";
import Overview from "./Overview";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, name, overview, vote_average }) => {
  return (
    <div className="movie">
      <div className="movie-image">
        <img src={IMG_API + poster_path} alt={title} />
      </div>
      <div className="movie-info">
        <div className="name">
          <h3>{title || name}</h3>
        </div>
        <div className="rating">
          <h3>{vote_average}</h3>
          <FaStar color="#FFB31C" className="star" />
        </div>
      </div>

      <Overview overview={overview} />
    </div>
  );
};

export default Movie;
