import { Link } from "react-router-dom";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <Link className="NavButton" to="/auth">
            Get Started
          </Link>
          <Link className="NavButton" to="/pricing">
            Pricing
          </Link>
        </ul>
      </nav>
    </>
  );
}
