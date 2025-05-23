import React, { useState } from 'react';
import img1 from '../../assets/review.jpg';
import img2 from '../../assets/image (29).jpg';
import img3 from '../../assets/image (31).jpg';

import { Link } from 'react-router-dom';

const CustomerLove = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: '“I was skeptical at first, but Aignosis made the entire screening process simple and stress-free for my son. The detailed report and therapy recommendations were exactly what we needed.”',
      rating: 4.9,
      name: 'Priya Khanna',
      profession: 'Mother',
      image: img1, // Replace with actual image URLs
    },
    {
      text: 'Aignosis not only gave us clarity about our child’s behavior but also empowered us with steps to improve his focus and social interaction. This is such a useful tool for parents!',
      rating: 5.0,
      name: 'Akash Verma',
      profession: 'Father',
      image: img2, // Replace with actual image URLs
    },
    {
      text: '“The screening was so easy to do at home. The detailed report provided valuable insights about my daughter’s developmental patterns. Highly recommend it to every parent.”',
      rating: 4.9,
      name: 'Sneha Gupta',
      profession: 'Mother',
      image: img3,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  const Divider = ({ title }) => (
    <div className="mb-3 mt-10 flex flex-row items-center justify-center space-x-4">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
      <span className="text-[18px] font-medium text-[#F1C6FE] max-sm:text-sm">{title}</span>
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
    </div>
  );

  return (
    <>
      <div className="hidden px-8 pt-8 md:block">
        {/* Divider Section */}
        <Divider title="Advantages" />
        <h5 className="2xl:text-5xl w-full text-center font-montserrat text-2xl font-semibold tracking-tight text-[#F6E8FB] max-sm:text-center md:text-3xl">
          Customer Love
        </h5>
        {/* Carousel Section */}
        <div className="mt-8 flex items-center justify-center md:mt-12">
          {/* Left Arrow */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#711D64] text-white md:h-10 md:w-10"
            onClick={handlePrev}
          >
            &lt;
          </button>

          {/* Card */}
          <div
            className="mx-2 flex h-auto w-[90%] flex-col rounded-3xl p-6 text-white md:mx-4 md:h-[30vw] md:w-[80%] md:flex-row md:p-8"
            style={{
              background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
            }}
          >
            {/* Text Section */}
            <div className="flex flex-1 flex-col justify-between pr-0 md:pr-7">
              <p className="text-sm md:text-base">{currentTestimonial.text}</p>
              <div className="mt-4 flex h-[2px] w-full items-center justify-center bg-[#811F67] md:mt-[10vw] md:h-[4px]"></div>
              <div className="mt-4 flex flex-col items-center justify-between px-0 md:mt-0 md:flex-row md:px-10">
                <div className="text-center md:text-left">
                  <span className="text-sm text-[#CACED9]">{currentTestimonial.rating} Ratings</span>
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                </div>
                <div className="mt-2 text-center md:mt-0 md:text-right">
                  <span className="text-sm text-white">
                    {currentTestimonial.name}
                    <span className="mt-2 block text-xs text-[#CACED9]">{currentTestimonial.profession}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-4 flex flex-1 items-center justify-center md:mt-0">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="h-32 w-full rounded-lg object-cover md:h-full"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#711D64] text-white md:h-10 md:w-10"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="block px-4 pt-6 md:hidden md:px-8 md:pt-8">
        {/* Divider Section */}
        <Divider title="Advantages" />
        <h5 className="w-full text-center font-montserrat text-xl font-semibold tracking-tight text-[#F6E8FB] max-sm:text-center md:text-3xl lg:text-5xl">
          Customer Love
        </h5>
        {/* Carousel Section */}
        <div className="mt-8 flex items-center justify-center md:mt-12">
          {/* Left Arrow */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#711D64] text-white md:h-10 md:w-10"
            onClick={handlePrev}
          >
            &lt;
          </button>

          {/* Card */}
          <div
            className="mx-2 flex h-auto w-[90%] flex-col rounded-3xl p-6 text-white md:mx-4 md:h-[30vw] md:w-[80%] md:flex-row md:p-8"
            style={{
              background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
            }}
          >
            {/* Text Section */}
            <div className="flex flex-1 flex-col justify-between pr-0 md:pr-7">
              <p className="text-sm md:text-base">{currentTestimonial.text}</p>
              <div className="mt-4 flex h-[2px] w-full items-center justify-center bg-[#811F67] md:mt-[10vw] md:h-[4px]"></div>
              <div className="mt-4 flex flex-col items-center justify-between px-0 md:mt-0 md:flex-row md:px-10">
                <div className="text-center md:text-left">
                  <span className="text-sm text-[#CACED9]">{currentTestimonial.rating} Ratings</span>
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                </div>
                <div className="mt-2 text-center md:mt-0 md:text-right">
                  <span className="text-sm text-white">
                    {currentTestimonial.name}
                    <span className="mt-2 block text-xs text-[#CACED9]">{currentTestimonial.profession}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-4 flex flex-1 items-center justify-center md:mt-0">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="h-38 w-full rounded-lg object-cover md:h-full"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#711D64] text-white md:h-10 md:w-10"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="my-[5vw] flex h-[300px] flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#241E22] to-[#43284C] font-manrope text-white">
        <p className="font-montserrat text-2xl font-semibold max-sm:text-lg">We Value Your Feedback!</p>
        <p className="max-w-[60%] px-4 text-center text-sm">
          Your experience matters to us. Share your thoughts and help us improve!
        </p>
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
            <Link
              to="/"
              onClick={() => handleLinkClick('/')}
              className="2xl:text-3xl relative z-10 font-semibold tracking-wide text-white md:text-xl"
            >
              Ai.gnosis
            </Link>
          </div>
          <p className="mt-2 text-lg font-semibold text-yellow-400">4.9 ⭐⭐⭐⭐⭐</p>
          <p className="mt-2 text-sm">459 Reviews</p>
        </div>
        <Link
          to="/feedback"
          className="rounded-full border border-[#9C00AD] px-6 py-2 text-sm text-white transition hover:bg-purple-500 hover:text-white"
        >
          Leave a Review
        </Link>
      </div>
    </>
  );
};

export default CustomerLove;
