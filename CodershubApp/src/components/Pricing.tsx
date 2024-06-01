import { Container, Box } from "@mui/material";
import "../App.css";
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
                    <div className="pricing-option" id="option1">
                        <h2>Basic Plan - $10/month</h2>
                        <p>Great for individuals or small teams just starting out.</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                        <button>Sign Up</button>
                    </div>
                    <div className="pricing-option" id="option2">
                        <h2>Pro Plan - $25/month</h2>
                        <p>Perfect for growing teams that need advanced features.</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                            <li>Feature 5</li>
                        </ul>
                        <button>Sign Up</button>
                    </div>
                    <div className="pricing-option" id="option3">
                        <h2>Enterprise Plan - Custom Pricing</h2>
                        <p>Ideal for large organizations with custom needs.</p>
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
