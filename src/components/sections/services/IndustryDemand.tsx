import React from "react";
const industries = [
  {
    name: "Healthcare",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/healthcare-indus.svg",
  },
  {
    name: "Finance",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/finance-indus.svg",
  },
  {
    name: "Restaurant",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/restaurant-indus.svg",
  },
  {
    name: "eCommerce",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ecommerce-indus.svg",
  },
  {
    name: "Healthcare",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/healthcare-indus.svg",
  },
  {
    name: "Finance",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/finance-indus.svg",
  },
  {
    name: "Restaurant",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/restaurant-indus.svg",
  },
  {
    name: "eCommerce",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ecommerce-indus.svg",
  },
  {
    name: "Healthcare",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/healthcare-indus.svg",
  },
  {
    name: "Finance",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/finance-indus.svg",
  },
  {
    name: "Restaurant",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/restaurant-indus.svg",
  },
  {
    name: "eCommerce",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ecommerce-indus.svg",
  },
  {
    name: "Healthcare",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/healthcare-indus.svg",
  },
  {
    name: "Finance",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/finance-indus.svg",
  },
  {
    name: "Restaurant",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/restaurant-indus.svg",
  },
  {
    name: "eCommerce",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ecommerce-indus.svg",
  },
];
const IndustryDemand = () => {
    const itemsInLastRow = industries.length % 4 || 4;
    const startIndexOfLastRow = industries.length - itemsInLastRow;
  return (
    <div className="bg-black p-3 sm:p-10">
    <p className="text-white text-center sm:text-3xl text-2xl md:text-5xl mb-10">A Unified Vision That Caters<br />to Diverse Industry Demands</p>
    <div className="grid sm:grid-cols-3 md:grid-cols-4 grid-col-2 m-12 text-white">
      {industries.map((industry, index) => (
        <div key={index} className={`flex hover:bg-zinc-900 flex-col items-center p-6 sm:p-10 ${
          (index < startIndexOfLastRow) ? "sm:border-b-[0.1px]" : ""  
        } ${
          (index + 1) % 4 !== 0 ? "sm:border-r-[0.1px]" : ""  
        }`}>
          <div className="p-2 rounded-xl bg-[#313035]">
            <img src={industry.icon} alt={industry.name} className="h-8 w-8" />
          </div>
          <span className="mt-2">{industry.name}</span>
        </div>
      ))}
    </div>
  </div>
  );
};

export default IndustryDemand;
