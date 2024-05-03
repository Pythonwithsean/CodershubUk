import { TypeAnimation } from "react-type-animation";

export function Typing() {
  return (
    <TypeAnimation
      sequence={[
        "At CodersHub UK",
        2000, // Waits 2s
        "We Learn", // Types 'One'
        1000, // Waits 1s
        "We Code", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "We Create", // Types 'Three' without deleting 'Two'
        2000, // Waits 2s
        () => { },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="hero-text"
    />
  );
}
