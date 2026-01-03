import React from "react";

const EducationItem = ({ icon, title, desc }) => (
  <div className="flex items-start gap-3 sm:gap-4">
    <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div className="min-w-0 flex-1">
      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
        {title}
      </h4>
      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

export default EducationItem;
