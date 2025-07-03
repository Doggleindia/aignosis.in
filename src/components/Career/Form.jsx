import React from 'react';

const Form = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a0c25] p-6">
      <div className="w-full max-w-2xl rounded-lg bg-[#1a0c25] text-white">
        <div className="mb-4 flex items-center gap-4 text-left">
          <div className="h-1 w-20 rounded-full bg-gradient-to-l from-pink-500 to-transparent"></div>
          <span className="font-semibold tracking-widest text-white">Jobs</span>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-transparent"></div>
        </div>
        <h1 className="mb-4 text-left text-3xl font-bold">Hiring at Aignosis</h1>
        <p className="mb-8 text-left text-sm text-gray-300">
          At Aignosis, we are dedicated to creating a supportive and dynamic environment where you can excel both <br />{' '}
          personally and professionally.{' '}
        </p>

        <p className="text-sm">
          {' '}
          Join our team and become part of a community that values innovation, well-being, and your success. Together,
          we're making a lasting impact in the world of autism care through cutting-edge AI solutions.
        </p>

        <form className="mt-[2vw] space-y-6">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full rounded-lg border border-gray-500 bg-[#2b1838] p-3 text-white focus:outline-none focus:ring focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Mobile*"
              className="w-full rounded-lg border border-gray-500 bg-[#2b1838] p-3 text-white focus:outline-none focus:ring focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full rounded-lg border border-gray-500 bg-[#2b1838] p-3 text-white focus:outline-none focus:ring focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Role*"
              className="w-full rounded-lg border border-gray-500 bg-[#2b1838] p-3 text-white focus:outline-none focus:ring focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Experience*"
              className="w-full rounded-lg border border-gray-500 bg-[#2b1838] p-3 text-white focus:outline-none focus:ring focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Location*"
              className="w-full rounded-lg border border-gray-500 bg-[#2b1838] p-3 text-white focus:outline-none focus:ring focus:ring-pink-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full rounded-lg border border-gray-500 bg-[#2b1838] p-3 text-white focus:outline-none focus:ring focus:ring-pink-500"
            ></textarea>
          </div>
          <div className="space-y-4">
            <input
              type="file"
              className="w-full rounded-lg border border-gray-500 bg-[#2b1838] p-3 text-gray-300 focus:outline-none"
            />
            <p className="text-white">Note: Size Less Than 2MB</p>
            <button
              type="submit"
              className="rounded-full border border-pink-600 bg-transparent px-6 py-3 text-white transition duration-300 hover:bg-pink-500 hover:text-white"
            >
              Join now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
