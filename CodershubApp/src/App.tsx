import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <> 
      <img src="../public/Logo.png" className="Logo" alt="Codershub" />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Router>
      {/* Footer For all Pages */}
      <footer className="footer">
        <p>© 2021 CodershubUK</p>

        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </footer>
    </>
  );
}

export default App;
