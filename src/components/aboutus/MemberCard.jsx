import React from 'react';

const MemberCard = ({ title, subtitle, desc, src, logos = [] }) => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-lg border border-white border-opacity-10 bg-[#43284C] text-white shadow-lg lg:flex-row">
      {/* Image Section */}
      <div className="flex h-full w-full items-center justify-center bg-[#301C3A] p-4 lg:w-1/3">
        <img src={src} alt="Member" className="h-full w-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="flex w-full flex-col justify-between p-6 lg:w-2/3">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <h3 className="text-md pt-2 font-medium text-gray-300">{subtitle}</h3>
          <p className="pt-4 text-sm text-gray-400">{desc}</p>
        </div>

        {/* Logos */}
        <div className="mt-6 flex flex-wrap gap-4">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="logo" className="h-12 w-12 object-contain" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
