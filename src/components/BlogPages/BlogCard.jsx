import React from 'react';

const BlogCard = ({ image, title, author, time, category, description, cardData, handleCardClick }) => {
  return (
    <div
      className="cursor-pointer rounded-lg border border-[#9C00AD4D] bg-[#2A183885] shadow-lg"
      onClick={() => handleCardClick(cardData.id)}
    >
      <img src={image} alt={title} className="h-40 w-full rounded-t-lg object-cover max-sm:h-[13rem]" />
      <div className="p-4">
        <h3 className="max-sm:text-md text-lg font-bold text-[#F6E8FB]">{title}</h3>
        <div className="mt-2 flex items-center justify-between text-sm text-purple-300">
          <span className="text-[#B740A1]">{author}</span>
          <span>{time}</span>
        </div>
        <span className="mt-1 inline-block text-sm text-[#9C00AD]">{category}</span>
        <p className="mt-3 text-sm text-[#F6E8FB]">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
