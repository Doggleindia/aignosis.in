import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

function Footer() {
    return (
        <div className="footer text-white">
                <div className='w-full flex-col  h-[20vw] bg-[#731762] flex justify-start items-center'>
                    <h1 className='tracking-[.5vw] uppercase font-montserrat mt-[5vw]'>Get in Touch or Visit Us</h1>
                    <h1 className='mt-4 tracking-wider'>Stay connected with us! Follow us for the latest updates, news, and insights. We’d love to engage with you online!</h1>
                    <div className='flex justify-center gap-[4vw] mt-10 items-center'>
                        <div className="w-[5vw] h-[5vw] text-3xl rounded-3xl text-[#731762] bg-[#2d153f] flex justify-center items-center">
                            <FaTwitter />
                        </div>
                        <div className="w-[5vw] h-[5vw] text-3xl rounded-3xl text-[#731762] bg-[#2d153f] flex justify-center items-center">
                            <FaDiscord />
                        </div>
                        <div className="w-[5vw] h-[5vw] text-3xl rounded-3xl text-[#731762] bg-[#2d153f] flex justify-center items-center">
                            <FaMedium />
                        </div>
                    </div>
                    <div className='flex text-center justify-center font-raleway gap-[5vw] mt-4 items-center'>
                        <h1>Twitter</h1>
                        <h1 className='ml-5'>Discord</h1>
                        <h1 className='ml-5'>Medium</h1>
                    </div>
                </div>
            </div>
    );
}

export default Footer;