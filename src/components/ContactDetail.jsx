import React from 'react';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineDownload,
} from 'react-icons/hi';

const ContactDetail = ({ handleDownload }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-inter">
          Get In Touch
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-8 font-jetbrains">
          Ready to bring your ideas to life? Whether you need stunning designs,
          powerful development, or both, I'm here to help create something
          amazing together.
        </p>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        {/* Email */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <HiOutlineMail className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1 font-inter">
                Email
              </h3>
              <p className="text-slate-300 font-jetbrains">
                nana.nyankum99@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <HiOutlinePhone className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1 font-inter">
                Phone
              </h3>
              <p className="text-slate-300 font-jetbrains">+233 541 009 905</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-full font-jetbrains transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 group"
      >
        <HiOutlineDownload className="w-5 h-5 group-hover:animate-bounce " />
        Download Resume
      </button>
    </div>
  );
};

export default ContactDetail;
