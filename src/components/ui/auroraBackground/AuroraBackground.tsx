
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./aurora-background";

export function AuroraBackgrounds() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 text-center"
      >
        <h1 className="text-3xl md:text-7xl font-bold dark:text-white">
          Our Team, Our Pride
        </h1>
        <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Where individual talents converge to create extraordinary results.
        </p>
        <h2 className="text-lg md:text-2xl font-medium dark:text-neutral-200">
          Meet the innovators driving change, one project at a time.
        </h2>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 mt-4">
          Discover our team
        </button>
      </motion.div>
    </AuroraBackground>
  );
}

