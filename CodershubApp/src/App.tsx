import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import { AuthContextProvider } from "./components/Auth";
import Payment from "./components/Payment";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <br />
          <br />
          <br />
          <Link to="/">
            <img src="/Logo.png" className="Logo" alt="Codershub" />
          </Link>
          <Routes>
            <Route path="/auth" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/pricing" element={<Pricing />} />

            <Route path="/payment" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Hero />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}
export default App;
