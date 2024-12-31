import React from 'react';
import img from '../assets/images/doctor.png';
import img1 from '../assets/images/doctor img.png';
import Divider from './aboutus/Divider';

const FromDoctor = () => {
    return (
        <>
            <div className='w-full h-full hidden md:block text-white bg-[#1A0C25]'>
                <div
                    className="w-full h-16"
                    style={{
                        background: 'linear-gradient(to bottom, #09121A 0%, #09121A00 100%)',
                    }}>
                </div>
                <div className="">
                    <div className="w-full h-[30vw] px-[5vw] flex mt-[3vw]">
                        <div className="w-[75%] h-full">
                            <img className='object-contain w-full h-full' src={img} alt="" srcset="" />
                        </div>
                        <div className="w-full h-full">
                            <div className="flex flex-row justify-start items-center space-x-4">
                                <span
                                    className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                                    style={{
                                        background:
                                            "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                                    }}
                                ></span>
                                <h1 className="text-[16px] text-[#F1C6FE] font-medium max-sm:text-sm">
                                    From Doctors
                                </h1>
                                <span
                                    className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                                    }}
                                ></span>
                            </div>
                            <h1 className='font-raleway mt-5 text-4xl'>Trusted by Experts in Autism <br /> Detection</h1>
                            <p className='mt-5'>Hear how AI.Gnosis has transformed early autism detection for healthcare <br /> professionals, improving accuracy and patient care in clinics worldwide.</p>
                            <div className="flex mt-10  gap-10 overflow-x-auto">
                                <div
                                    className="flex rounded-3xl w-[50%] h-[15vw] p-8 text-white"
                                    style={{
                                        background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                                    }}
                                >
                                    <div className="flex flex-col justify-between h-full">
                                        {/* Testimonial Text */}
                                        <p className="text-xs">
                                            <span className="text-pink-400">AI Gnosis</span> has revolutionized the way we approach autism diagnosis in our clinic. The AI tools are not only accurate but also incredibly user-friendly, making our workflow more efficient.
                                        </p>

                                        {/* Divider */}
                                        <div className="w-full h-[.5px] mt-4 bg-pink-400"></div>

                                        {/* Doctor Info */}
                                        <div className="flex justify-between items-center">
                                            {/* Left Side */}
                                            <div className="flex flex-col">
                                                <h1 className="text-base text-[#CACED9] font-semibold">Dr. Rohan Mehta,</h1>
                                                <span className="text-xs text-[#CACED9]">Pediatric Neurologist</span>
                                            </div>

                                            {/* Placeholder */}
                                            <div className="w-[60px] h-[40px] bg-[#FFFFFF22] rounded-md"></div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex rounded-3xl w-[50%] h-[15vw] p-8 text-white"
                                    style={{
                                        background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                                    }}
                                >
                                    <div className="flex flex-col justify-between h-full">
                                        {/* Testimonial Text */}
                                        <p className="text-xs">
                                            <span className="text-pink-400">AI Gnosis</span> has revolutionized the way we approach autism diagnosis in our clinic. The AI tools are not only accurate but also incredibly user-friendly, making our workflow more efficient.
                                        </p>

                                        {/* Divider */}
                                        <div className="w-full h-[.5px] mt-4 bg-pink-400"></div>

                                        {/* Doctor Info */}
                                        <div className="flex justify-between items-center">
                                            {/* Left Side */}
                                            <div className="flex flex-col">
                                                <h1 className="text-base text-[#CACED9] font-semibold">Dr. Rohan Mehta,</h1>
                                                <span className="text-xs text-[#CACED9]">Pediatric Neurologist</span>
                                            </div>

                                            {/* Placeholder */}
                                            <div className="w-[60px] h-[40px] bg-[#FFFFFF22] rounded-md"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="py-[5vw]">
                        <div className="w-full h-[30vw] px-[5vw] flex mt-[5vw]">
                            <div className="w-full overflow-x-auto h-full">
                                <div className="flex flex-row justify-start items-center space-x-4">
                                    <span
                                        className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                                        style={{
                                            background:
                                                "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                                        }}
                                    ></span>
                                    <h1 className="text-[16px] text-[#F1C6FE] font-medium max-sm:text-sm">
                                        From Parents
                                    </h1>
                                    <span
                                        className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                                        }}
                                    ></span>
                                </div>
                                <h1 className='font-raleway mt-5 text-4xl'>Stories of Support and Success</h1>
                                <p className='mt-5'>Discover how AI.Gnosis has empowered parents with the tools and insights they <br /> need to make informed decisions for their children’s future.</p>
                                <div className="flex mt-10 gap-10 overflow-x-auto">
                                    <div
                                        className="flex rounded-3xl w-[30vw] h-[15vw] p-8 text-white"
                                        style={{
                                            background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                                        }}
                                    >
                                        <div className="flex flex-col justify-between h-full">
                                            {/* Testimonial Text */}
                                            <p className="text-xs">
                                                <span className="text-pink-400">AI Gnosis</span> has revolutionized the way we approach autism diagnosis in our clinic. The AI tools are not only accurate but also incredibly user-friendly, making our workflow more efficient.
                                            </p>

                                            {/* Divider */}
                                            <div className="w-full h-[.5px] mt-4 bg-pink-400"></div>

                                            {/* Doctor Info */}
                                            <div className="flex justify-between items-center">
                                                {/* Left Side */}
                                                <div className="flex flex-col">
                                                    <h1 className="text-base text-[#CACED9] font-semibold">Dr. Rohan Mehta,</h1>
                                                    <span className="text-xs text-[#CACED9]">Pediatric Neurologist</span>
                                                </div>

                                                {/* Placeholder */}
                                                <div className="w-[60px] h-[40px] bg-[#FFFFFF22] rounded-md"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex rounded-3xl w-[30vw] h-[15vw] p-8 text-white"
                                        style={{
                                            background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                                        }}
                                    >
                                        <div className="flex flex-col justify-between h-full">
                                            {/* Testimonial Text */}
                                            <p className="text-xs">
                                                <span className="text-pink-400">AI Gnosis</span> has revolutionized the way we approach autism diagnosis in our clinic. The AI tools are not only accurate but also incredibly user-friendly, making our workflow more efficient.
                                            </p>

                                            {/* Divider */}
                                            <div className="w-full h-[.5px] mt-4 bg-pink-400"></div>

                                            {/* Doctor Info */}
                                            <div className="flex justify-between items-center">
                                                {/* Left Side */}
                                                <div className="flex flex-col">
                                                    <h1 className="text-base text-[#CACED9] font-semibold">Dr. Rohan Mehta,</h1>
                                                    <span className="text-xs text-[#CACED9]">Pediatric Neurologist</span>
                                                </div>

                                                {/* Placeholder */}
                                                <div className="w-[60px] h-[40px] bg-[#FFFFFF22] rounded-md"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[75%] h-full">
                                <img className='object-contain w-full h-full' src={img1} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full h-16"
                    style={{
                        background: 'linear-gradient(to top, #09121A 0%, #09121A00 100%)',
                    }}
                ></div>

            </div>
            <div className="block md:hidden bg-[#1A0C25] text-white h-full w-full">
                <div
                    className="w-full h-16"
                    style={{
                        background: 'linear-gradient(to bottom, #09121A 0%, #09121A00 100%)',
                    }}>
                </div>
                <div className="w-full">
                    <div className="w-full h-auto px-4 py-6 flex flex-col space-y-6">
                        <div className="w-full flex flex-col space-y-4">
                            <div className="flex flex-row justify-start items-center space-x-2">
                                <span
                                    className="h-[4px] w-[50px] rounded-full"
                                    style={{
                                        background:
                                            "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                                    }}
                                ></span>
                                <h1 className="text-sm text-[#F1C6FE] font-medium">From Doctors</h1>
                                <span
                                    className="h-[4px] w-[50px] rounded-full"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                                    }}
                                ></span>
                            </div>
                            <h1 className="font-raleway text-xl text-start">
                                Trusted by Experts in Autism Detection
                            </h1>
                            <p className="text-start text-xs">
                                Hear how AI.Gnosis has transformed early autism detection for healthcare
                                professionals, improving accuracy and patient care in clinics worldwide.
                            </p>
                            <div className="w-full">
                                <img src={img} alt="" srcset="" />
                            </div>
                            <div className="flex overflow-x-auto space-x-4 py-10 scrollbar-hide">
                                {/* Testimonial Card 1 */}
                                <div
                                    className="flex flex-col rounded-3xl p-4 py-10 text-white min-w-[400px]"
                                    style={{
                                        background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                                    }}
                                >
                                    <p className="text-xs">
                                        <span className="text-pink-400">AI Gnosis</span> has revolutionized
                                        the way we approach autism diagnosis in our clinic. The AI tools are
                                        not only accurate but also incredibly user-friendly, making our workflow more efficient.
                                    </p>
                                    <div className="w-full h-[.5px] my-2 mt-10 bg-pink-400"></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-sm text-[#CACED9] font-semibold">Dr. Rohan Mehta,</h1>
                                        <span className="text-xs text-[#CACED9]">Pediatric Neurologist</span>
                                    </div>
                                </div>
                                {/* Testimonial Card 2 */}
                                <div
                                    className="flex flex-col rounded-3xl p-4 py-10 text-white min-w-[400px]"
                                    style={{
                                        background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                                    }}
                                >
                                    <p className="text-xs">
                                        <span className="text-pink-400">AI Gnosis</span> has revolutionized
                                        the way we approach autism diagnosis in our clinic. The AI tools are
                                        not only accurate but also incredibly user-friendly, making our workflow more efficient.
                                    </p>
                                    <div className="w-full h-[.5px] my-2 mt-10 bg-pink-400"></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-sm text-[#CACED9] font-semibold">Dr. Rohan Mehta,</h1>
                                        <span className="text-xs text-[#CACED9]">Pediatric Neurologist</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full h-auto px-4 flex flex-col space-y-2">
                        <div className="w-full flex flex-col space-y-4">
                            <div className="flex flex-row justify-end mr-2 items-center space-x-2">
                                <span
                                    className="h-[4px] w-[50px] rounded-full"
                                    style={{
                                        background:
                                            "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                                    }}
                                ></span>
                                <h1 className="text-sm text-[#F1C6FE] font-medium">From Parents</h1>
                                <span
                                    className="h-[4px] w-[50px] rounded-full"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                                    }}
                                ></span>
                            </div>
                            <h1 className="font-raleway text-xl text-right">
                            Trusted by Experts in Autism Detection                            </h1>
                            <p className="text-center text-xs">
                                Hear how AI.Gnosis has transformed early autism detection for healthcare
                                professionals, improving accuracy and patient care in clinics worldwide.
                            </p>
                            <div className="w-full">
                                <img src={img1} alt="" srcset="" />
                            </div>
                            <div className="flex overflow-x-auto space-x-4 py-10 scrollbar-hide">
                                {/* Testimonial Card 1 */}
                                <div
                                    className="flex flex-col rounded-3xl p-4 py-10 text-white min-w-[400px]"
                                    style={{
                                        background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                                    }}
                                >
                                    <p className="text-xs">
                                        <span className="text-pink-400">AI Gnosis</span> has revolutionized
                                        the way we approach autism diagnosis in our clinic. The AI tools are
                                        not only accurate but also incredibly user-friendly, making our workflow more efficient.
                                    </p>
                                    <div className="w-full h-[.5px] my-2 mt-10 bg-pink-400"></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-sm text-[#CACED9] font-semibold">Dr. Rohan Mehta,</h1>
                                        <span className="text-xs text-[#CACED9]">Pediatric Neurologist</span>
                                    </div>
                                </div>
                                {/* Testimonial Card 2 */}
                                <div
                                    className="flex flex-col rounded-3xl p-4 py-10 text-white min-w-[400px]"
                                    style={{
                                        background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                                    }}
                                >
                                    <p className="text-xs">
                                        <span className="text-pink-400">AI Gnosis</span> has revolutionized
                                        the way we approach autism diagnosis in our clinic. The AI tools are
                                        not only accurate but also incredibly user-friendly, making our workflow more efficient.
                                    </p>
                                    <div className="w-full h-[.5px] my-2 mt-10 bg-pink-400"></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-sm text-[#CACED9] font-semibold">Dr. Rohan Mehta,</h1>
                                        <span className="text-xs text-[#CACED9]">Pediatric Neurologist</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div
                    className="w-full h-16"
                    style={{
                        background: 'linear-gradient(to top, #09121A 0%, #09121A00 100%)',
                    }}
                ></div>
            </div>
        </>
    );
};

export default FromDoctor;
