import React, { useCallback } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import img from '../assets/images/ruth.png';

function Home({ scrollToSection }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log('Particles loaded', container);
  }, []);

  const handleViewWork = () => {
    if (scrollToSection) {
      scrollToSection('work');
    } else {
      // console.log('scrollToSection function not available');
    }
  };

  const handleGetInTouch = () => {
    if (scrollToSection) {
      scrollToSection('contact');
    } else {
      // console.log('scrollToSection function not available');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 lg:px-8 relative overflow-hidden font-inter">
      {/* Background with Dark Blue/Teal Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900" />

      {/* React Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ['#06b6d4', '#0891b2', '#22d3ee'],
            },
            links: {
              color: '#06b6d4',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Ruth Nyankum
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-cyan-300 mb-8 font-light font-jetbrains">
              I'm Developer | Designer
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 mb-8">
              <a
                href="https://x.com/ruth_nanarain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <BsTwitterX size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ruthnyankum/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <BsLinkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/ruth_snowww?igsh=MWhtOWxjZHFkandmcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-pink-500 hover:scale-110 transition-all duration-300"
              >
                <BsInstagram size={20} />
              </a>

              <a
                href="https://github.com/RuthNyankum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-gray-600 hover:scale-110 transition-all duration-300"
              >
                <BsGithub size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleViewWork}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-3 rounded-full text-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>

              <button
                onClick={handleGetInTouch}
                className="border-2 border-cyan-400 px-8 py-3 rounded-full text-lg font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-75 blur-lg animate-pulse"></div>

              {/* Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
                <img
                  src={img}
                  alt="Ruth Nyankum - Developer & Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-teal-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-32 w-2 h-2 bg-cyan-300 rounded-full opacity-50 animate-ping"></div>
      <div
        className="absolute bottom-1/4 left-20 w-2 h-2 bg-teal-300 rounded-full opacity-60 animate-bounce"
        style={{ animationDelay: '1s' }}
      ></div>
    </div>
  );
}

export default Home;
