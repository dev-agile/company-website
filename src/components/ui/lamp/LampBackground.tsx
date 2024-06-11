import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import { TypewriterEffectSmooth } from "../typewriter/typewriter-effect";

const words = [
  {
    text: "Transforming",
  },
  {
    text: "Your",
  },
  {
    text: "Digital",
  },
  {
    text: "Identity",
  },
  {
    text: "With",
  },
  {
    text: "Innovation.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export function LampBackground() {
  return (
    <LampContainer className="flex justify-center items-center h-screen">
      <div className="text-center w-full">
        <div className="flex flex-col gap-11 justify-center items-center h-full relative bottom-[160px]">
          <h1 className="text-white text-7xl font-medium tracking-tight">
            Let's Connect

          </h1>
          {/* <TypewriterEffectSmooth words={words} /> */}
          <p className="text-zinc-300 text-lg sm:text-2xl leading-6 sm:w-[60%]">
            Start your transformation journey today. Whether it's a query, project, or a visionary idea, we're here to listen and elevate your digital potential.

            Experience seamless communication, comprehensive support, and bespoke solutions tailored just for you
          </p>
        </div>
      </div>
    </LampContainer>
  );
}
