import React from 'react';

const ContactForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50">
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-white font-medium mb-3 font-inter">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            required
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-4 text-white placeholder-slate-400 font-jetbrains focus:outline-none focus:border-primary focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-white font-medium mb-3 font-inter">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@gmail.com"
            required
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-4 text-white placeholder-slate-400 font-jetbrains focus:outline-none focus:border-primary focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
          />
        </div>

        {/* Project Type Field */}
        <div>
          <label className="block text-white font-medium mb-3 font-inter">
            Project Type
          </label>
          <input
            type="text"
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            placeholder="eg: design, develop etc"
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-4 text-white placeholder-slate-400 font-jetbrains focus:outline-none focus:border-primary focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-white font-medium mb-3 font-inter">
            Message *
          </label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell me about your project"
            required
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-4 text-white placeholder-slate-400 font-jetbrains focus:outline-none focus:border-primary focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full font-semibold py-4 rounded-xl transition-all duration-300 font-jetbrains ${
            isSubmitting
              ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
              : 'bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
