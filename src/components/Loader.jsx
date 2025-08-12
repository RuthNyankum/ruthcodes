import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-dark z-50 flex items-center justify-center font-inter">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Main Loader Animation */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <div className="w-24 h-24 border-4 border-slate-700 rounded-full animate-spin">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
          </div>

          {/* Inner pulsing circle */}
          <div className="absolute inset-2 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-inter">
            Loading Portfolio
          </h2>

          {/* Animated dots */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce animation-delay-400"></div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 mx-auto mt-6">
            <div className="w-full bg-slate-700 rounded-full h-1">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-1 rounded-full animate-loader-progress"></div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mt-8">
          <p className="text-slate-400 text-sm font-jetbrains tracking-wider">
            RUTHCODEZ
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes loader-progress {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-loader-progress {
          animation: loader-progress 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Loader;
