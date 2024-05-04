import { Link } from "react-router-dom";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="NavButton">
            <Link to="/Courses">Get Started</Link>
          </li>
          <li className="NavButton">
            <Link to="/Contact">Pricing</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
