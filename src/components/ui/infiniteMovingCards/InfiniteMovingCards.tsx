import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
      <InfiniteMovingCards
        items={companyValues}
        direction="right"
        speed="slow"
      />
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
