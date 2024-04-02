import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={companyValues}
        direction="right"
        speed="slow"
      />
    </div>
  );
}


const companyValues = [
  {
    title: "Customized Digital Strategies",
    quote: "We craft bespoke digital strategies tailored to each client's unique needs, utilizing data analytics, user experience design, and cutting-edge technologies to exceed expectations.",
    name: "",
  },
  {
    title: "Innovative Solutions with Cutting-Edge Technology",
    name: "",
    quote: "We explore emerging technologies to deliver state-of-the-art solutions, ensuring our clients maintain a competitive edge in their industries."
  },
  {
    title: "Empowering Businesses with Digital Education",
    name: "",
    quote: "Through workshops and training sessions, we demystify digital technology for our clients, enabling them to make informed decisions and embrace digital transformation."
  },
  {
    title: "Sustainable Digital Transformation",
    name: "",
    quote: "Our digital solutions are efficient, scalable, and environmentally friendly, helping businesses reduce their carbon footprint and contribute positively to the global ecosystem."
  },
  {
    title: "Partnership and Collaboration",
    name: "",
    quote: "We view our clients as partners in innovation, fostering a collaborative environment for a successful and long-lasting relationship."
  }
];

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];
