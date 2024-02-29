import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Machine Learning Developer",
          "Full Stack Developer",
          "Web Developer",
          "Mobile App Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,

      }}
    />
  );
}

export default Type;
