import { Link } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import text from "../../assets/images/CodeArena.png";
import { Button } from "@mui/material";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-left">
        <img src={logo} alt="Logo" />
        <img src={text} alt="CodeArena" />
      </div>

      {/* Nav Links */}
      <ul className="nav-items">
        <li className="nav-items-list">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-items-list">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-items-list">
          <Link to="/coding" className="nav-link">
            Coding
          </Link>
        </li>
        <li className="nav-items-list">
          <Link to="/mcqs" className="nav-link">
            MCQ
          </Link>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="nav-items">
        <Link to="/register" className="nav-link">
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              "&:hover": {
                bgcolor: "primary.main",
                border: "none",
                color: "white",
              },
            }}
          >
            Signup
          </Button>
        </Link>

        <Link to="/login" className="nav-link">
          <Button
            variant="contained"
            color="secondary"
            sx={{
              "&:hover": {
                bgcolor: "primary.main",
              },
            }}
          >
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
