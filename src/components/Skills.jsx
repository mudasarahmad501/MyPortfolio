import React from 'react';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFigma,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" size={40} />, level: '50%' },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" size={40} />, level: '60%' },
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" size={40} />, level: '85%' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" size={40} />, level: '90%' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38B2AC]" size={40} />, level: '65%' },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-[#7952B3]" size={40} />, level: '80%' },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" size={40} />, level: '85%' },
    { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" size={40} />, level: '90%' },
    { name: 'NPM', icon: <FaNpm className="text-[#CB3837]" size={40} />, level: '80%' },
    { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" size={40} />, level: '75%' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I use to build responsive and beautiful web applications
          </p>
        </div>

        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full" 
                  style={{ width: skill.level }}
                ></div>
              </div>
              <span className="mt-2 text-sm text-gray-500 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;