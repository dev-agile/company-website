import React from "react";
import { ImagesSliderBackground } from "../../ui/imagesSliderBg/ImageSliderBackground";
import { MeteorsCard } from "../../ui/meteors/MeteorsCard";
import { BentoGridDemo } from "../../ui/bentoGrid/BentoGridDemo";
import Development from "./Development";
import OurGrowth from "./OurGrowth";
import IndustryDemand from "./IndustryDemand";
import PartnerShip from "./PartnerShip";
const companyServices = [
  {
    name: "Web Development",
    description:
      "Offering custom web development services that cater to the unique needs of your business. Our services include creating responsive website designs that ensure a seamless user experience across all devices, developing robust e-commerce platforms to enhance your online sales, and building scalable web applications that drive business growth.",
  },
  {
    name: "Mobile App Development",
    description:
      "Providing comprehensive mobile app development services tailored for both iOS and Android platforms. Our focus is on developing high-performance, feature-rich apps that offer an exceptional user experience, while ensuring scalability to meet your business's future needs. From concept to launch, we're here to bring your mobile app vision to life.",
  },
  {
    name: "Digital Marketing",
    description:
      "Our digital marketing strategies are designed to drive meaningful results. We specialize in SEO to enhance your online visibility, PPC advertising for targeted reach, effective social media management to engage with your audience, and compelling content marketing to build brand authority. Let us help you craft a digital marketing plan that grows your business.",
  },
];

const ServicesHeroSection = () => {
  return (
    <React.Fragment>
      <ImagesSliderBackground />

      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 m-2 sm:m-10 gap-4 items-center">
        {companyServices.map((service, index) => (
          <MeteorsCard
            key={index}
            name={service.name}
            description={service.description}
          />
        ))}
      </div>
      <div className="flex flex-col gap-10 mx-2 sm:mx-10">
        <p className="sm:text-5xl text-xl font-semibold tracking-[2px] sm:w-[75%] dark:text-white">
          We Create New Solutions and Transform Existing Ones with a Development
          Process That Beats Industry-Best Timelines
        </p>
        <div>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Our Services
            <svg width="12" height="12" viewBox="0 0 50 50">
              <path
                d="M15 0 L40 25 L15 50"
                fill="none"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>

        <BentoGridDemo />
      </div>
      <Development />
      <OurGrowth />
      <IndustryDemand />
      <PartnerShip/>
    </React.Fragment>
  );
};

export default ServicesHeroSection;
