import { InfiniteMovingCards } from "../../ui/infiniteMovingCards/infinite-moving-cards";
const companyValues = [
  {
    imgUrl: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/outlook-business-award.svg",
    title: "Customized Digital Strategies",
    quote:
    "We explore emerging technologies to deliver state-of-the-art solutions, ensuring our clients maintain a competitive edge in their industries.",
    name: "",
  },
  {
    imgUrl:"https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/entrepreneur-award-logo.svg",
     

    title: "Innovative Solutions with Cutting-Edge Technology",
    name: "",
    quote:
      "We explore emerging technologies to deliver state-of-the-art solutions, ensuring our clients maintain a competitive edge in their industries.",
  },
  {
    imgUrl:"https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/timesbusiness-badge.svg",

    title: "Empowering Businesses with Digital Education",
    name: "",
    quote:
    "We explore emerging technologies to deliver state-of-the-art solutions, ensuring our clients maintain a competitive edge in their industries.",
},
  {
    imgUrl:"https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/economictimes-badge.svg",
      
    title: "Sustainable Digital Transformation",
    name: "",
    quote:
    "We explore emerging technologies to deliver state-of-the-art solutions, ensuring our clients maintain a competitive edge in their industries.",
},
  {
    imgUrl:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/clutch-badge.svg",
    title: "Partnership and Collaboration",
    name: "",
    quote:
    "We explore emerging technologies to deliver state-of-the-art solutions, ensuring our clients maintain a competitive edge in their industries.",
},
];

const OurGrowth = () => {
  return (
    <div className="my-12 flex flex-col gap-11">
      <p className="text-4xl text-center dark:text-white font-bold">
        Our Growth Journey as a Mobile App Development Company Has Bagged a Few
        Reputed Accolades as Well
      </p>
      <InfiniteMovingCards
        containerClassName="bg-grey-900 border-grey dark:bg-zinc-900 dark:text-white"
        items={companyValues}
        direction="right"
        speed="slow"
      />
      
    </div>
  );
};

export default OurGrowth;
