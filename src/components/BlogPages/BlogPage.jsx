import React, { useState, lazy, Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blogimg1 from '../../assets/blogimg1.png';
import aboutContent from '../aboutus/AboutContent.js';
import blog from './BlogData';
import SEO from '../config/Seo.jsx';
import Newnavbar from '../Newnavbar';

// Lazy-loaded components
const BlogSidebar = lazy(() => import('./BlogSidebar'));
const Header = lazy(() => import('../Header'));
const BlogCard = lazy(() => import('./BlogCard'));
const Pagination = lazy(() => import('./Pagination'));
const BlogCategory = lazy(() => import('./BlogCategory'));
const BlogFooter = lazy(() => import('./BlogFooter'));

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const [searchInput, setSearchInput] = useState(''); // State for search input
  const [filteredBlogs, setFilteredBlogs] = useState(aboutContent.blogs);

  const firstblog = aboutContent.blogs.find((b) => b.id === 'ai-vs-traditional-autism-diagnosis');
  console.log(firstblog, 'blogData');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchInput(query);
    const filtered = aboutContent.blogs.filter((post) => post.title.toLowerCase().includes(query));
    setFilteredBlogs(filtered);
  };

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <>
      {/*<Newnavbar />*/}
      <SEO
        canonicalUrl={'https://aignosis.in/blog'}
        metaDescription={
          'Stay updated with the latest insights on autism, AI-powered assessments, and special education. Explore expert articles on Aignosis Blog for valuable knowledge.'
        }
        pageTitle={'Aignosis Blog | Insights on Autism, AI, and Special Education'}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Header />
        </div>
        <div className="min-h-screen bg-[#1A0C25] font-raleway">
          <div className="flex gap-2 bg-[#1A0C25] p-6 max-sm:flex-col">
            {/* Sidebar */}
            <div className="mt-[4vw] md:w-1/4">
              <BlogSidebar blogData={blog} />
            </div>

            {/* Main Content */}
            <div className="mt-[8vw] w-full md:w-3/4">
              {/* Search Bar */}
              <div className="mx-auto mb-6 rounded-lg border border-[#9C00AD66] bg-[#1A0C25] p-4 md:max-w-4xl">
                <input
                  type="text"
                  value={searchInput}
                  onChange={handleSearchChange}
                  placeholder=" Search blog posts"
                  className="w-full rounded-lg border border-[#9C00AD66] bg-[#1A0C25] p-3 text-center text-[#F6E8FB] focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              {searchInput && (
                <div className="mb-4 text-center text-[#F6E8FB]">
                  <p className="text-sm">
                    Showing results for: <span className="font-bold text-purple-400">{searchInput}</span>
                  </p>
                </div>
              )}

              {/* Section */}
              {!searchInput && (
                <section className="mx-auto rounded-lg border border-[#9C00AD66] bg-[#1A0C25] p-8 md:max-w-4xl">
                  {/* Section Header */}
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-[#F6E8FB]">Featured Posts</h2>
                    <a
                      href="/blog/early-signs-of-autism-in-children"
                      className="flex items-center text-sm text-[#F6E8FB] hover:text-purple-400"
                    >
                      More <span className="ml-1">→</span>
                    </a>
                  </div>

                  {/* Featured Post */}
                  <div
                    className="rounded-lg border border-[#9C00AD4D] bg-[#2A183885] p-6 text-white"
                    onClick={() => handleCardClick(firstblog.id)}
                  >
                    <img
                      src={firstblog.blogimg}
                      alt="Understanding Autism"
                      className="mb-4 w-full rounded-lg object-cover"
                    />
                    <h3 className="mb-2 text-lg font-semibold text-[#F6E8FB]">{firstblog.title}</h3>
                    <p className="mb-4 text-sm text-[#B740A1]">
                      {firstblog.author} <span className="text-gray-400">• {firstblog.time}</span>
                    </p>
                    <p className="text-sm text-[#F6E8FB]">{firstblog.metaDescription}</p>
                  </div>
                </section>
              )}

              <div className="mx-auto mt-[8vw] grid max-w-4xl grid-cols-1 gap-4 rounded-lg sm:grid-cols-2 md:mt-[2vw] lg:grid-cols-2">
                {filteredBlogs.map((cardData, index) => (
                  <BlogCard
                    handleCardClick={handleCardClick}
                    cardData={cardData}
                    key={index} // Unique key for each item
                    image={cardData.blogimg}
                    title={cardData.title}
                    author={cardData.author}
                    time={cardData.time}
                    description={cardData.metaDescription}
                  />
                ))}
              </div>
            </div>
          </div>

          <BlogFooter />
        </div>
      </Suspense>
    </>
  );
};

export default BlogPage;
