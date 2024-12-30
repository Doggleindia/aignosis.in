import React from 'react';
import img1 from "../../assets/image.png";
import img2 from "../../assets/Featured.png"; // Make sure this path is correct

const PricepageBenefits = () => {
    const Divider = ({ title }) => (
        <div className="flex flex-row justify-center items-center space-x-4 mb-3 mt-10">
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
        <>
            <div className="hidden md:block pt-8">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h1 className="text-2xl 2xl:text-5xl font-montserrat w-full text-center md:text-3xl tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
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
            <div className="hidden md:block pt-5 pb-5">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h1 className="text-2xl 2xl:text-5xl w-full font-montserrat text-center md:text-3xl tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
                    Precision Solutions, Exclusively Designed for You
                </h1>

                {/* Cards Section */}
                <div className="flex justify-center items-center mt-10 gap-6">
                    {[1, 2, 3].map((card, index) => (
                        <div key={index} className="w-[22vw] relative flex flex-col items-center justify-center h-[27vw] rounded-xl bg-[#43284C4D]">
                            {/* Image Section */}
                            <div className="w-[90%] mt-10 absolute top-0 flex items-center ml-3 justify-center h-[40%]">
                                <img src={img2} alt={`Card ${index}`} />
                            </div>

                            {/* Text Section */}
                            <div className="p-4 px-6 mt-[12.5vw]">
                                <h1 className="text-[10px] text-[#CACED9]">12 January, 2021</h1>
                                <h1 className="text-base font-semibold">Pixel Perfect</h1>
                                <p className="text-[10px] mt-5 text-[#CACED9]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae eros dui. Sed quis tincidunt purus, sit amet sodales arcu. Maecenas suscipit magna id viverra euismod. Aenean viverra dui convallis ante lobortis laoreet. Sed nec quam enim.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="block md:hidden p-4">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h1 className="text-xl w-full text-center tracking-tight font-semibold text-[#F6E8FB]">
                    Benefits of Ai.gnosis
                </h1>

                {/* Mobile Carousel Section */}
                <div className="flex flex-col gap-4 justify-center items-center mt-6">
                    {Array(4).fill(0).map((_, index) => (
                        <div key={index} className="p-4 rounded-lg shadow-lg flex flex-col justify-center items-center w-full">
                            <img
                                src={img1}
                                alt="Child health"
                                className="w-full h-[40vw] rounded-lg object-cover"
                            />
                            <p className="mt-4 text-center text-sm text-white">Child health</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PricepageBenefits;
