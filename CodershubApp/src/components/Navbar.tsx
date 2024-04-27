import { Link } from "react-router-dom";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="NavButton">
            <Link to="/Home">Home</Link>
          </li>
          <li className="NavButton">
            <Link to="/About">About</Link>
          </li>
          <li className="NavButton">
            <Link to="/Courses">Courses</Link>
          </li>
          <li className="NavButton">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
