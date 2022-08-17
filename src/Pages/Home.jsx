import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-screen">
      <nav className="home-links">
        <Link to={`/characters`} key={"characters"} className="home-link">
          <span> CHARACTERS</span>
          <i></i>
        </Link>
        <Link to={`/episodes`} key={"episodes"} className="home-link">
          <span>EPISODES</span>
          <i></i>
        </Link>
        <Link to={`/locations`} key={"locations"} className="home-link">
          <span>LOCATIONS</span>
          <i></i>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
