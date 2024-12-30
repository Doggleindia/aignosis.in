import React from "react";
import img8 from "../../assets/clinic/img8.png";
const AwardCard = () => {
  return (
    
      <div className="w-80 p-6 bg-gradient-to-b from-[#43284C] to-[#241E22] rounded-xl shadow-lg text-white">
        <div className="flex flex-col justify-between">
          {/* Profile Image */}
          <div className="flex gap-4">
          <div className="w-16 h-16 mb-4">
            <img
              src={img8} // Replace with the actual image URL
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {/* Organisation Text */}
          <p className="text-lg font-semibold mb-2">Organisation</p>
          </div>
          <hr className="w-full border-t border-gray-600 mb-2" />
          {/* Sub Text */}
          <p className="text-sm text-gray-400 mb-1 text-center">Sub text</p>
          {/* Award Text */}
          <p className="text-2xl font-bold text-center">Award</p>
        </div>
      </div>
    
  );
};

export default AwardCard;
