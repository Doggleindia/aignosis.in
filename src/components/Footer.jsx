import React from 'react';
import { FaTwitter, FaDiscord, FaMedium, FaBlog, FaLock, FaFileAlt, FaMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer text-white">
      <div className="flex h-auto w-full flex-col items-center bg-[#731762] p-6 md:p-12">
        <h1 className="mt-4 font-montserrat text-lg uppercase tracking-wide md:mt-6 md:text-xl lg:mt-8 lg:text-2xl">
          Get in Touch or Visit Us
        </h1>
        <h1 className="mt-4 px-4 text-center text-sm md:text-base lg:px-0 lg:text-lg">
          Stay connected with us! Follow us for the latest updates, news, and insights. We’d love to engage with you
          online!
        </h1>
        <div className="mt-6 flex items-center justify-center gap-8 max-sm:gap-[3vw] md:mt-8 md:gap-10">
          {/* Group icon and text together */}
          {/* <div className="flex flex-col items-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                            <FaTwitter />
                        </div>
                        <h1 className="text-sm md:text-base mt-2">Twitter</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                            <FaDiscord />
                        </div>
                        <h1 className="text-sm md:text-base mt-2">Discord</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                            <FaMedium />
                        </div>
                        <h1 className="text-sm md:text-base mt-2">Medium</h1>
                    </div> */}
          <Link to="/blog" className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d153f] text-2xl text-[#731762] md:h-16 md:w-16 md:text-3xl">
              <FaBlog />
            </div>
            <h1 className="mt-2 text-sm md:text-base">Blog</h1>
          </Link>
          <Link to="/privacy-policy" className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d153f] text-2xl text-[#731762] md:h-16 md:w-16 md:text-3xl">
              <FaLock />
            </div>
            <h1 className="mt-2 text-sm md:text-base">Privacy Policy</h1>
          </Link>

          <Link to="/terms" className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d153f] text-2xl text-[#731762] md:h-16 md:w-16 md:text-3xl">
              <FaFileAlt />
            </div>
            <h1 className="mt-2 text-sm md:text-base">Terms & Conditions</h1>
          </Link>
          <Link to="/refundandreschedule" className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d153f] text-2xl text-[#731762] md:h-16 md:w-16 md:text-3xl">
              <FaMoneyBillAlt />
            </div>
            <h1 className="mt-2 text-sm md:text-base">Refund & Reschedule</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
