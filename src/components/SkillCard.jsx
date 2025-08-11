import React from 'react';

const SkillCard = ({ icon, title, desc, animation, delay }) => (
  <div
    className={`group bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 transform hover:scale-105 w-full ${
      animation || 'opacity-0 translate-y-10'
    }`}
    style={{ animationDelay: animation ? delay : '0ms' }}
  >
    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight font-inter">
        {title}
      </h3>
    </div>
    <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default SkillCard;
