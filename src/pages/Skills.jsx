import React from 'react';
import TechnicalSkills from '../components/TechnicalSkills';
import SoftSkills from '../components/SoftSkills';

const Skills = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  // Intersection Observer for animation
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-8 px-4 lg:px-8 relative flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile Header */}
        <div className="block lg:hidden text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-inter">
            Skills
          </h2>
        </div>

        {/* Desktop Vertical Title - Right Side */}
        <div className="hidden lg:block absolute right-2 xl:right-16 top-1/2 transform -translate-y-1/2 z-10">
          <h2
            className={`text-6xl xl:text-9xl font-bold text-primary font-inter transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.1em',
              lineHeight: '0.9',
            }}
          >
            SKILLS
          </h2>
        </div>

        {/* Content Grid */}
        <div className="lg:mr-16 xl:mr-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Technical Skills - Takes 2 columns */}
          <div className="lg:col-span-2">
            <TechnicalSkills />
          </div>

          {/* Soft Skills - Takes 1 column */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <SoftSkills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
