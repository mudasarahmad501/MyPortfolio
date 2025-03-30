import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { ReactTyped } from "react-typed";
import resumePDF from '../components/JobResume.pdf';
import myImage from '../Assets/images/m1.jpg'
// import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  // Replace with your actual CV file path
  const cvFile = resumePDF;
  
  return (

    <AnimatedSection
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-gray-900 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left md:order-1 order-2">
            <p className="text-indigo-600 dark:text-indigo-400 text-md font-medium">
              Hi, I'm
            </p>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Mudasar Ahmad
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-medium min-h-[3.5rem]">
              <ReactTyped className="text-indigo-600 dark:text-indigo-400"
                    strings={[
                        'Frontend Developer',
                        'React Specialist',
                        'UI/UX Enthusiast',
                        'JavaScript Developer'
                      ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                    />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              I build exceptional digital experiences with modern web technologies. 
              Currently specializing in React, Next.js, and Tailwind CSS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300 shadow-lg hover:shadow-indigo-500/50"
              >
                Contact Me
              </a>
              <a
                href={cvFile}
                download="JobResume.pdf"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 font-medium rounded-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <FiDownload /> Download CV
              </a>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="md:w-1/2 flex justify-center md:order-2 order-1">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Replace with your image */}
              <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={myImage} // Replace with your image path
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-indigo-200 dark:bg-indigo-800 opacity-70 -z-10"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-indigo-300 dark:bg-indigo-700 opacity-70 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
    
    // <section id="home" className="bg-white dark:bg-gray-900 min-h-screen flex items-center">
      
    // </section>
  );
};

export default Hero;