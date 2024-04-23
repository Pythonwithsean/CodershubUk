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
    </>
  );
}

export default App;
