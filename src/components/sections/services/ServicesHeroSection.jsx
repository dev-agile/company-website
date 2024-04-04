import React from "react";
import { ImagesSliderBackground } from "../../ui/imagesSliderBg/ImageSliderBackground";
import {MeteorsCard} from '../../ui/meteors/MeteorsCard'
import { BentoGridDemo } from "../../ui/bentoGrid/BentoGridDemo";
const companyServices = [
  {
    name: "Web Development",
    description: "Offering custom web development services that cater to the unique needs of your business. Our services include creating responsive website designs that ensure a seamless user experience across all devices, developing robust e-commerce platforms to enhance your online sales, and building scalable web applications that drive business growth."
  },
  {
    name: "Mobile App Development",
    description: "Providing comprehensive mobile app development services tailored for both iOS and Android platforms. Our focus is on developing high-performance, feature-rich apps that offer an exceptional user experience, while ensuring scalability to meet your business's future needs. From concept to launch, we're here to bring your mobile app vision to life."
  },
  {
    name: "Digital Marketing",
    description: "Our digital marketing strategies are designed to drive meaningful results. We specialize in SEO to enhance your online visibility, PPC advertising for targeted reach, effective social media management to engage with your audience, and compelling content marketing to build brand authority. Let us help you craft a digital marketing plan that grows your business."
  },
  {
    name: "Graphic Design",
    description: "Our graphic design services are all about creating visual impact. Whether you need a new brand identity, logo design, print materials, or digital graphics, our team of creative professionals is here to elevate your brand's aesthetic. With a keen eye for design and attention to detail, we're committed to delivering designs that resonate with your target audience."
  },
  {
    name: "Cloud Services",
    description: "Offering cutting-edge cloud services to empower your business operations. Our cloud solutions provide scalable and secure cloud infrastructure, comprehensive data storage options, and seamless SaaS application integration. Whether you're migrating to the cloud or looking to enhance your existing cloud capabilities, we have the expertise to support your cloud journey."
  },
  {
    name: "Cybersecurity",
    description: "In an era where digital threats are ever-evolving, our cybersecurity services offer the protection your business needs. From vulnerability assessments to implementing robust security protocols, we're here to safeguard your digital assets. Our approach to cybersecurity ensures the integrity, confidentiality, and availability of your data, giving you peace of mind in a digital world."
  }
];


const ServicesHeroSection = () => {
  return (
    <React.Fragment>
      <ImagesSliderBackground/>
    
      {/* <div className="grid grid-cols-3 m-10 gap-4 items-center"> 
        {companyServices.map((service, index) => (
          <MeteorsCard key={index} name={service.name} description={service.description} />
        ))}
      </div> */}
      
      <BentoGridDemo/>
      
    </React.Fragment>
  );
};

export default ServicesHeroSection;
