import { DirectionAwareHoverBox } from "../../ui/directionAwareHover/DirectionAwareHoverBox";
const Step = ({ icon, title, description }) => (

    <div className="border rounded-md p-[2px] shadow-lgw-fit">
     <DirectionAwareHoverBox img={icon} title={title} description={description}/>
     <h3 className="text-2xl text-heading-2-reverse text-center font-semibold mt-2">{title}</h3>
    <p className="text-heading-3-reverse text-center text-lg">{description}</p>
    </div>
   
);

const HowItWorks = () => {
  const steps = [
    {
      icon: "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "Designing",
      description:
        "Suspendisse potenti. Pellentesque ornare mattis elit non fermentum.",
    },
    {
      icon: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      title: "Development",
      description:
        "Suspendisse potenti. Pellentesque ornare mattis elit non fermentum.",
    },
    {
      icon: "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "Launching",
      description:
        "Suspendisse potenti. Pellentesque ornare mattis elit non fermentum.",
    },
  ];

  return (
    <section className={`py-20 opacity-90 bg-body-reverse`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <button className="mb-4 text-lg font-semibold text-heading-1-reverse p-3 rounded-xl bg-gradient-to-tr from-blue-600 to-green-400">
            OUR STEPS
          </button>
          <h1 class="text-heading-1-reverse font-semibold text-2xl sm:text-3xl md:text-4xl">
            How It’s Work
          </h1>
        </div>
        <div className="grid grid-cols-2x md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default HowItWorks;
