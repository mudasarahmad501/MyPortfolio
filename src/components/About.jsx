import React from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar } from 'react-icons/fi';
import aboutImage from '../Assets/images/m3.jpg';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
const About = () => {

    const socialLinks = {
        github: 'https://github.com/mudasarahmad501',
        linkedin: 'https://www.linkedin.com/in/mudasar-ahmad-72a5bb22a/',
        whatsapp: 'https://wa.me/+923088421858' // Format: https://wa.me/1234567890
      };

  return (
    <AnimatedSection
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 dark:bg-gray-800 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Personal Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 md:h-full sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700">
              <img 
                src={aboutImage} // Replace with your about section image
                alt="About Me"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-800 opacity-10"></div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Personal <span className="text-indigo-600 dark:text-indigo-400">Details</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="bg-indigo-100 dark:bg-gray-700 p-3 rounded-full mr-4">
                  <FiUser className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">Full Name</p>
                  <p className="text-gray-800 dark:text-white font-medium">Mudasar Ahmad Zahid</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-indigo-100 dark:bg-gray-700 p-3 rounded-full mr-4">
                  <FiMail className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">Email</p>
                  <p className="text-gray-800 dark:text-white font-medium">mudasar228013@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-indigo-100 dark:bg-gray-700 p-3 rounded-full mr-4">
                  <FiPhone className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">Phone</p>
                  <p className="text-gray-800 dark:text-white font-medium">+92 3088421858</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-indigo-100 dark:bg-gray-700 p-3 rounded-full mr-4">
                  <FiMapPin className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">Location</p>
                  <p className="text-gray-800 dark:text-white font-medium">Lahore, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-indigo-100 dark:bg-gray-700 p-3 rounded-full mr-4">
                  <FiCalendar className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">Birthday</p>
                  <p className="text-gray-800 dark:text-white font-medium">January 16, 2000</p>
                </div>
              </div>
            </div>

            {/* About Me Text */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Who <span className="text-indigo-600 dark:text-indigo-400">I Am</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate frontend developer with 3+ years of experience creating modern, responsive web applications. 
                I specialize in React, JavaScript, and Tailwind CSS, with a strong focus on creating intuitive user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My approach combines technical expertise with creative problem-solving to deliver high-quality solutions. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

             {/* Social Media Links */}
             <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Social <span className="text-indigo-600 dark:text-indigo-400">Links..</span>
              </h3>
              <div className="flex gap-4">
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                
                <a 
                  href={socialLinks.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-700 text-green-600 dark:text-green-400 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </AnimatedSection>
    
  );
};

export default About;