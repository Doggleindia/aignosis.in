import React from 'react';
import img1 from "../../assets/image.png"; // Make sure this path is correct

const PricepageBenefits = () => {
    const Divider = ({ title }) => (
        <div className="flex flex-row justify-center items-center space-x-4 mb-6 mt-10">
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
            <h1 className="text-[18px] text-[#F1C6FE] font-medium max-sm:text-sm">
                {title}
            </h1>
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
        </div>
    );

    return (
        <div className="p-8">
            {/* Divider Section */}
            <Divider title="Advantages" />
            <h1 className="text-2xl 2xl:text-5xl w-full text-center md:text-3xl tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
                Benefits of Ai.gnosis
            </h1>

            {/* Carousel Section */}
            <div className="flex h-full w-full justify-center items-center mt-10">
                {/* Left Arrow */}
                <button className="flex justify-center items-center bg-pink-700 px-4 py-3 rounded-full shadow-md hover:scale-105 transition">
                    <span className="text-white text-xl">{'<'}</span>
                </button>

                {/* Carousel Items */}
                <div className="flex gap-[3vw] justify-center items-center overflow-hidden w-[80%] px-4">
                    {/* First Item */}
                    <div className="p-4 rounded-lg shadow-lg flex flex-col justify-center items-center w-[200px]">
                        <img
                            src={img1}
                            alt="Child health"
                            className="w-full h-[10vw] scale-[1.2] rounded-lg object-cover"
                        />
                        <p className="mt-6 text-center text-sm text-white">Child health</p>
                    </div>

                    {/* Second Item */}
                    <div className="p-4 rounded-lg flex flex-col justify-center items-center w-[200px]">
                        <img
                            src={img1}
                            alt="Child health"
                            className="w-full h-[10vw] scale-[1.2] rounded-lg object-cover"
                        />
                        <p className="mt-6 text-center text-sm text-white">Child health</p>
                    </div>

                    {/* Third Item */}
                    <div className="p-4 rounded-lg flex flex-col justify-center items-center w-[200px]">
                        <img
                            src={img1}
                            alt="Child health"
                            className="w-full h-[10vw] scale-[1.2] rounded-lg object-cover"
                        />
                        <p className="mt-6 text-center text-sm text-white">Child health</p>
                    </div>
                    <div className="p-4 rounded-lg flex flex-col justify-center items-center w-[200px]">
                        <img
                            src={img1}
                            alt="Child health"
                            className="w-full h-[10vw] scale-[1.2] rounded-lg object-cover"
                        />
                        <p className="mt-6 text-center text-sm text-white">Child health</p>
                    </div>
                    
                </div>
                

                {/* Right Arrow */}
                <button className="flex justify-center items-center bg-pink-700 px-4 py-3 rounded-full shadow-md hover:scale-105 transition">
                    <span className="text-white text-xl">{'>'}</span>
                </button>
            </div>
        </div>
    );
};

export default PricepageBenefits;
