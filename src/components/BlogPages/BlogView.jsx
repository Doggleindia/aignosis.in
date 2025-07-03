import React from 'react';

const BlogView = () => {
  return (
    <div className="bg-[#1A0C25]">
      <div className="min-h-screen bg-[#1A0C25] p-6 text-white">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-4 text-sm text-gray-400">
            <a href="/" className="hover:underline">
              Home
            </a>{' '}
            / Post Title
          </nav>

          {/* Title and Meta Information */}
          <header className="mb-6">
            <h1 className="text-4xl font-bold text-white">Post Title</h1>
            <div className="mt-2 text-gray-400">
              <span>Author</span> <span className="text-purple-500">|</span> <span>Category</span>{' '}
              <span className="text-purple-500">|</span> <span>a min ago</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Image and Text Content */}
            <div className="flex-1">
              <img src="https://via.placeholder.com/800x400" alt="Post" className="mb-6 rounded-lg" />
              <p className="mb-4 leading-relaxed text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet,
                iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum at neque id ex semper varius a
                sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra
                urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis
                enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo.
              </p>
              <p className="mb-4 leading-relaxed text-gray-300">
                Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.
              </p>
            </div>

            {/* Table of Contents */}
            <aside className="w-full flex-shrink-0 lg:w-64">
              <div className="rounded-lg bg-gray-800 p-4">
                <h2 className="mb-4 text-xl font-semibold">Table of Contents</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="cursor-pointer hover:text-purple-400">Lorem ipsum</li>
                  <li className="cursor-pointer hover:text-purple-400">Lorem ipsum</li>
                  <li className="cursor-pointer hover:text-purple-400">Lorem ipsum</li>
                  <li className="cursor-pointer hover:text-purple-400">Lorem ipsum</li>
                  <li className="cursor-pointer hover:text-purple-400">Lorem ipsum</li>
                </ul>
              </div>
            </aside>
          </div>

          {/* Additional Content */}
          <div className="mt-6 text-gray-300">
            <p className="mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet,
              iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum at neque id ex semper varius a sit
              amet metus. Vivamus congue dolor eget aliquam hendrerit.
            </p>
            <p className="mb-4 leading-relaxed">
              Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu
              scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus
              velit eleifend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
