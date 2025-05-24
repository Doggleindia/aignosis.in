import React from 'react';
import img9 from '../../assets/clinic/img9.png';
const EndroseCard = () => {
  return (
    <div>
      <div className="w-[350px] overflow-hidden rounded-lg border border-[#5455694D] bg-[#43284C4D] p-5 text-white shadow-lg">
        {/* Image */}

        <img src={img9} alt="Pixel Perfect" className="h-[200px] w-full object-cover" />

        {/* Content */}
        <div className="p-4">
          <p className="mb-1 text-xs text-gray-400">12 January, 2021</p>
          <p className="mb-2 text-lg font-semibold">Pixel Perfect</p>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae eros dui. Sed quis tincidunt purus, sit
            amet sodales arcu. Maecenas suscipit magna id viverra euismod. Aenean viverra dui convallis ante lobortis
            laoreet. Sed nec quam enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EndroseCard;
