import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const Contact = () => {
    return (
        <div className='h-[120vw] text-white flex flex-col w-full font-montserrat bg-[#1A0C25]'>
            <div className="w-full h-[30vw] px-[10vw] gap-5 flex justify-center items-center">
                {/* Left Section - Map */}
                <div className="left w-[40%] h-[85%]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509819!2d144.95592751531588!3d-37.81720997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d25f7fa0a5d!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632822903308!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                {/* Right Section - Form */}
                <div className="flex flex-col w-[60%] h-[85%] px-[2vw]">
                    <h1 className="mb-4">
                        Simply fill in your details below, and we’ll get back to you as soon as possible. You can also find us on the map, showcasing our headquarters and partner locations. For immediate assistance, feel free to call or email us directly!
                    </h1>
                    <div className="bg-[#252127] p-8 rounded-lg shadow-md">
                        <form className="mt-4 space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Your Message"
                                className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md"
                            />
                            <button type="submit" className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#B740A1] text-white hover:bg-[#A0328C] transition-colors duration-300">
                                Submit <GoArrowUpRight />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
