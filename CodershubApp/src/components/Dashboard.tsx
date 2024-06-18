import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "./Auth";
import { getUserNameFromEmail } from "../utils/functions";
import { useEffect } from "react";
import "../styles/dashboard.css"; // Import custom styles
import { Container, Box } from "@mui/material";
export default function Dashboard() {
  const navigate = useNavigate();
  const { session } = useAuthContext();

  useEffect(() => {
    if (session === null) {
      navigate("/auth");
    }
  }, [session, navigate]);
  return (
    <>
      <Container className="dashboard-container">
        <Box>
          <div className="content">
            <h2>Hello {getUserNameFromEmail(session?.user.email)}</h2>
          </div>
          {/* Side Bar for Dashboard */}
          <div className="sidebar">
            <h3>Dashboard</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Courses</Link>
              </li>
              <li>
                <Link to="/">Settings</Link>
              </li>
            </ul>
          </div>
        </Box>
      </Container>
    </>
  );
}
