"use client";

import { CardBody, CardContainer, CardItem } from "./3d-card";

interface props  {
  marignApply:boolean
}
export function ThreeDCard({marignApply}:{marignApply:props}) {
  return (
    <CardContainer className="inter-var " containerClassName={marignApply ? "justify-left" : "justify-end"}>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        
        <CardItem translateZ="100" className="w-full mt-4">
          <img
          src="https://samartheme2.vercel.app/images/about/pic1.jpg"
           
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
       
      </CardBody>
    </CardContainer>
  );
}
