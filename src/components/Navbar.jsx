import React, { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';

function Navbar({
  navItems,
  activeSection,
  scrollToSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) {
  const [hoveredNav, setHoveredNav] = useState(null);

  return (
    <>
      {/* Desktop Navigation - Left Side Floating */}
      <nav className="hidden lg:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex-col space-y-4 font-inter">
        {navItems.map((item) => (
          <div key={item.id} className="relative group">
            <button
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoveredNav(item.id)}
              onMouseLeave={() => setHoveredNav(null)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-slate-200 text-slate-600 hover:bg-primary hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
            </button>

            {/* Tooltip */}
            {hoveredNav === item.id && (
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-slate-900"></div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-6 right-6 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white"
        >
          {isMobileMenuOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <HiBars3 className="w-6 h-6" />
          )}
        </button> 

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-slate-900/95 z-40 flex items-center justify-center font-inter">
            <div className="text-center space-y-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-2xl font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
