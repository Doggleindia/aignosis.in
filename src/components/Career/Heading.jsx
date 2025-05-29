import React from 'react';

const Heading = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#1A0C25]">
      {/* Main Container */}
      <div className="flex w-[80%] max-w-7xl flex-row items-center justify-evenly max-sm:flex-col">
        {/* Left Section: Text */}
        <div className="max-w-xl text-white max-sm:flex-row">
          <h1 className="mb-6 font-[Montserrat] text-4xl font-bold leading-tight max-sm:flex-row max-sm:text-2xl">
            Join a Company Where <br /> Your Work Transforms Lives
          </h1>
          <p className="mb-6 font-[Raleway] text-lg leading-relaxed">
            At Aignosis, we are dedicated to harnessing the power of AI to revolutionize autism detection and support.
            Our mission is to provide early, accurate insights, improving the lives of countless individuals and
            families worldwide. Be a part of a team that's driving meaningful change and making a profound impact on
            communities across the globe.
          </p>
          <button className="rounded-full border border-pink-600 bg-transparent px-6 py-3 text-white transition duration-300 hover:bg-pink-500 hover:text-white">
            Join now
          </button>
        </div>

        <div className="flex flex-col items-center justify-center max-sm:mt-[25vw] max-sm:h-[0vw]">
          <div className="flex w-full max-w-md flex-wrap justify-center gap-6">
            <img
              src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/c1.png"
              alt="img1"
              className="h-20 w-20 rounded object-cover shadow-md max-sm:h-14 max-sm:w-14"
            />
            <img
              src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/c2.png"
              alt="img2"
              className="h-20 w-20 rounded object-cover shadow-md max-sm:h-14 max-sm:w-14"
            />
            <img
              src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/c3.png"
              alt="img3"
              className="h-20 w-20 rounded object-cover shadow-md max-sm:h-14 max-sm:w-14"
            />
            <img
              src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/c4.png"
              alt="img4"
              className="h-20 w-20 rounded object-cover shadow-md max-sm:h-14 max-sm:w-14"
            />

            <img
              src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/c5.png"
              alt="img5"
              className="h-20 w-20 rounded object-cover shadow-md max-sm:h-14 max-sm:w-14"
            />
            <img
              src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/c6.png"
              alt="img6"
              className="h-20 w-20 rounded object-cover shadow-md max-sm:h-14 max-sm:w-14"
            />
            <img
              src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/c7.png"
              alt="img7"
              className="h-20 w-20 rounded object-cover shadow-md max-sm:h-14 max-sm:w-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
