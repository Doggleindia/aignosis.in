import React from 'react'

const PriceBody = () => {
    return (
        <>
            <div className=' hidden md:flex w-full h-full font-raleway p-4 gap-4 px-10'>
                <div className="flex w-[15%] flex-col gap-4">
                    <div className="w-[10vw] h-[10vw] bg-[#D9D9D9]"></div>
                    <div className="w-[10vw] h-[10vw] bg-[#D9D9D9]"></div>
                    <div className="w-[10vw] h-[10vw] bg-[#D9D9D9]"></div>
                    <div className="w-[10vw] h-[10vw] bg-[#D9D9D9]"></div>
                </div>
                <div className="">
                    <div className="w-[40vw] h-[43.75vw] bg-[#D9D9D9]"></div>
                </div>
                <div className="ml-4 w-[45%] pr-4">
                    <div className="flex flex-col">
                        <h1 className='text-4xl'>Select Perfect Plan For Your Child's Needs</h1>
                        <p className=' text-xs mt-4 font-montserrat text-[#F6E8FB]'>Find the ideal support plan tailored to your child’s unique journey. Our options are designed to provide targeted guidance,whether for developmental assessments, therapy, or academic support, ensuring a comprehensive approach to their growth and success.</p>
                        <p className='italic text-xs mt-4 text-[#F6E8FB]'>"Looking to support another child’s journey? You can also gift this assessment, offering meaningful support and valuable insights to families navigating similar paths."</p>
                    </div>
                    <div className="mt-4 font-montserrat">
                        <h1>700₹</h1>
                        <div className="text-[9px]">
                            <h1 className='text-[#F6E8FB]'>originally ₹2000</h1>
                            <h1 className='text-[#F6E8FB]'>(Comprehensive Evaluation)</h1>
                            <h1 className='text-[#F6E8FB]'>Includes Formal Report</h1>
                            <h1 className='text-[#F6E8FB]'>Detailed Explanation</h1>
                            <h1 className='text-[#F6E8FB]'>Easy & fast procedure</h1>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h1>Benefits</h1>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="mt-2 flex gap-4">
                                <h1 className='bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center'>In-Depth Assessment</h1>
                                <h1 className='bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center'>Personalized therapy</h1>
                            </div>
                            <div className="mt-2 flex gap-4">
                                <h1 className='bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center'>Addaptive learning support </h1>
                                <h1 className='bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center'>Continuos feedback</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="">
                            <h1 className="text-2xl font-semibold text-white">Add Therapy</h1>
                        </div>
                        <div className="flex mt-6 gap-4">
                            {/* Card 1 */}
                            <div className="bg-[#43284C4D] rounded-lg p-4 text-white w-[90%] sm:w-[18vw] md:w-[22vw] lg:w-[15vw]">
                                <div className="text-center mb-4">
                                    <span className="bg-pink-500 text-xs rounded-full px-2 py-1">10% Off!</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg font-semibold">
                                        ₹24000 <span className="line-through text-gray-400">₹27000</span>
                                    </p>
                                    <p className="text-xs mt-2">3-Month Validity</p>
                                    <p className="text-xs">15 Sessions at ₹1600/session</p>
                                    <p className="text-xs font-bold mt-2">Save ₹3000 overall!</p>
                                </div>
                            </div>

                            {/* Card 2 (Most Popular) */}
                            <div className="bg-[#43284C4D] rounded-lg p-4 text-white w-[90%] sm:w-[18vw] md:w-[22vw] lg:w-[15vw] relative">
                                <div className="absolute -top-4 left-2 bg-red-500 text-xs text-white font-bold px-2 py-1 rounded">
                                    MOST POPULAR
                                </div>
                                <div className="text-center mb-4">
                                    <span className="bg-pink-500 text-xs rounded-full px-2 py-1">10% Off!</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg font-semibold">
                                        ₹24000 <span className="line-through text-gray-400">₹27000</span>
                                    </p>
                                    <p className="text-xs mt-2">3-Month Validity</p>
                                    <p className="text-xs">15 Sessions at ₹1600/session</p>
                                    <p className="text-xs font-bold mt-2">Save ₹3000 overall!</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#43284C4D] rounded-lg p-4 text-white w-[90%] sm:w-[18vw] md:w-[22vw] lg:w-[15vw]">
                                <div className="text-center mb-4">
                                    <span className="bg-pink-500 text-xs rounded-full px-2 py-1">10% Off!</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg font-semibold">
                                        ₹24000 <span className="line-through text-gray-400">₹27000</span>
                                    </p>
                                    <p className="text-xs mt-2">3-Month Validity</p>
                                    <p className="text-xs">15 Sessions at ₹1600/session</p>
                                    <p className="text-xs font-bold mt-2">Save ₹3000 overall!</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5 gap-4">
                            {/* Share Button */}
                            <div className="relative w-full flex justify-center items-center rounded-lg p-[2px] bg-gradient-to-r from-[#D2407480] to-[#6518B480]">
                                <button className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg">
                                    Share
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="relative w-full flex justify-center items-center rounded-lg p-[2px] bg-gradient-to-r from-[#D2407480] to-[#6518B480]">
                                <button className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div className="flex mt-5 gap-4">
                            {/* Share Button */}
                            <div className="relative w-full flex justify-center items-center rounded-lg p-[2px] bg-gradient-to-r from-[#D2407480] to-[#6518B480]">
                                <button className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg">
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden w-full h-full font-raleway p-4 gap-4">
                <div className="flex flex-col gap-4 items-center">
                     {/* Center Image */}
                     <div className="w-[90vw] h-[60vw] bg-[#D9D9D9]"></div>
                    {/* Left Column */}
                    <div className="flex gap-2">
                        <div className="w-[20vw] h-[20vw] bg-[#D9D9D9]"></div>
                        <div className="w-[20vw] h-[20vw] bg-[#D9D9D9]"></div>
                        <div className="w-[20vw] h-[20vw] bg-[#D9D9D9]"></div>
                        <div className="w-[20vw] h-[20vw] bg-[#D9D9D9]"></div>
                    </div>

                    {/* Text Content */}
                    <div className="text-left mt-4 px-2">
                        <h1 className="text-xl font-bold">Select Perfect Plan For Your Child's Needs</h1>
                        <p className="text-xs mt-2 font-montserrat text-[#F6E8FB]">
                            Find the ideal support plan tailored to your child’s unique journey. Our options are designed to provide targeted guidance, whether for developmental assessments, therapy, or academic support, ensuring a comprehensive approach to their growth and success.
                        </p>
                        <p className="italic text-xs mt-2 text-[#F6E8FB]">
                            "Looking to support another child’s journey? You can also gift this assessment, offering meaningful support and valuable insights to families navigating similar paths."
                        </p>
                    </div>

                    {/* Pricing */}
                    <div className="text-left w-full px-2 font-montserrat">
                        <h1 className="text-2xl">700₹</h1>
                        <div className="text-[10px] mt-2 text-[#FFFEF8]">
                            <p>originally ₹2000</p>
                            <p>(Comprehensive Evaluation)</p>
                            <p>Includes Formal Report</p>
                            <p>Detailed Explanation</p>
                            <p>Easy & fast procedure</p>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-4">
                        <h1 className="text-lg text-left px-2 font-semibold">Benefits</h1>
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">In-Depth Assessment</span>
                            <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">Personalized Therapy</span>
                            <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">Adaptive Learning Support</span>
                            <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">Continuous Feedback</span>
                        </div>
                    </div>

                    {/* Therapy Options */}
                    <div className="mt-4">
                        <h1 className="text-xl font-bold text-white text-left px-2">Add Therapy</h1>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {/* Therapy Cards */}
                            {Array(3)
                                .fill(0)
                                .map((_, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#43284C4D] rounded-lg p-4 text-white w-[80%] text-center"
                                    >
                                        <div className="mb-2">
                                            <span className="bg-pink-500 text-xs rounded-full px-2 py-1">10% Off!</span>
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold">
                                                ₹24000 <span className="line-through text-gray-400">₹27000</span>
                                            </p>
                                            <p className="text-xs mt-2">3-Month Validity</p>
                                            <p className="text-xs">15 Sessions at ₹1600/session</p>
                                            <p className="text-xs font-bold mt-2">Save ₹3000 overall!</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <button className="w-[40%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg">
                            Share
                        </button>
                        <button className="w-[40%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg">
                            Add to cart
                        </button>
                        <button className="w-[85%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PriceBody