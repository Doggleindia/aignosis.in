import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDiscord, FaTwitter, FaMedium, FaBlog } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer text-white">
            <div className='w-full h-auto bg-[#731762] flex flex-col items-center p-6 md:p-12'>
                <h1 className='text-lg md:text-xl lg:text-2xl tracking-wide uppercase font-montserrat mt-4 md:mt-6 lg:mt-8'>
                    Get in Touch or Visit Us
                </h1>
                <h1 className='text-sm md:text-base lg:text-lg mt-4 text-center px-4 lg:px-0'>
                    Stay connected with us! Follow us for the latest updates, news, and insights. We’d love to engage with you online!
                </h1>
                <div className='flex justify-center gap-4 md:gap-8 lg:gap-10 mt-6 md:mt-8 items-center'>
                    <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                        <FaTwitter />
                    </div>
                    <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                        <FaDiscord />
                    </div>
                    <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                        <FaMedium />
                    </div>
                    <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                        <FaBlog />
                    </div>
                </div>
                <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-6 text-center font-raleway'>
                    <h1 className="text-sm md:text-base">Twitter</h1>
                    <h1 className="text-sm md:text-base">Discord</h1>
                    <h1 className="text-sm md:text-base">Medium</h1>
                    <h1 className="text-sm md:text-base">Blog</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
