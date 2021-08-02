import React from "react";
import { FaGithub } from "react-icons/fa";

const Search = () => {
  return (
    <div className="navbar">
      <div className="search">
        <input type="text" className="search" placeholder="search" />
      </div>
      <div className="github">
        <FaGithub color="white" />
      </div>
    </div>
  );
};

export default Search;
