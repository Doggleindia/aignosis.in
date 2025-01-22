import React, { useState, useEffect } from "react";

const Newnavbar = () => {
  const slides = [
    "Offer 1: Get 50% off on all items!",
    "Offer 2: Free shipping on orders over $50!",
    "Offer 3: Buy 1 Get 1 Free on select items!",
    "Offer 4: Exclusive deals for members only!",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === slides.length) {
      // Disable animation temporarily for the reset
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentSlide(0);
      }, 500); // Wait for the slide transition before resetting

      // Re-enable animation after reset
      setTimeout(() => {
        setIsAnimating(true);
      }, 600); // Slight delay to avoid visual glitches
    }
  }, [currentSlide, slides.length]);

  return (
    <div className="bg-[#1A0C25]/60 backdrop-blur-md font-montserrat text-white text-center fixed top-0 w-full z-50 h-14 flex items-center overflow-hidden">
      <div
        className={`flex ${
          isAnimating ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${(currentSlide % (slides.length + 1)) * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 text-sm md:text-base font-semibold flex justify-center items-center"
          >
            {slide}
          </div>
        ))}
        {/* Add a duplicate of the first slide at the end */}
        <div className="w-full flex-shrink-0 text-sm md:text-base font-bold flex justify-center items-center">
          {slides[0]}
        </div>
      </div>
    </div>
  );
};

export default Newnavbar;
