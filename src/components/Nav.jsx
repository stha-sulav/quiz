import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <h1 className="logo">Quizzies</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/score"}>Scores</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
