import { Typing } from "./Typing";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Container , Box } from "@mui/material";
const Hero = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const triggerPosition = 600; // Adjust this value to set the scroll trigger point

      if (scrollPosition > triggerPosition) {
        setShowAnimation(true);
      } else {
        setShowAnimation(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return ( 
    <>
      <Navbar />
    <Container className="container">
      <div className="Hero-Container">
        <section className="section1">
          <Typing />
          <button className="apply-button">Apply Now</button>
        </section>
      </div>
      <section className="section2">
        <h1>
          About <span className="red-word">CodersHub</span> UK
        </h1>
            <Box component="section" sx={{ p: 2 }}>

            <p className="paragraph">
              We are a <strong>coding</strong> Tutoring Company that offers a
              range of courses to help you <strong>learn to code.</strong>
            </p>
            </Box>
            <Box className="Box" component="section" sx={{ p: 2}}>
              <p className="paragraph">
              We offer <strong>1 to 1 Classes</strong> Python Data science,
              React and Next for Fullstack Development, Golang for Backend
              Development </p> </Box> </section> <br /> </Container> <br /><br /><br /><br />
     {/* ------------------------------------------------------------------------------------------ */}
     

    <Container className={`container Semi-container ${showAnimation? "slide-in-left" : ""}`} style={
      {
        display: "flex",
      }
    }>

    <img className="Hero-Img" src="../../public/SummerCoding Course.png" alt="coderhubUk" />
    <Box component="section" sx={{ p: 2 }}>
      <h1>
        Summer Coding Course
      </h1>
      <p className="paragraph">
        Our Summer Coding Course is a 6 week course that will help you learn
        to code in Python, React, Next, Golang
      </p>
    </Box>

      </Container>
     <br />     
     <br /><br /><br /><br />
    <br />
      <br />
      {/* Logos of Languages They will learn */}
      {/* I want spaces Between Containers to remove everything from beting jampacked */}
      <Box>
        <Container className={`container ${showAnimation? "slide-in-right" : ""}`}>
          <h3>
            Languages you will learn
          </h3>
          <Box component="section" sx={{ p: 2 }} style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            margin: "auto",
          }}>
          <img  alt="TypeScript" width="60px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"/>
          <img  alt="TypeScript" width="60px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"/>
          <img  alt="Java" width="60px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/> 
          <img  alt="Python" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"/>
          <img  alt="React" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
          {/* Html,css, Javascript, Docker */}
          
          <img  alt="Html" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
          <img  alt="Css" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"/>
          <img  alt="Javascript" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
          <img  alt="Docker" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"/>

      

          </Box>
        </Container>

      </Box>
      <br />
      <br /><br /><br /><br /><br />



     {/* ----------------------------------------------------------------------------------------------     */}
      <Container className="container" style={{}}>
        <h1>
          Why <span className="red-word">CodersHub</span> UK
        </h1>
       <Box  
        className="Semi-container"
        // height={450}
        // width={600}
        // my={5}
        mx={"auto"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        // p={2}
        sx={{  }} 
        >
            <img className="Moving-pic" src="../../public/MovingPic-1.gif" alt="Codershubuk"/>
            <Box component="section" sx={{ p: 2}} >
              <ul>
                <li className="list-paragraph">
                  <strong>Learn to code</strong> with our expert tutors
                </li>
                <br/>
                <li className="list-paragraph">
                  Learn in Demand <strong>Programming Languages</strong>
                </li>
                <br/>
                <li className="list-paragraph">
                  <strong>1 to 1 Classes</strong> with our expert tutors
                </li>
                <br/>
              </ul>
            </Box>
        </Box>
        <Box className="Box" component="section" sx={{ p: 2, border: '1px dashed grey'}}>
          <p className="paragraph">
            We offer <strong>1 to 1 Classes</strong> Python Data science,
            React and Next for Fullstack Development, Golang for Backend
            Development
          </p>
        </Box>
    </Container>
    <br />
    <br /><br /><br /><br />
    <Container className="container">
      <h1>
        Our <span className="red-word">Tutors</span>
      </h1>
      <Box component="section" sx={{ p: 2}}>
        <p className="paragraph">
          Our tutors are experts in their fields and have years of experience
          in teaching coding to students of all levels.
        </p>
      </Box>
    </Container>

    </>
  );
};

export default Hero;
