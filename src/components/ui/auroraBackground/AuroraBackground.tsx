import { motion } from "framer-motion";
import React, { Suspense } from "react";
const AuroraBackground = React.lazy(() => import('./aurora-background'));
import { BackgroundGradientCard } from "../../ui/backgroundGradient/BackgroundGradientCard";
import StickyScrollReveal from '../stickyScrollReveal/StickyScrollReveal'


const detailsOfTeams = [
  {
    name: "Teams",
    description:
      "  The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    imgUrl: "https://samartheme2.vercel.app/images/about/pic1.jpg",
  },
  {
    name: "Teams",
    description:
      "  The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    imgUrl: "https://samartheme2.vercel.app/images/about/pic1.jpg",
  },
  {
    name: "Teams",
    description:
      "  The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    imgUrl: "https://samartheme2.vercel.app/images/about/pic1.jpg",
  },
  {
    name: "Teams",
    description:
      "  The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    imgUrl: "https://samartheme2.vercel.app/images/about/pic1.jpg",
  },
  {
    name: "Teams",
    description:
      "  The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    imgUrl: "https://samartheme2.vercel.app/images/about/pic1.jpg",
  },
  {
    name: "Teams",
    description:
      "  The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    imgUrl: "https://samartheme2.vercel.app/images/about/pic1.jpg",
  },
];

export function AuroraBackgrounds() {
  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <p className="text-center font-bold mt-6 text-5xl dark:text-white">Meet Our Team</p>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 m-10">
        {detailsOfTeams.map((team, index) => (
          <BackgroundGradientCard
            key={index} 
            img={team.imgUrl}
            name={team.name}
            description={team.description}
          />
        ))}
      </div>
     <p className="text-center font-bold text-3xl mb-5 sm:text-5xl mt-[6rem] dark:text-white">What We're Working On</p>
      <StickyScrollReveal/>
    </>
  );
}
