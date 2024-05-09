import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import NotFound from "./components/NotFound"
import Login from "./components/Login"

function App() {
  return (
    <>
      <Router>
        <br /><br /><br />
        <Link to="/">
          <img src="/Logo.png" className="Logo" alt="Codershub" />
        </Link>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Hero />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer className="footer">
          <p>© 2024 CodershubUK</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <Link to="https://www.instagram.com/codershubuk/">
            <img src="/Instagram.png" className="footer-logo" alt="CodershubUk-instagram" />
          </Link>
          <Link to="https://www.tiktok.com/@pythonwithsean">
            <img src="/Tiktok.png" className="footer-logo" alt="CodershubUk-Tiktok" />
          </Link>
          <Link to="https://www.youtube.com/channel/UCh5L0QwH27DuIfV73l4zEjA">
            <img src="/Youtube.png" className="footer-logo" alt="CodershubUk-Tiktok" />
          </Link>
        </footer>
      </Router>
    </>
  );
}
export default App;

