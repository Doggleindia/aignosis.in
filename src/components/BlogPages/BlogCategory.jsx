import React from 'react';
import b1 from './baby1.png';
import b2 from './baby2.png';
import b3 from './baby3.png';

const BlogCategory = () => {
  return (
    <section className="mt-6 min-h-screen px-[4vw] lg:px-[12vw]">
      {/* Mobile View */}
      <div className="lg:hidden">
        <div className="rounded-lg border border-[#9C00AD4D] bg-[#2A183885] p-4">
          {/* Top Section */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Category</h2>
            <a href="#" className="text-lg text-purple-400 underline">
              More-&gt;
            </a>
          </div>

          {/* Cards for Mobile */}
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border-2 border-[#9C00AD4D] bg-transparent p-4 text-black">
              <img src={b1} alt="Inclusive Workplace" className="h-[40vw] w-full rounded-md object-cover" />
              <h3 className="mt-4 text-lg font-bold text-white">
                Autism in the Workplace: How to Create an Inclusive Environment
              </h3>
              <span className="mt-2 text-lg font-semibold text-pink-600">Divya Gowda</span>
              <span className="text-white"> &bull; a min ago</span>
              <p className="mt-2 text-white">
                Discuss ways employers and colleagues can foster a supportive, inclusive work environment for autistic
                individuals.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#9C00AD4D] bg-transparent p-4 text-black">
              <img src={b2} alt="Resources for Parents" className="h-[40vw] w-full rounded-md object-cover" />
              <h3 className="mt-4 text-lg font-bold text-white">Top Resources for Parents of Autistic Children</h3>
              <span className="mt-2 text-lg font-semibold text-pink-600">Nitya</span>
              <span className="text-white"> &bull; a min ago</span>
              <p className="mt-2 text-white">
                Compile a list of resources, from support groups and educational programs to online communities and
                helpful books.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#9C00AD4D] bg-transparent p-4 text-black">
              <img src={b3} alt="Managing Sensory Overload" className="h-[40vw] w-full rounded-md object-cover" />
              <h3 className="mt-4 text-lg font-bold text-white">Tips for Managing Sensory Overload</h3>
              <span className="mt-2 text-lg font-semibold text-pink-600">Ganesh Patil</span>
              <span className="text-white"> &bull; a min ago</span>
              <p className="mt-2 text-white">
                Explore how sensory processing issues affect autistic people and share strategies to manage sensory
                overload.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="min-h-screen rounded-lg border border-[#9C00AD4D] bg-[#2A183885] p-6">
          {/* Top Section */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Category</h2>
            <a href="#" className="text-lg text-purple-400 underline">
              More-&gt;
            </a>
          </div>

          {/* Cards for Desktop */}
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="mb-6 flex-1 lg:mb-0">
              <div className="rounded-lg border-2 border-[#9C00AD4D] bg-transparent p-4 text-black">
                <img src={b1} alt="Inclusive Workplace" className="h-[33vw] w-full rounded-md object-cover" />
                <h3 className="mt-4 text-lg font-bold text-white">
                  Autism in the Workplace: How to Create an Inclusive Environment
                </h3>
                <span className="mt-2 text-lg font-semibold text-pink-600">Divya Gowda</span>
                <span className="text-white"> &bull; a min ago</span>
                <p className="mt-2 text-white">
                  Discuss ways employers and colleagues can foster a supportive, inclusive work environment for autistic
                  individuals.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <div className="rounded-lg border-2 border-[#9C00AD4D] bg-transparent p-4 text-black">
                <img src={b2} alt="Resources for Parents" className="h-[14vw] w-full rounded-md object-cover" />
                <h3 className="text-md mt-4 font-bold text-white">Top Resources for Parents of Autistic Children</h3>
                <span className="mt-2 text-lg font-semibold text-pink-600">Nitya</span>
                <span className="text-white"> &bull; a min ago</span>
                <p className="mt-2 text-white">
                  Compile a list of resources for parents navigating the autism journey.
                </p>
              </div>
              <div className="rounded-lg border-2 border-[#9C00AD4D] bg-transparent p-4 text-black">
                <img src={b3} alt="Managing Sensory Overload" className="h-[14vw] w-full rounded-md object-cover" />
                <h3 className="text-md mt-4 font-bold text-white">Tips for Managing Sensory Overload</h3>
                <span className="mt-2 text-lg font-semibold text-pink-600">Ganesh Patil</span>
                <span className="text-white"> &bull; a min ago</span>
                <p className="mt-2 text-white">Explore how sensory processing issues affect autistic people.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;
