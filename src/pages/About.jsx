import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import { IoCodeSlashOutline, IoSchoolOutline } from 'react-icons/io5';
import { MdOutlineDesignServices } from 'react-icons/md';
import { PiStackSimpleBold } from 'react-icons/pi';
import JourneyItem from '../components/JourneyItem';
import EducationItem from '../components/EducationItem';
import SkillCard from '../components/SkillCard';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer (replay animation on scroll in/out)
  useEffect(() => {
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
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-darkGray text-white py-16 px-4 lg:px-8 relative overflow-hidden font-jetbrains"
    >
      <div className="max-w-7xl mx-auto h-full w-full">
        {/* Mobile Header */}
        <div className="block lg:hidden text-center mb-12 ">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-inter">
            ABOUT ME
          </h2>
        </div>

        {/* Desktop Vertical Title - Right Side */}
        <div className="hidden lg:block absolute right-4 xl:right-16 top-1/2 transform -translate-y-1/2 z-10 font-inter">
          <h2
            className={`text-6xl xl:text-7xl font-bold text-primary transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.1em',
              lineHeight: '0.9',
            }}
          >
            ABOUT&nbsp;ME
          </h2>
        </div>

        {/* Content Grid */}
        <div className="w-full lg:mr-16 xl:mr-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side Content */}
          <div className="space-y-6 sm:space-y-8 w-full">
            {/* Description */}
            <p
              className={`text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-[-30px] sm:translate-x-[-50px] opacity-0'
              }`}
            >
              I'm the type of person who gets genuinely excited about both
              thoughtful user experiences and building things that actually
              work. I started as a designer who got curious about code, and now
              I can't imagine doing one without the other. It's like being
              bilingual, but for the digital world – I love crafting interfaces
              that look great and building the functionality that makes them
              work flawlessly.
            </p>

            {/* Skills Cards */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 w-full">
              <SkillCard
                icon={
                  <MdOutlineDesignServices className="w-6 h-6 text-slate-900" />
                }
                title="Design Thinking"
                desc="User-centered design process from research to final pixel"
                animation={isVisible ? 'animate-slideInLeft' : ''}
                delay="600ms"
              />
              <SkillCard
                icon={<IoCodeSlashOutline className="w-6 h-6 text-slate-900" />}
                title="Clean Code"
                desc="Maintainable, scalable solutions with modern best practices"
                animation={isVisible ? 'animate-slideInRight' : ''}
                delay="800ms"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div
            className={`space-y-6 sm:space-y-8 w-full transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[30px] sm:translate-x-[50px] opacity-0'
            }`}
          >
            {/* My Journey */}
            <div className="bg-teal-900/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-cyan-400/20 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 font-inter">
                My Journey
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <JourneyItem
                  title="Started in Visual Design"
                  desc="Focused on UI/UX and brand identity"
                />
                <JourneyItem
                  title="Learned Frontend Development"
                  desc="React"
                />
                <JourneyItem
                  title="Full-Stack Capabilities"
                  desc="End-to-end product development"
                />
              </div>
            </div>

            {/* Education & Training */}
            <div className="bg-teal-900/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-cyan-400/20 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 font-inter">
                Education & Training
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <EducationItem
                  icon={
                    <HiOutlineAcademicCap className="w-4 h-4 text-slate-900" />
                  }
                  title="Disability and Rehabilitation Studies"
                  desc="4 years — University Program"
                />
                <EducationItem
                  icon={<IoSchoolOutline className="w-4 h-4 text-slate-900" />}
                  title="Frontend Bootcamp"
                  desc="3 months — Intensive Coding Program"
                />
                <EducationItem
                  icon={
                    <PiStackSimpleBold className="w-4 h-4 text-slate-900" />
                  }
                  title="Full Stack Developer Trainee"
                  desc="Ongoing — 1 Year Bootcamp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        /* Ensure no horizontal overflow on mobile */
        @media (max-width: 768px) {
          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out forwards;
          }
          .animate-slideInRight {
            animation: slideInRight 0.8s ease-out forwards;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
