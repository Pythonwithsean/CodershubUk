import { TypeAnimation } from "react-type-animation";

export function Typing() {
  return (
    <TypeAnimation
      sequence={[
        "Learn", // Types 'One'
        1000, // Waits 1s
        "Code", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Create", // Types 'Three' without deleting 'Two'
        2000, // Waits 2s
        () => {},
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="hero-text"
    />
  );
}
