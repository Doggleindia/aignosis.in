import React from 'react';

const Reviews = () => {
  return (
    <div className="flex flex-col items-center bg-[#1A0C25] px-4 py-16 text-white max-sm:h-[180vw]">
      {/* Header Section */}
      <div className="mb-10 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="h-1 w-20 rounded-full bg-gradient-to-l from-pink-500 to-transparent"></div>
          <span className="font-semibold tracking-widest text-white">Reviews</span>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-transparent"></div>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-[Montserrat]">Hear from Our Team</h1>
        <p className="text-sm md:text-base">
          At Aignosis, our team members are the heart of our mission to revolutionize autism detection <br /> through
          AI. Here’s what they have to say about their experiences:
        </p>
      </div>

      {/* Testimonial Section */}
      <div
        className="relative flex w-full max-w-xl flex-col items-center gap-6 rounded-lg p-6 shadow-lg"
        style={{
          background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
        }}
      >
        {/* Navigation Buttons */}
        <button className="hover:cursor absolute left-[-3rem] top-1/2 flex hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#811F67] text-lg text-white transition md:flex">
          &#8592;
        </button>
        <button className="hover:cursor absolute right-[-3rem] top-1/2 flex hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#811F67] text-lg text-white transition md:flex">
          &#8594;
        </button>

        {/* Testimonial Content */}
        <p className="text-center text-sm italic leading-relaxed md:text-base">
          "Working at Aignosis has been an incredibly fulfilling journey. Every day, I get to contribute to a platform
          that makes a real difference in people’s lives. The collaborative environment and the supportive team make it
          a place where I can grow both professionally and personally."
        </p>

        {/* Pink Divider */}
        <div className="h-px w-full bg-pink-400"></div>

        {/* Name */}
        <p className="w-full text-left text-sm font-semibold md:text-base">– Rajesh K., AI Engineer</p>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-[10vw] w-full text-center font-[Raleway]">
        <p
          className="rounded-lg p-6 font-[Raleway] text-xl max-sm:text-[3vw]"
          style={{
            background:
              'linear-gradient(90deg, rgba(117, 35, 137, 0.5) 0%, #1E0923 50%, rgba(117, 35, 137, 0.04) 100%), linear-gradient(270deg, rgba(117, 35, 137, 0.5) 0%, #1E0923 50%, rgba(117, 35, 137, 0.04) 100%)',
          }}
        >
          Join us and become part of a team that’s not just building a platform but shaping the future of autism care.
          Your work here truly matters.
        </p>
      </div>
    </div>
  );
};

export default Reviews;
