import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaFigma,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

// Technical Skills Component
const TechnicalSkills = () => {
  const technicalSkills = [
    {
      name: 'HTML',
      icon: FaHtml5,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      name: 'CSS',
      icon: FaCss3Alt,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'JAVASCRIPT',
      icon: FaJs,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
    {
      name: 'REACT JS',
      icon: FaReact,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50',
    },
    {
      name: 'TAILWIND CSS',
      icon: SiTailwindcss,
      color: 'text-teal-500',
      bgColor: 'bg-teal-50',
    },
    {
      name: 'BOOTSTRAP',
      icon: FaBootstrap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'FIGMA',
      icon: FaFigma,
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
    },
    {
      name: 'NODE JS',
      icon: FaNodeJs,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'GITHUB',
      icon: FaGithub,
      color: 'text-gray-800',
      bgColor: 'bg-gray-50',
    },
    {
      name: 'MONGODB',
      icon: SiMongodb,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-6 font-inter">
        Technical Skills
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {technicalSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group min-h-[100px] sm:min-h-[120px]"
            >
              <div
                className={`${skill.bgColor} p-2 sm:p-3 rounded-lg mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}
              >
                <IconComponent
                  className={`${skill.color} text-xl sm:text-2xl`}
                />
              </div>
              <span className="text-gray-800 font-medium text-xs text-center leading-tight font-jetbrains">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TechnicalSkills;
