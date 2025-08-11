import React, { useState } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
} from 'react-icons/fi';
import { portfolioItems } from '../components/portfolioData';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Dynamic image import function
  const importImage = (imagePath) => {
    try {
      // Extract just the filename from the path
      const filename = imagePath.split('/').pop();
      return new URL(`../assets/images/${filename}`, import.meta.url).href;
    } catch (error) {
      console.error('Error loading image:', error);
      return null;
    }
  };

  const filterCategories = ['All', 'Design', 'Development'];

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === activeFilter);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-dark py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-8 font-inter">
            WORK
          </h1>

          {/* Filter Tabs - Mobile Responsive */}
          <div className="inline-flex bg-darkGray rounded-full p-1 border border-slate-700 w-full max-w-sm sm:max-w-none sm:w-auto">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-medium font-inter text-sm sm:text-base transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentItems.map((item) => {
            // Get the dynamic image URL
            const imageUrl = importImage(item.image);

            return (
              <div
                key={item.id}
                className="group bg-darkGray rounded-2xl overflow-hidden border border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                  {imageUrl ? (
                    <div className="aspect-video">
                      <img
                        src={imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div
                        className="aspect-video bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center"
                        style={{ display: 'none' }}
                      >
                        <div className="w-20 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8 bg-white/20 rounded"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Default placeholder when no image
                    <div className="aspect-video bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      <div className="w-20 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40">
                    <div className="flex gap-3">
                      {item.liveLink && (
                        <a
                          href={item.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
                          title="View Live Project"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )}
                      {item.githubLink && (
                        <a
                          href={item.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-600 hover:scale-110 transition-all duration-300"
                          title="View Source Code"
                        >
                          <FiGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-primary text-sm font-medium bg-cyan-400/10 px-3 py-1 rounded-full font-inter">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors font-inter">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 font-jetbrains">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded-md hover:bg-slate-600 transition-colors font-jetbrains"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Links */}
                  <div className="flex gap-3 pt-3 border-t border-slate-700">
                    {item.liveLink && (
                      <a
                        href={item.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        <FiExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    {item.githubLink && (
                      <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
                      >
                        <FiGithub size={14} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all font-jetbrains"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-1">
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-medium text-sm sm:text-base transition-all ${
                      currentPage === page
                        ? 'bg-cyan-500 text-white shadow-lg'
                        : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Results Info */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-xs sm:text-sm">
            Showing {startIndex + 1}-
            {Math.min(startIndex + itemsPerPage, filteredItems.length)} of{' '}
            {filteredItems.length} projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
