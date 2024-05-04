import { Link } from "react-router-dom";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="NavButton">
            <Link to="/Login">Get Started</Link>
          </li>
          <li className="NavButton">
            <Link to="/Pricing">Pricing</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
