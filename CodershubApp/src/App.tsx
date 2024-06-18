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
import Courses from "./components/Courses";
import Settings from "./components/Settings";
import Bookings from "./components/Bookings";

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
            <Route path="/dashboard/payments" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard children={<></>} />} />
            <Route
              path="/dashboard/courses"
              element={<Dashboard children={<Courses />} />}
            />
            <Route
              path="/dashboard/settings"
              element={<Dashboard children={<Settings />} />}
            />
            <Route
              path="/dashboard/bookings"
              element={<Dashboard children={<Bookings />} />}
            />
            <Route path="/" element={<Hero />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}
export default App;
