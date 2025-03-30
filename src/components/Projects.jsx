import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import tastImage from '../Assets/images/tasty.PNG';
const Projects = () => {
  const projects = [
    {
      title: "Tasty-Food website UI",
      description: "A full-featured Food Website with React and Tailwind CSS. Includes product filtering, cart functionality, and secure checkout.",
      tags: ["React", "Tailwind CSS"],
      thumbnail: tastImage, // Replace with your image path
      github: "https://github.com/mudasarahmad501/Tasty-Food",
      liveDemo: "https://mudasarahmad501.github.io/Tasty-Food/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve specific problems and improve my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;