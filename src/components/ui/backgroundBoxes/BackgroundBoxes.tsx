import React from "react";
import { Boxes } from "./background-boxes";
import { cn } from "../../../utils/cn";
import { TypewriterEffectSmooth } from "../typewriter/typewriter-effect";
import { MovingBorderButton } from "../movingBorder/MovingBorde";

import { Button } from "@mui/material";

const words = [
  {
    text: "Kickstart",
  },
  {
    text: "Your",
  },
  {
    text: "Digital",
  },
  {
    text: "Journey",
  },

  {
    text: "Today.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export function BackgroundBoxes() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1
            className={cn(
              "relative z-20",
              "text-transparent text-7xl text-center font-bold bg-clip-text bg-gradient-to-br from-[#83aaff] to-[#254975]"
            )}
          >
            Let's Connect
          </h1>
          <TypewriterEffectSmooth className="z-40" words={words} />
          <p
            className={cn(
              "z-20",
              "text-4xl mt-3 text-white  text-center ",
              "w-[95%]"
            )}
          >
            Start your transformation journey today. Whether it's a query,
            project, or a visionary idea,
             we're here to listen and elevate your digital potential.
          </p>
          <p
            className={cn(
              "z-20",
              "text-xl mt-2 text-white tracking-wider",
              "mt-5"
            )}
          >
            Experience seamless communication, comprehensive support, and
            bespoke solutions tailored just for you.
          </p>
          <div className="mt-10 flex flex-col items-center gap-10">
            <Button
              variant="outlined"
              className="!border-zinc-300 !p-3 !pr-5 !pl-5 !text-slate-200 !rounded-xl !capitalize !text-lg !border-2"
            >
              Join Our Team
            </Button>
            <MovingBorderButton title="Join Our Team" />
          </div>
          {/* <div className="mt-6 text-white">
            <p>Or reach us directly at:</p>
            <p><strong>Email:</strong> contact@example.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
