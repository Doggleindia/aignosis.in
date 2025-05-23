import React from 'react';
import img1 from '../../assets/image.png';

const CustomerLove2 = () => {
  const Divider = ({ title }) => (
    <div className="mb-3 mt-10 flex flex-row items-center justify-center space-x-4">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
      <h3 className="text-[18px] font-medium text-[#F1C6FE] max-sm:text-sm">{title}</h3>
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
    </div>
  );

  const Card = () => (
    <div className="w-[30vw] rounded-lg bg-[#43284C4D] p-[3vw] text-left font-raleway text-[#F6E8FB] shadow-lg">
      <img src={img1} alt="Child health" className="mb-4 rounded-lg" />
      <h2 className="text-xl font-bold">Child Health</h2>
      <p className="mt-2 text-sm">Explore educational trends, teaching strategies, and edtech innovations that are</p>
    </div>
  );

  return (
    <div className="">
      {/* Divider Section */}
      <Divider title="Advantages" />
      <h1 className="2xl:text-5xl w-full text-center font-montserrat text-2xl font-semibold tracking-tight text-[#F6E8FB] max-sm:text-center md:text-3xl">
        Customer Love
      </h1>

      {/* Cards Section */}
      <div className="mt-10 flex w-full items-center justify-center gap-5">
        <Card />
        <Card />
      </div>
      <div className="mt-10 flex w-full items-center justify-center gap-5">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CustomerLove2;
