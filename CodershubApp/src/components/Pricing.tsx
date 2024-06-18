import { Container, Box } from "@mui/material";
import "../App.css";
import "../styles/pricingpage.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Pricing() {
  return (
    <Container className="container pricing-container">
      <Navbar />
      <br />
      <Box component="section" sx={{ p: 2 }}>
        <h1>Get Ahead of Others Today!</h1>
        <h3>Choose the best plan for your needs</h3>
        <div className="pricing-page">
          <div className="pricing-option" id="option2">
            <h2>Free Taster Plan - £0</h2>
            <p>
              Perfect for new Unexperienced Developers who want to get a Taster
            </p>
            <ul>
              <li>Free Lesson on Python</li>
              <li>Build a Cli Calulator App</li>
              <li>Get a taster of our discord oriented lessons</li>
              <li>Learn Programming Using Python</li>
              <li>Decide if you want to enroll Monthly Membership</li>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </ul>
            <Link to="/bookings">
              <button>Demo Now</button>
            </Link>
          </div>
          <div className="pricing-option" id="option1">
            <h2>Monthly Lesson Plan - £120/month</h2>
            <p>
              Learn everything you need to know to become a Software Engineer
            </p>
            <ul>
              <li>
                {" "}
                Learn HTML,CSS,Javascript, React, SQL, Build Games, Solve
                LeetCode and Improve Problem Solving Skills, Docker, Git
              </li>
              <li>
                Collaborative Learning: Coding challenges with other students.
              </li>
              <li>Get Daily Coding Challenges and Problems to keep you busy</li>
              <li>
                24/7 Support: Get help anytime from our community and
                instructors
              </li>
              <br />
            </ul>
            <Link to="/auth">
              <button>Apply</button>
            </Link>
          </div>
          <div className="pricing-option" id="option3">
            <h2>Annual Lesson Plan - £1440</h2>
            <p>
              Great Students who want to build Applications, Solve Problems and
              Become better Engineers
            </p>
            <ul>
              <li>Full Access to Codershub Uk for a Year</li>
              <li>Advanced Projects: Build real-world applications.</li>
              <li>
                Exclusive Webinars and Workshops: Learn from industry experts.
              </li>
              <li>
                Mentorship Program: Personalized guidance and career advice.
              </li>
              <li>
                Networking Opportunities: Connect with other aspiring engineers.
              </li>
              <li>Certification: Earn a certificate upon course completion.</li>
            </ul>
            <Link to="/auth">
              <button>Apply</button>
            </Link>
          </div>
        </div>
      </Box>
      <Footer />
    </Container>
  );
}
