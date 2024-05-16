//@ts-ignore
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <Link className="NavButton" to="/login">
            Get Started
          </Link>
          <Link className="NavButton" to="/pricing">
            Pricing
          </Link>
          <HamburgerMenu />
        </ul>
      </nav>
    </>
  );
}
