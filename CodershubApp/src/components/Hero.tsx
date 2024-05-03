import { Typing } from "./Typing";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="Hero-Container">
        <section className="section1">
          <Typing />
        <button className="apply-button">Apply Now</button>
        </section>
      </div>
      <section className="section2">
        <h1>
          About <span className="red-word">CodersHub</span> Uk
        </h1>
        <ul>
          <li>
            <p className="paragraph">
              We are a <strong>coding</strong> Tutoring Company that offers a
              range of courses to help you <strong>learn to code.</strong>
            </p>
          </li>

          <li>
            <p className="paragraph">
              We offer <strong>1 to 1 Classes</strong> Python Data science,
              React and Next for Fullstack Development, Golang for Backend
              Development
            </p>
          </li>
          <li>
            <p className="paragraph">We are experienced in the Field</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Hero;
