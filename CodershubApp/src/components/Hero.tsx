import { Typing } from "./Typing";

const Hero = () => {
  return (
    <>
      <div className="Hero-Container">
        <section className="section1">
          <Typing />
        </section>
        <button className="apply-button">Apply Now</button>
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
        </ul>
      </section>
    </>
  );
};

export default Hero;
