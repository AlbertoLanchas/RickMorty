import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container">
        <Link to={`/`} key={"home"}>
          <h2 style={{ textDecoration: "none" }} className="fs-3 text-dark">
            Rick & Morty <span class="wiki-color">WIKI</span>
          </h2>
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars open text-dark"></i>
          <i className="fas fa-times close text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav fs-5">
            <li className="nav-item">
              <NavLink
                // activeClassName="active"
                className="nav-link"
                aria-current="page"
                to={`/characters`}
                key={"characters"}
              >
                CHARACTERS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // activeClassName="active"
                className="nav-link"
                aria-current="page"
                to={`/episodes`}
                key={"characters"}
              >
                EPISODES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // activeClassName="active"
                className="nav-link"
                aria-current="page"
                to={`/locations`}
                key={"characters"}
              >
                LOCATION
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Language
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dark mode
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
