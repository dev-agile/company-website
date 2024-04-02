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
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center w-full"
      >
        <div className="flex flex-col gap-11 justify-center items-center h-full">
          <h1 className="text-white text-5xl font-medium tracking-tight">
            Build awesome applications with Agilegeeks
          </h1>
          <TypewriterEffectSmooth words={words} />
          <p className="text-zinc-300 text-2xl w-[60%]">
            We transform visions into vibrant digital realities. Specializing in web design and development, we ensure your digital presence is as unique as your brand, making lasting impressions in the digital world.
          </p>
        </div>
      </motion.div>
    </LampContainer>
  );
}
