import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/images/logo1.png";
import text from "../../assets/images/CodeArena.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <img src={logo} alt="Logo" />
          <img src={text} alt="text" />
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link to="/coding">Coding</Link>
          </li>
          <li>
            <Link to="/mcqs">MCQ</Link>
          </li>
        </ul>
        <div className="nav-items">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
