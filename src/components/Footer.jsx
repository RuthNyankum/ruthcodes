import React from 'react';
import {
  BsGithub,
  BsHeart,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from 'react-icons/bs';
// import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-darkGray text-white py-8 px-4 lg:px-8 font-inter">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Left Side - Branding */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold font-inter text-primary mb-2 ">
              Serendipity
            </h1>
            <p className="text-slate-300 flex items-center justify-center md:justify-start gap-1 ">
              Designed & Built with
              <BsHeart className="w-4 h-4 text-red-500 fill-red-500 mx-1" />
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://x.com/ruth_nanarain"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-slate-700 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              aria-label="Twitter"
            >
              <BsTwitterX size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/ruthnyankum/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-slate-700 hover:text-blue-400 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={18} />
            </a>

            <a
              href="https://www.instagram.com/ruth_snowww?igsh=MWhtOWxjZHFkandmcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-slate-700 hover:text-pink-400 hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <BsInstagram size={18} />
            </a>

            <a
              href="https://github.com/RuthNyankum"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-slate-700 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <BsGithub size={18} />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-slate-700 mb-4" />

        {/* Copyright */}
        <div className="text-center font-jetbrains">
          <p className="text-slate-400 text-sm">
            © 2025 Serendipity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
