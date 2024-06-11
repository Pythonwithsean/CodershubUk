import { Container, Box } from "@mui/material";
import "../App.css";
import "../styles/pricingpage.css"
import Navbar from "./Navbar";

export default function Pricing() { 
    return (
        <Container className="container"> 
            <Navbar/>
            <br />
            <Box component="section" sx={{ p: 2 }}>
                <h1>Get Ahead of Others Today!</h1>
                <h3>Choose the best plan for your needs</h3>
                <div className="pricing-page">
                    <div className="pricing-option" id="option2">
                        <h2>Free Taster Plan - £0</h2>
                        <p>Perfect for new Unexperienced Developers who want to get a Taster</p>
                        <ul>
                            <li>Free Lesson on Python</li>
                            <li>Build a CLI Calulator App</li>
                        </ul>
                        <button>Sign Up</button>
                    </div>
                    <div className="pricing-option" id="option1">
                        <h2>Monthly Lessons - $120/month</h2>
                        <p>Great for individuals or small teams just starting out.</p>
                        <ul>
                            <li>Learn HTML,CSS,Javascript, Build Games, Solve LeetCode and Improve Problem Solving Skills</li>
                            <li>Coding Challenges with other Students</li>
                            <li>Feature 3</li>
                        </ul>
                        <button>Sign Up</button>
                    </div>
                    <div className="pricing-option" id="option3">
                        <h2>Annual Lessons - £1440</h2>
                        <p>Great Students who want to build Applications, Solve Problems and Become better Engineers</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                            <li>Feature 5</li>
                            <li>Feature 6</li>
                        </ul>
                        <button>Contact Us</button>
                    </div>
                </div>
            </Box>    
        </Container>
    );
}
