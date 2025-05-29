import React, { useState, useEffect, useRef } from 'react';
import star from '../star.png'; // Import the star image

const Newnavbar = () => {
  const slides = [
    'GET FLAT 50% OFF THIS WEEK - USE CODE SHARK50 AT CHECKOUT ',
    'GET FLAT 50% OFF THIS WEEK - USE CODE SHARK50 AT CHECKOUT ',
    'GET FLAT 50% OFF THIS WEEK - USE CODE SHARK50 AT CHECKOUT ',
    'GET FLAT 50% OFF THIS WEEK - USE CODE SHARK50 AT CHECKOUT ',
  ];

  const [slideWidth, setSlideWidth] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const calculateSlideWidth = () => {
      if (navbarRef.current) {
        const navbarWidth = navbarRef.current.offsetWidth;
        const numSlides = Math.floor(navbarWidth / 300); // Adjust the width of each slide
        setSlideWidth(navbarWidth / numSlides);
      }
    };

    calculateSlideWidth();
    window.addEventListener('resize', calculateSlideWidth);

    return () => window.removeEventListener('resize', calculateSlideWidth);
  }, []);

  return (
    <div
      ref={navbarRef}
      className="fixed top-0 z-[100] flex h-8 w-full items-center overflow-hidden bg-[#1A0C25]/60 text-center font-montserrat text-white backdrop-blur-md max-sm:h-6"
      style={{
        backgroundImage: `url(${'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/newimage.png'})`, // Set the background image
        backgroundSize: 'cover', // Ensure the background image covers the entire div
        backgroundPosition: 'center', // Center the image in the div
      }}
    >
      <div
        className="animate-scroll flex" // Apply animation here
        style={{
          transform: `translateX(0)`, // Keep it at 0 to avoid resetting
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="mr-4 flex flex-shrink-0 items-center justify-center text-sm font-semibold md:text-base" // Added margin-right for space between slides
          >
            <img src={star} alt="star" className="mr-2 h-4 w-4" /> {/* Star icon in front of the text */}
            <span>
              GET FLAT <span className="text-[#B740A1]">50%</span> OFF THIS WEEK - USE CODE SHARK50 AT CHECKOUT
            </span>
          </div>
        ))}
        {/* Add a duplicate of the first slide at the end */}
        <div className="mr-4 flex flex-shrink-0 items-center justify-center text-sm font-bold md:text-base">
          <img src={star} alt="star" className="mr-2 h-4 w-4" /> {/* Star icon in front of the text */}
          {slides[0]}
        </div>
      </div>

      {/* Add the CSS for continuous scrolling animation */}
      <style>{`
        @keyframes scroll-text {
          0% {
            transform: translateX(100%); /* Start from the right side */
          }
          50% {
            transform: translateX(0); /* In the middle of the scroll */
          }
          100% {
            transform: translateX(-100%); /* Move to the left side */
          }
        }

        .animate-scroll {
          animation: scroll-text 30s linear infinite; /* Continuous scrolling */
        }
      `}</style>
    </div>
  );
};

export default Newnavbar;
