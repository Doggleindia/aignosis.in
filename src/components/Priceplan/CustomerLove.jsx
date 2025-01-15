import React from 'react';
import img1 from "../../assets/image.png";
import { Link } from "react-router-dom";


const CustomerLove = () => {
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
            <div className="px-8 pt-8">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h1 className="text-2xl 2xl:text-5xl font-montserrat w-full text-center md:text-3xl tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
                    Customer Love
                </h1>
                {/* Carousel Section */}
                <div className="flex items-center justify-center mt-12">
                    {/* Left Arrow */}
                    <button className="bg-[#711D64] text-white w-10 h-10 rounded-full flex items-center justify-center">
                        &lt;
                    </button>

                    {/* Card */}
                    <div
                        className="flex flex-row rounded-3xl w-[80%] h-[30vw] p-8 text-white mx-4"
                        style={{
                            background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                        }}
                    >                    {/* Text Section */}
                        <div className="flex-1 flex flex-col justify-between pr-7">
                            <p className="text-base">
                            Aignosis helped us understand our child’s development better. The insights were so accurate and the personalized therapy plan has made such a difference in just a few weeks!”
                            </p>
                            <div className="w-full h-[4px] mt-[10vw] flex justify-center items-center bg-[#811F67]"></div>
                            <div className="flex items-center justify-between px-10">
                                <div className="">
                                    <h1 className="text-sm text-[#CACED9]">4.9 Ratings</h1>
                                    <div className="flex items-center">
                                        <span className="text-yellow-400">★★★★★</span>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-sm text-white">
                                    Meera Sharma
                                                                            <span className="block text-[#CACED9] mt-2 text-xs">
                                            Pediatric Neurologist
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1 flex items-center justify-center">
                            <img
                                src={img1}
                                alt="Customer Love"
                                className="rounded-lg object-cover h-full w-full"
                            />
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button className="bg-[#711D64] text-white w-10 h-10 rounded-full flex items-center justify-center">
                        &gt;
                    </button>
                </div>

            </div>
            <div
                className="bg-gradient-to-b from-[#241E22] to-[#43284C] h-[300px] my-[5vw] flex flex-col justify-center items-center gap-4 text-white font-manrope"
            >
                <p className="text-2xl max-sm:text-lg font-semibold font-montserrat">
                    We Value Your Feedback!
                </p>
                <p className="text-sm text-center px-4 max-w-[60%]">
                    Your experience matters to us. Share your thoughts and help us improve!
                </p>
                <div className="text-center">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                        <Link to="/" onClick={() => handleLinkClick('/')} className="relative md:text-xl 2xl:text-3xl font-semibold tracking-wide text-white z-10">
                            Ai.gnosis
                        </Link>
                    </div>                    <p className="text-yellow-400 mt-2 text-lg font-semibold">4.9 ⭐⭐⭐⭐⭐</p>
                    <p className="text-sm mt-2">459 Reviews</p>
                </div>
                <Link
                    to="/feedback"
                    className="border text-sm border-[#9C00AD] text-white px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
                >
                    Leave a Review
                </Link>
            </div>
        </>
    );
};

export default CustomerLove;
