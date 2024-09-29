import React from "react";
import { cn } from "../../../utils/cn";
import { Spotlight } from "./Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[55rem] w-full rounded-md flex md:items-center md:justify-center bg-gray-900 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Empowering Your <br/> Vision with Innovative IT Solutions

        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-3xl text-center mx-auto">
        At Cognivac, we specialize in empowering businesses through cutting-edge web, mobile, and AI solutions. Our expert team leverages the latest technologies to deliver custom, high-performance applications that drive innovation and growth. Whether you're looking to enhance your online presence, engage users on mobile platforms, or harness the power of artificial intelligence, we provide tailored solutions designed to elevate your business and ensure long-term success.
          copy.
        </p>
      </div>
    </div>
  );
}
