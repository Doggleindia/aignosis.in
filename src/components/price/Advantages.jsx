import React from 'react';
import crossIcon from '../../assets/cross.png';
const Advantages = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25] p-6">
      <div className="mb-8 flex flex-row items-center space-x-4">
        <span
          className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
          style={{
            background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
          }}
        ></span>
        <span className="text-[24px] font-medium text-[#F1C6FE] max-sm:text-sm">Choose A Plan</span>
        <span
          className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
          style={{
            background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
          }}
        ></span>
      </div>

      {/* Title and Description */}
      <div className="mb-10 flex flex-col items-center gap-4 px-6 text-center">
        <h1 className="font-manrope text-[40px] font-bold text-[#F6E8FB]">Why Choose Ai.gnosis?</h1>
        <p className="text-md text-[#ECECEC]">
          Ai.gnosis combines technology and care to provide accurate assessments and personalized <br /> support for
          your child’s growth.
        </p>
      </div>
      <div className="mx-auto mt-10 w-[700px] rounded-3xl bg-[#564A5957] p-6 font-raleway max-sm:w-auto">
        <table className="w-full text-left text-gray-200">
          <thead>
            <tr>
              <th className="pb-4 text-lg"> </th>
              <th className="border-r border-[#F6E8FB80] pb-4 text-center text-lg">Online</th> {/* Added border here */}
              <th className="pb-4 text-center text-lg">Offline</th>
            </tr>
          </thead>
          <tbody>
            {[
              'Effortless scheduling',
              'Access global specialists from anywhere',
              'Select your preferred time and language',
              'Save on travel costs and time',
              'Get online reports, resources, and parent guidance',
              'Simple renewal process',
            ].map((feature, index) => (
              <tr key={index} className="border-t border-[#F6E8FB80]">
                <td className="py-3">{feature}</td>
                <td className="border-r border-[#F6E8FB80] py-3 text-center">✅</td> {/* Added border here */}
                <td className="py-3 text-center">
                  <img src={crossIcon} alt="Cross Icon" className="mx-auto h-4 w-4" loading="lazy" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Advantages;
