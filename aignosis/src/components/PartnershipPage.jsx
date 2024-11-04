import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDiscord, FaTwitter, FaMedium } from "react-icons/fa";

const PartnershipPage = () => {
    return (
        <div className='min-h-screen text-white flex flex-col w-full font-montserrat bg-[#1A0C25] pb-10'>
            <div className="w-full flex flex-col justify-center items-center border-t rounded-[30rem] border-[#B874B580] py-10 mb-10">
                <div className='flex flex-col justify-center items-center px-4 mb-10'>
                    <div className="flex justify-center gap-5 items-center mb-4">
                        <div className="w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]"></div>
                        <h1 className="text-[#EDD0E7]">Connect with Sales</h1>
                        <div className="w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]"></div>
                    </div>
                    <div className="px-4 md:px-[8vw] mb-4 text-center">
                        <h1 className='text-3xl md:text-5xl tracking-tight font-semibold leading-[3rem]'>
                            If you are a healthcare provider, payor, or caregiver and want to partner with Ai.gnosis, let’s talk!
                        </h1>
                    </div>
                    <div className='px-4 md:px-[20vw] text-center'>
                        <p>Emphasis on partnerships within India, focusing on integration with local healthcare.</p>
                    </div>
                </div>

                {/* Center Image between Boxes */}
                <div className="flex justify-center mt-10 mb-10">
                    <img src="src/assets/brain-icon.png" alt="Brain Icon" className="w-[10rem] h-[10rem]" />
                </div>

                {/* Partnership Benefits Boxes in 2x2 Grid */}
                <div className='w-full max-w-[60vw] grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center mt-10 px-4 md:px-0 mb-10'>
                    {[
                        {
                            title: "Partnership Benefits Overview",
                            description: "Discover the advantages of collaborating with Ai.gnosis, including enhanced patient care, access to cutting-edge tools, and opportunities for joint research initiatives.",
                        },
                        {
                            title: "Scheduling Options",
                            description: "Schedule a consultation with our sales team directly through our integrated calendar, making it convenient for you to discuss partnership opportunities.",
                        },
                        {
                            title: "Quick Contact Form",
                            description: "Fill up the form, and our team will respond promptly to assist you.",
                        },
                        {
                            title: "Resource Downloads",
                            description: "Access valuable resources, such as brochures and case studies, to learn more about our services and the impact of Ai.gnosis in autism detection.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="p-4 rounded-3xl bg-[#1A0C25] bg-gradient-to-b from-[#070B0E] to-[#300834] shadow-lg mb-6">
                            <h1 className="text-xl font-semibold text-white">{item.title}</h1>
                            <p className="mt-2 text-white">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center mt-10 px-4 gap-8 md:gap-16 mb-10">
                <img src="src/assets/brain-icon.png" alt="Brain Icon" className="w-[20vw] h-[20vw] md:w-[10vw] md:h-[10vw] mb-4 md:mb-0"/>
                <div className="w-full md:w-[40%] px-4">
                    <h1 className="text-lg mb-4">
                        Fill up the form, and our team will respond promptly to assist you.
                    </h1>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name*" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md" />
                        <input type="email" placeholder="Your Email*" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md" />
                        <input type="tel" placeholder="Phone number" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md" />
                        <textarea placeholder="Your Message*" className="w-full h-32 px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md resize-none"></textarea>
                        <div className='w-[14rem] cursor-pointer mt-[2rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B740A1] transition-colors duration-300'>
                            <button type="submit" className='text-white'>Submit</button>
                            <div className='w-[2.5rem] h-[2.5rem] justify-center flex items-center text-white text-xl group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]'>
                                <GoArrowUpRight />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Additional Map and Contact Details Section */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center px-4 gap-8 md:gap-16 mt-10 mb-10">
                <div className="w-full md:w-[40%] h-[30vw] mb-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509819!2d144.95592751531588!3d-37.81720997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d25f7fa0a5d!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632822903308!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="w-full md:w-[40%] px-4 mb-6">
                    <h1 className="mb-4">
                        Simply fill in your details below, and we’ll get back to you as soon as possible. You can also find us on the map, showcasing our headquarters and partner locations. For immediate assistance, feel free to call or email us directly!
                    </h1>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md" />
                        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md" />
                        <input type="tel" placeholder="Your Phone Number" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md" />
                        <textarea placeholder="Your Message" className="w-full h-32 px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md resize-none"></textarea>
                        <div className='w-[14rem] cursor-pointer mt-[2rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B740A1] transition-colors duration-300'>
                            <button type="submit" className='text-white'>Send Message</button>
                            <div className='w-[2.5rem] h-[2.5rem] justify-center flex items-center text-white text-xl group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]'>
                                <GoArrowUpRight />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PartnershipPage;
