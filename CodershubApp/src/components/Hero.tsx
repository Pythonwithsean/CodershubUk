import { Typing } from "./Typing";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
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
            <Link className="apply-button" to="/login">
              Apply Now
            </Link>
          </section>
        </div>
        <section className="section2">
          <h1>
            About <span className="red-word">CodersHub</span> UK
          </h1>
          <Box component="section" sx={{ p: 2 }}>

            <p className="paragraph">
              At CodershubUk we area a <strong>Coding</strong> Tutoring Company that offers a
              range of courses to help you <strong>learn to code.</strong>
            </p>
          </Box>
          <Box component="section" sx={{ p: 2 }}>
            <p className="paragraph">I <strong>Built</strong> This <strong>Entire Site</strong> and many more from Scratch using Typescript, React, and Golang So <strong>i Know what i am saying</strong></p>
          </Box>
          <Box className="Box" component="section" sx={{ p: 2 }}>
            <p className="paragraph">
              We offer <strong>1 to 1 Classes</strong> Python Data science,
              React and Next for Fullstack Development, Golang for Backend
              Development </p> </Box> </section> <br /> </Container> <br /><br /><br /><br /><br /><br />
      {/* ------------------------------------------------------------------------------------------ */}


      <Container className={`container Semi-container ${showAnimation ? "slide-in-left" : ""}`} style={
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
        <Container className={`container ${showAnimation ? "slide-in-right" : ""}`}>
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
            <img alt="TypeScript" width="60px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" />
            <img alt="TypeScript" width="60px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
            <img alt="Java" width="60px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
            <img alt="Python" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" />
            <img alt="React" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img alt="Html" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            <img alt="Css" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
            <img alt="Javascript" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img alt="Docker" width="50px" className="tech-stack-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />
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
          justifyContent="center"
          alignItems="center"
          // p={2}
          sx={{}}
        >
          <img className="Moving-pic" src="../../public/MovingPic-1.gif" alt="Codershubuk" />
          <Box component="section" sx={{ p: 2 }} >
            <ul>
              <li className="list-paragraph">
                <strong>Learn to code</strong> with our expert tutors
              </li>
              <br />
              <li className="list-paragraph">
                Learn in Demand <strong>Programming Languages</strong>
              </li>
              <br />
              <li className="list-paragraph">
                <strong>1 to 1 Classes</strong> with our expert tutors
              </li>
              <br />
            </ul>
          </Box>
        </Box>
        <Box className="Box" component="section" sx={{ p: 2, border: '1px dashed grey' }}>
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
          Our<span className="red-word"> Past Events</span>
        </h1>
        <Box component="section" sx={{ p: 2 }}>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </Box>
      </Container>

    </>
  );
};

export default Hero;
