import React from "react";
import { TypeAnimation } from "react-type-animation";
import Social from "./Social";

const Hero = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center mx-auto text-2xl font-bold tracking-tight">
        <p className="mt-20 font-mukta md:text-5xl md:mt-16">
          Hello there, I'm <span className="text-teal-500">Arulmozhikumar</span>
        </p>
      </div>

      <div className="mx-auto mt-6 text-lg font-mukta md:w-1/2">
        <TypeAnimation
          sequence={[
            `A final-year Computer Science Engineering student specializing in full-stack development and cloud computing. I'm eager to collaborate on innovative tech projects. </>`,
          ]}
          speed={50}
          cursor={true}
          style={{
            fontSize: "1em",
            display: "inline-block",
            color: "black",
            fontFamily: "Mukta",
          }}
        />
      </div>

      <Social />

      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          Get in touch
        </span>
      </div>
    </div>
  );
};

export default Hero;
