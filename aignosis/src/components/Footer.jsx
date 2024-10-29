import React from 'react';
import { FaTwitter, FaDiscord, FaMedium } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer bg-[#520451] w-full h-[20vw] flex flex-col items-center justify-center text-center text-white">
            <div className="text-section mb-[3vw]">
                <h1 className="text-lg uppercase font-semibold mb-[1vw]">Get in Touch or Visit Us</h1>
                <p className="text-sm max-w-[30vw] mx-auto">
                    Stay connected with us! Follow us for the latest updates, news, and insights. We’d love to engage with you online!
                </p>
            </div>

            <div className="social-icons flex gap-[2vw] mt-[2vw]">
                <button>
                    <FaTwitter size={30} className="text-white hover:text-gray-300" />
                    <p className="text-xs mt-1">Twitter</p>
                </button>
                <button>
                    <FaDiscord size={30} className="text-white hover:text-gray-300" />
                    <p className="text-xs mt-1">Discord</p>
                </button>
                <button>
                    <FaMedium size={30} className="text-white hover:text-gray-300" />
                    <p className="text-xs mt-1">Medium</p>
                </button>
            </div>
        </div>
    );
}

export default Footer;