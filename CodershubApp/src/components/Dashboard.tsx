import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "./Auth";
import { getUserNameFromEmail } from "../utils/functions";
import { useEffect } from "react";
import { supabase } from "./SupabaseClient";
import "../styles/dashboard.css"; // Import custom styles
import { Container, Box } from "@mui/material";

type DashboardProps = {
  children?: JSX.Element;
};

export default function Dashboard({ children }: DashboardProps) {
  const navigate = useNavigate();
  const { session } = useAuthContext();

  async function logout(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error != null) {
      console.error(error);
      return;
    }
    navigate("/");
  }

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
                <Link to="/">Go Home</Link>
              </li>
              <li>
                <Link to="/dashboard/courses">Courses</Link>
              </li>
              <li>
                <Link to="/dashboard/bookings">Bookings</Link>
              </li>
              <li>
                <Link to="/dashboard/settings">Settings</Link>
              </li>
              <li>
                <Link to="/dashboard/settings">Notifications</Link>
              </li>
              <li>
                <Link to="https://g.page/r/CX2u9LwjOawkEB0/review">
                  Rate Us
                </Link>
              </li>
              <li>
                <Link to="/dashboard/payments">Time Table</Link>
              </li>
              <li>
                <Link to="/dashboard/payments">Pay Now</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
          <div className="main-content">{children}</div>
        </Box>
      </Container>
    </>
  );
}
