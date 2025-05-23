// PricingCard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import popularImage from '../../assets/popular.png';
const PricingCard = ({ discount, price, originalPrice, validity, sessions, savings, background, isPopular }) => {
  const Navigate = useNavigate();
  const handleCardClick = (price) => {
    Navigate('/payment', { state: { selectedPrice: price } }); // Pass price to Payment page
  };
  return (
    <div>
      <div
        className={`relative flex h-[400px] w-[320px] flex-col items-center justify-between rounded-3xl p-8 text-white ${background}`}
      >
        {isPopular && (
          <img src={popularImage} alt="Popular" className="w-17 absolute left-0 top-0 h-16" loading="lazy" />
        )}
        <div className="self-start rounded-2xl border border-[#B740A1] bg-[#B7407D54] px-4 py-2 text-xs font-semibold">
          {discount}
        </div>
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold">₹{price}</h2>
          <span className="text-sm font-normal text-gray-400">(originally ₹{originalPrice})</span>
        </div>
        <div className="text-md space-y-2 text-center">
          <p>{validity}</p>
          <p>{sessions}</p>
          <p className="font-semibold text-green-400">{savings}</p>
        </div>
        <div
          onClick={() => handleCardClick(Number(price))}
          className="flex w-auto cursor-pointer items-center space-x-2 rounded-full border border-[#9C00AD] px-2 py-4 text-lg font-semibold text-[#F6E8FB] transition-colors hover:bg-[#B7407D] md:h-[2.5rem]"
        >
          <span>Click to proceed</span>
          <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-[#B740A1] text-white group-hover:bg-white">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
