import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi'; // Added FiMapPin here
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Mudasar Ahmad</h3>
            <p className="text-gray-400">
              A passionate frontend developer creating beautiful, responsive web applications with modern technologies.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://github.com/mudasarahmad501" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mudasar-ahmad-72a5bb22a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://wa.me/+923088421858" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a 
                href="mailto:mudasar228013@gmail.com" 
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 flex-shrink-0" />
                <span>mudasar228013@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="mt-1 mr-3 flex-shrink-0" />
                <span>+92 3088421858</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Mudasar Ahmad. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;