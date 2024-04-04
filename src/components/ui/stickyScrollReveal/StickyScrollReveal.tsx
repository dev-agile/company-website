import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";

// const content = [

//   {
//     id: 1,
//     title: "Next-Gen Product Development",
//     description: 'Developing a cutting-edge product that leverages AI and machine learning to deliver personalized user experiences.',
//     imgUrl: 'https://example.com/images/project1.jpg',

//    content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <img
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Running out of content
//       </div>
//     ),
//   },
// ];
const content = [
  {
    id: 1,
    title: "Next-Gen Product Development",
    description:
      "Developing a cutting-edge product that leverages AI and machine learning to deliver personalized user experiences.",
    imgUrl: "https://example.com/images/project1.jpg",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Blockchain for Secure Transactions",
    description:
      "Implementing blockchain technology to enhance security and transparency in digital transactions.",
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "Augmented Reality in Education",
    description:
      "Creating immersive educational experiences using augmented reality.",
    imgUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 4,
    title: "Smart City Solutions",
    description:
      "Developing IoT-based solutions for smart cities to improve urban living.",
    imgUrl: "https://example.com/images/project4.jpg",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 5,
    title: "Advanced Health Monitoring Wearables",
    description:
      "Leveraging cutting-edge sensor technology to develop wearables for real-time health monitoring.",
    imgUrl: "https://example.com/images/project5.jpg",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 6,
    title: "AI-Driven Personalized Learning",
    description:
      "Utilizing artificial intelligence to create personalized learning paths for students.",
    imgUrl: "https://example.com/images/project6.jpg",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 7,
    title: "Eco-Friendly Packaging Innovation",
    description:
      "Redefining packaging with eco-friendly materials and processes.",
    imgUrl: "https://example.com/images/project7.jpg",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://plus.unsplash.com/premium_photo-1682309652843-ed4eb60d473e?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 8,
    title: "Renewable Energy Systems",
    description:
      "Enhancing the efficiency and accessibility of renewable energy sources.",
    imgUrl: "https://example.com/images/project8.jpg",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 9,
    title: "Virtual Reality for Remote Work",
    description:
      "Developing virtual reality solutions to enhance remote collaboration and workplace productivity.",
    imgUrl: "https://example.com/images/project9.jpg",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function StickyScrollReveal() {
  return (
    <div className="p-2">
      <StickyScroll contentClassName="bg-[red] mr-5" content={content} />
    </div>
  );
}

export default StickyScrollReveal;
