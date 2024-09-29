import { cn } from "../../../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
      title: "Web Development",
      description: "Custom web development including responsive design, e-commerce platforms, and scalable web applications to fuel business growth.",
      header: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/solutions-designed-bg.webp" ,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mobile App Development",
      description: "End-to-end mobile app development for iOS and Android, focusing on performance, user experience, and scalability.",
      header: "https://source.unsplash.com/random/200x200?mobile",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing services with SEO, PPC, social media management, and content marketing to elevate your brand.",
      header: "https://appinventiv.com/wp-content/uploads/2021/12/Mobile-App-Development-for-Businesses-01.webp" ,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Graphic Design",
      description: "Professional graphic design from branding and logo to print and digital graphics, enhancing your brand identity.",
      header: "https://appinventiv.com/wp-content/uploads/2024/04/Banner-1.webp" ,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Cloud Services",
      description: "Scalable and secure cloud solutions, including infrastructure, data storage, and SaaS, supporting your cloud journey.",
      header: "https://source.unsplash.com/random/200x200?cloud" ,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive cybersecurity services protecting against digital threats, ensuring data integrity, confidentiality, and availability.",
      header: "https://appinventiv.com/wp-content/uploads/2024/04/Blockchain-for-digital-identity-verification.webp",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on thrilling journeys and discoveries that spark the spirit of adventure.",
      header: "https://source.unsplash.com/random/200x200?adventure" ,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  
  
