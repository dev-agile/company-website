import React, { useState } from 'react';
import Modal from 'react-modal';

const OurPurpose = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="text-white mx-20 p-8 rounded-lg shadow-xl">
            <h1 className="text-white text-center sm:text-3xl text-2xl md:text-5xl mb-10">Our Purpose</h1>
            <p className='text-center sm:text-3xl text-2xl md:text-3xl mb-10'>Bringing together the best of modern technology and our talented team to significantly accelerate and enhance progress across industries.</p>
            <div className="flex flex-col md:flex-row md:items-center gap-20 p-6 rounded-lg shadow-md">
                <img className="w-full md:w-1/3 rounded-2xl shadow-md" src="https://i.pinimg.com/564x/40/08/b9/4008b900de9d0f325fdb856f352058f4.jpg" alt="Team Collaboration" />
                <div className="text-gray-300">
                    <img className='bg-white p-4 rounded-md w-10 h-10' src="https://hcltech.imgix.net/sites/default/files/images/about-us/qoute.png" alt="" />
                    <p className="text-lg md:text-xl mb-4 mt-2">
                        At Cognivac, our purpose is to leverage technology to make a significant impact on the world.
                        We aim to solve complex problems, enhance everyday life, and accelerate innovation across various industries.
                        Our mission is rooted in the belief that technology can transform lives and should be accessible to everyone.
                    </p>
                    <p className="text-lg md:text-xl">
                        We are committed to sustainability and ethical practices in all our endeavors,
                        ensuring that our work not only advances technological frontiers but also promotes a
                        better future for all. Through our collaborative culture, we bring together diverse
                        talents to deliver solutions that are not only innovative but also responsible and forward-thinking.
                    </p>
                    <p className="text-lg md:text-xl">
                        Join us as we continue to explore new horizons and push the boundaries of what is possible, all while staying true to our core values of integrity, innovation, and inclusivity.
                    </p>
                    <p onClick={openModal} className='mt-4 text-blue-700 underline cursor-pointer'>
                      Our objective →
                    </p>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Our Objective"
                className="bg-neutral-950 text-slate-300 p-8 rounded-lg shadow-xl max-w-2xl mx-auto my-20 focus:outline-none hover:outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
            >
                <div className='flex justify-between items-baseline'>
                    <h2 className="text-2xl font-bold mb-4 text-center">Our Objective</h2>
                    <button className="text-white rounded focus:outline-none hover:outline-none" onClick={closeModal}>
                        X
                    </button>
                </div>
                
                <ul className="text-lg mb-4 list-disc pl-5">
                    <li className="mb-2 list-decimal">Drive meaningful change through innovative technology solutions.</li>
                    <li className="mb-2 list-decimal">Create impactful experiences that bridge the gap between technology and humanity.</li>
                    <li className="mb-2 list-decimal">Foster a world where technology serves as a force for good.</li>
                    <li className="mb-2 list-decimal">Promote sustainability and ethical practices in all endeavors.</li>
                    <li className="mb-2 list-decimal">Collaborate with diverse talents to deliver responsible and forward-thinking solutions.</li>
                </ul>
            </Modal>
        </div>
    );
};

export default OurPurpose;
