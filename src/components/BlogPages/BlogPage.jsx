import React, { useState } from "react";
import BlogSidebar from "./BlogSidebar";
import Header from "../Header";
import blogimg1 from "../../assets/blogimg1.png";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import { Link, useNavigate } from "react-router-dom";
import BlogFooter from "./BlogFooter";
import aboutContent from "../aboutus/AboutContent.js";
import blog from "./BlogData";
import BlogCategory from "./BlogCategory";
const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const cardData = {
    image: blogimg1, // Replace with actual image URL
    title: "Understanding Autism: A Guide for Family and Friends",
    author: "Vinay",
    time: "a min ago",
    category: "Category",
    description:
      "Offer insights into what autism is and provide practical advice on how loved ones can offer support, understand communication differences, and build stronger relationships with autistic individuals.",
  };
  const firstblog = aboutContent.blogs.find((b) => b.id === 1);
  console.log(firstblog, "blogData");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="bg-[#1A0C25] min-h-screen font-raleway  ">
        <div className="flex max-sm:flex-col gap-2 bg-[#1A0C25]  p-6">
          <div className="  md:w-1/4 mt-[4vw] ">
            <BlogSidebar blogData={blog} />
          </div>
          <div className=" w-full md:w-3/4 mt-[8vw]">
            <section className="bg-[#1A0C25] border border-[#9C00AD66] p-8 rounded-lg  md:max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-[#F6E8FB]">
                  Featured Posts
                </h2>
                <a
                  href="#"
                  className="text-sm text-[#F6E8FB] hover:text-purple-400 flex items-center"
                >
                  More <span className="ml-1">→</span>
                </a>
              </div>

              {/* Featured Post */}
              <div
                className="bg-[#2A183885] border border-[#9C00AD4D] p-6 rounded-lg text-white"
                onClick={() => handleCardClick(firstblog.id)}
              >
                <img
                  src={firstblog.blogimg}
                  alt="Understanding Autism"
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <h3 className="text-lg text-[#F6E8FB] font-semibold mb-2">
                  {firstblog.title}
                </h3>
                <p className="text-sm text-[#B740A1] mb-4">
                  {firstblog.author}{" "}
                  <span className="text-gray-400">• {firstblog.time}</span>
                </p>
                <p className="text-sm text-[#F6E8FB]">
                  {firstblog.metaDescription}
                </p>
              </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-[2vw] rounded-lg max-w-4xl mx-auto">
             {aboutContent.blogs.map((cardData, index) => (
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

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <BlogCategory/>
        <div className="bg-gradient-to-b from-[#241E22] my-[10vw] to-[#43284C] h-[300px] flex flex-col justify-center items-center gap-4 text-white ">
          <p className="text-2xl max-sm:text-lg font-montserrat">HOW WE WORK</p>
          <p className="text-2xl max-sm:text-lg max-sm:p-4 font-montserrat">
            Rigorously trained & tested. Clinically validated. Peer-reviewed.
          </p>
          <Link
            to="/BlogPages/howWeWork"
            className="bg-transparent border border-[#9C00AD] text-white px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
          >
            Study Summary
          </Link>
        </div>
        <BlogFooter />
      </div>
    </>
  );
};

export default BlogPage;
