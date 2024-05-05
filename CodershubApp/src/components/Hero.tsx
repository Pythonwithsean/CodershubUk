import { Typing } from "./Typing";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Container, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";

const Hero = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  var imgs = ["../../public/Codershubukevent-6.jpg", "../../public/Codershubukevent-5.jpg", "../../public/Codershubukevent-4.jpg", "../../public/Codershubukevent-3.jpg", "../../public/Codershubukevent-2.jpg", "../../public/Codershubukevent-1.jpg"]

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
              At Codershub Uk we are a <strong>Coding</strong> Tutoring Agency that offers a
              range of courses to help you <strong>learn to code.</strong>
            </p>
          </Box>
          <Box component="section" sx={{ p: 2 }}>
            <p className="paragraph">I <strong>Built</strong> This <strong>Entire Site</strong> and many more Applications from Scratch using Typescript, React, and Golang And I also Have a <strong>Computer Science Degree with a 1st </strong> so <strong>I Know what i am doing</strong>.</p>
          </Box>
          <Box className="Box" component="section" sx={{ p: 2 }}>
            <p className="paragraph">
              We offer <strong>1 to 1 Classes</strong> Python,
              React and Next for Fullstack Web Development, Golang for Backend Web Services.
            </p> </Box> </section> <br /> </Container> <br /><br /><br /><br /><br /><br />
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
            Our <strong>Summer Coding Course</strong> is a 4 week course that will help you learn
            to code in Python, React, Next, Golang to Build Beautiful and Aesthetic Applications like this from scratch.
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
          <h1>
            Languages you will learn at Codershub UK
          </h1>
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
                <strong>Learn to code</strong> from Actual <strong>Computer Scientist </strong> who Understand how to Program
              </li>
              <br />

              <li className="list-paragraph">
                Learn in Demand <strong>Programming Languages</strong> that Companies are looking for.
              </li>
              <br />

              <li className="list-paragraph">
                At Codershub UK <strong>We Actually Build Projects, including a Portfolio Website and Github Setup</strong> So Companies see that you have built things in the past.
              </li>
            </ul>
          </Box>
        </Box>
        <br />
        <Box className="Box" component="section" sx={{ p: 2, border: '1px dashed grey' }}>
          <p className="paragraph">
            The Current Technology Market is hard <strong>Learn what is Needed and Build Stuff</strong> Codershub UK ensures that Our Clients <strong> Actually Learn and Build Stuff</strong>
          </p>
        </Box>
      </Container>
      <br />
      <br /><br /><br /><br />

      <br />
      <br />
      <Container className="container">
        <h1>
          Our<span className="red-word"> Past Events</span>
        </h1>
        <Box component="section" sx={{ p: 2 }}>
          <p className="paragraph">
            <strong>Codershub UK</strong> recently hosted an engaging and immersive physical coding camp, where our students delved into the exciting world of programming right here in London. Over the course of the event, participants were immersed in hands-on learning experiences, mastering essential programming languages such as Python, JavaScript, HTML, and CSS. Through interactive sessions and real-world projects, our students gained practical skills and valuable insights, empowering them to embark on their coding journey with confidence and enthusiasm.
          </p>
          <br />
          <Carousel className="Carousel"
            swipe={true}
            stopAutoPlayOnHover={false}
            autoPlay={true}
            indicators={false}
            animation="fade"
            cycleNavigation={true}
            duration={150}
          >
            {
              imgs.map(img => {
                return <img className="collage-image" src={`${img}`} alt={img} />
              })
            }
          </Carousel>
        </Box>
      </Container>
      <br />

      <br />
      <br />
      <br />
      <br />
      <Container>
        <h1>
          Projects We Build at<span className="red-word"> Codershub UK</span>
        </h1>
        <Box component="section" sx={{ p: 2 }}>
          <p className="paragraph">
            At Codershub UK <strong>Learning and Building is our Objective</strong> we ensure that all i students have a <strong>Github Account</strong> were they are able to put all their Projects
          </p>
          <p className="paragraph"><strong>We Also Teach Students how to make a Portfolio Website where they can showcase all their Projects and Express Creativity</strong></p>
        </Box>
      </Container>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} md={11} sm={4} style={{
            margin: "0 auto"
          }}>
            <img src="../../public/Portfolio.png" alt="Portfolio" className="Grid-img" />
            <h3>Portfolio website</h3>
            <p className="paragraph">Students will get the chance to build a Portfolio Website where they are able to showcase what they have learnt and built</p>
          </Grid>
          <Grid item xs={2} md={11} sm={4} style={{
            margin: "0 auto"
          }}>
            <img src="../../public/TodoApp.PNG" alt="Todo-App" className="Grid-img" />
            <h3>Todo App</h3>
            <p className="paragraph">Students will get to make a ToDo App </p>
          </Grid>
          <Grid item xs={2} md={11} sm={4} style={{
            margin: "0 auto"
          }}>
            <img src="../../public/QuartzxSpaceNew.png" alt="Note-Taking-App" className="Grid-img" />
            <h3>Note Taking App</h3>

            <p className="paragraph"> Students will get the chance to Build a website that allows them to make Notes from scratch </p>
          </Grid>
          <Grid item xs={2} md={11} sm={4} style={{
            margin: "0 auto"
          }} >
            <img src="../../public/GamingCodershubUK.png" alt="Video-Games" className="Grid-img" />
            <h3>Video Games</h3>
            <p className="paragraph"> Students will get the Chance to Build games and play them competively with other Students</p>
          </Grid>
          <Grid item xs={2} md={11} sm={4} style={{
            margin: "0 auto"
          }} >
            <img src="../../public/CodingWarsCodershubUK.jpg" alt="Hackerthons" className="Grid-img" />
            <h4> Weekly Coding Wars</h4>
            <p className="paragraph">Students will get the chance to Solve Weekly Problems with the Coding Skills to Help with Problem Solving and Algorithmic Thinking</p>
          </Grid>



        </Grid>
      </Container>

    </>
  );
};

export default Hero;
