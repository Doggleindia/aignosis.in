import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [maxVisiblePages, setMaxVisiblePages] = useState(10);

  // Adjust maxVisiblePages based on screen size
  useEffect(() => {
    const updateMaxVisiblePages = () => {
      setMaxVisiblePages(window.innerWidth <= 640 ? 6 : 10); // 640px corresponds to `max-sm` in Tailwind
    };

    updateMaxVisiblePages(); // Initialize on mount
    window.addEventListener('resize', updateMaxVisiblePages); // Listen to resize events
    return () => window.removeEventListener('resize', updateMaxVisiblePages); // Cleanup
  }, []);

  const halfRange = Math.floor(maxVisiblePages / 2);

  // Determine the range of pages to display
  let startPage = Math.max(1, currentPage - halfRange);
  let endPage = Math.min(totalPages, currentPage + halfRange);

  // Adjust if near the beginning or end of pages
  if (currentPage <= halfRange) {
    endPage = Math.min(totalPages, maxVisiblePages);
  }
  if (currentPage + halfRange > totalPages) {
    startPage = Math.max(1, totalPages - maxVisiblePages + 1);
  }

  // Generate the range of page numbers to display
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="mt-4 flex items-center justify-center space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center rounded px-3 py-1 ${
          currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'bg-[#FFCADF21] text-white hover:bg-purple-600'
        }`}
      >
        <FaChevronLeft />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded px-3 py-1 ${
            currentPage === page ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white hover:bg-purple-600'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center rounded px-3 py-1 ${
          currentPage === totalPages
            ? 'cursor-not-allowed text-gray-400'
            : 'bg-[#FFCADF21] text-white hover:bg-purple-600'
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
