import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const PartnershipPage = () => {
    return (
        <div className='h-[120vw] text-white flex flex-col w-full font-montserrat bg-[#1A0C25]'>
            <div className="w-full h-[100%] flex justify-center items-center flex-col border-t rounded-[30rem] border-[#B874B580]">
                <div className='w-full flex-col h-[15vw] justify-center flex items-center'>
                    <div className="flex justify-center gap-5 items-center">
                        <div className="w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]"></div>
                        <h1 className="text-[#EDD0E7]">Connect with Sales</h1>
                        <div className="w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]"></div>
                    </div>
                    <div className="mt-[2rem] px-[8vw]">
                        <h1 className='text-center text-5xl tracking-tight font-semibold leading-[3rem]'>
                            If you are a healthcare provider, payor, or caregiver and want to partner with Ai.gnosis, let’s talk!
                        </h1>
                    </div>
                    <div className='px-[25rem] mt-[2rem]'>
                        <p className='text-center'>
                            Emphasis on partnerships within India, focusing on integration with local healthcare.
                        </p>
                    </div>
                </div>
                <div className='w-[60vw] relative justify-center items-center mt-10 gap-[2vw] flex flex-col h-[30vw]'>
                    <div className='w-full h-[50%] flex justify-between items-center'>
                        <div
                            className="w-[16vw] h-full p-[2vw] rounded-3xl"
                            style={{
                                background: "radial-gradient(circle, #070B0E, #300834)",
                            }}
                        >
                            <h1 className="text-xl font-semibold text-white">Partnership Benefits Overview</h1>
                            <h1 className="mt-2 text-white">
                                Discover the advantages of collaborating with Ai.gnosis, including enhanced patient care, access to cutting-edge tools, and opportunities for joint research initiatives.
                            </h1>
                        </div>
                        <div
                            className="w-[16vw] h-full p-[2vw] rounded-3xl"
                            style={{
                                background: "radial-gradient(circle, #070B0E, #300834)",
                            }}
                        >
                            <h1 className="text-xl font-semibold text-white">Scheduling Options</h1>
                            <h1 className="mt-2 text-white ">
                                Schedule a consultation with our sales team directly through our integrated calendar, making it convenient for you to discuss partnership opportunities.
                            </h1>
                        </div>
                    </div>
                    <div className='w-full h-[50%] flex justify-between items-center'>
                        <div
                            className="w-[16vw] h-full p-[2vw] rounded-3xl"
                            style={{
                                background: "radial-gradient(circle, #070B0E, #300834)",
                            }}
                        >
                            <h1 className="text-xl font-semibold text-white">Quick Contact Form</h1>
                            <h1 className="mt-2 text-white">
                                Discover the advantages of collaborating with Ai.gnosis, including enhanced patient care, access to cutting-edge tools, and opportunities for joint research initiatives.
                            </h1>
                        </div>
                        <div
                            className="w-[16vw] h-full p-[2vw] rounded-3xl"
                            style={{
                                background: "radial-gradient(circle, #070B0E, #300834)",
                            }}
                        >
                            <h1 className="text-xl font-semibold text-white">Resource Downloads</h1>
                            <h1 className="mt-2 text-white">
                                Access valuable resources, such as brochures and case studies, to learn more about our services and the impact of Ai.gnosis in autism detection.
                            </h1>
                        </div>
                    </div>
                    <div className='absolute w-[15vw] h-[15vw] bg-[#D9D9D9]'></div>
                </div>
            </div>
        </div>
    );
};

export default PartnershipPage;
