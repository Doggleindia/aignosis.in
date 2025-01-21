import React, { useState, useEffect } from "react";

const Newnavbar = () => {
  const slides = [
    "Offer 1: Get 50% off on all items!",
    "Offer 2: Free shipping on orders over $50!",
    "Offer 3: Buy 1 Get 1 Free on select items!",
    "Offer 4: Exclusive deals for members only!",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-[#1A0C25] text-white text-center fixed top-0 w-full z-50 h-8 flex items-center">
      <div
        className="transition-transform duration-500 ease-in-out w-full"
        key={currentSlide}
      >
        <p className="font-bold text-sm md:text-base">{slides[currentSlide]}</p>
      </div>
    </div>
  );
};

export default Newnavbar;
