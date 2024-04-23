import { Typing } from "./Typing";

const Hero = () => {
  return (
    <>
      <div className="Hero-Container">
        <section className="section1">
          <Typing />
        </section>
        <button className="apply-button">Apply Now</button>
        <h1>At Codershub</h1>
        <section className="section2"></section>
      </div>
    </>
  );
};

export default Hero;
