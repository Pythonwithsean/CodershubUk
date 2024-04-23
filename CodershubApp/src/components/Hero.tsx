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
        <h1>CoderhubUk</h1>
        <ul>
          <li>
            <p className="paragraph">
              We are a coding bootcamp that offers a range of courses to help
              you learn to code.
            </p>
          </li>

          <li>
            <p className="paragraph">
              We offer courses in web development, mobile app development, and
              data science.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Hero;
