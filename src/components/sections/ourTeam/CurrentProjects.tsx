import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Next-Gen Product Development',
    description: 'Developing a cutting-edge product that leverages AI and machine learning to deliver personalized user experiences.',
    imgUrl: 'https://example.com/images/project1.jpg',
  },
  {
    id: 2,
    title: 'Sustainability Initiatives',
    description: 'Launching a series of sustainability initiatives aimed at reducing our carbon footprint and promoting green technology.',
    imgUrl: 'https://example.com/images/project2.jpg',
  },
  {
    id: 3,
    title: 'Community Outreach Program',
    description: 'Expanding our community outreach program to support education and technology access in underserved communities.',
    imgUrl: 'https://example.com/images/project3.jpg',
  },
  // Add more projects as needed
];



export function CurrentProjects() {
  return (
    <section className="current-projects my-12">
      <h2 className="text-3xl font-bold text-center my-8">What We're Working On</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="project-card bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img className="w-full h-48 object-cover" src={project.imgUrl} alt={project.title} />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
