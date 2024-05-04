import { Typing } from "./Typing";
import Navbar from "./Navbar";
import { Container , Box } from "@mui/material";
const Hero = () => {
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
              Development
            </p>
            </Box>
      </section>
      <br />
     </Container>
     
      <Container>
      <section className="section2">
        <h1>
          Why <span className="red-word">CodersHub</span> UK
        </h1>
       <Box  
        className="Semi-container"
        height={450}
        width={600}
        my={5}
        mx={"auto"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        p={2}
        sx={{  }} 
        >
            <img className="Moving-pic" src="../../public/MovingPic-1.gif" alt="Codershubuk"/>
            <Box component="section" sx={{ p: 2}} >
              <ul>
                <li>
                  <strong>Learn to code</strong> with our expert tutors
                </li>
                <br/>
                <li>
                  Learn in Demand <strong>Programming Languages</strong>
                </li>
                <br/>
                <li>
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

        </section>

      </Container>
    </>
  );
};

export default Hero;
