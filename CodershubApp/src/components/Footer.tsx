import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 CodershubUK</p>
      <p>Terms of Service</p>
      <p>Privacy Policy</p>
      <p>Cookie Policy</p>
      <Link to="https://www.instagram.com/codershubuk/">
        <img
          src="/Instagram.png"
          className="footer-logo"
          alt="CodershubUk-instagram"
        />
      </Link>
      <Link to="https://www.tiktok.com/@codershubuk">
        <img
          src="/Tiktok.png"
          className="footer-logo"
          alt="CodershubUk-Tiktok"
        />
      </Link>
      <Link to="https://www.youtube.com/channel/UCh5L0QwH27DuIfV73l4zEjA">
        <img
          src="/Youtube.png"
          className="footer-logo"
          alt="CodershubUk-Tiktok"
        />
      </Link>
    </footer>
  );
}
