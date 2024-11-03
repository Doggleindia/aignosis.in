import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import Header from './Header';

const Homepage = () => {
    return (
        <div className='h-screen max-sm:h-[80vh] text-white w-full font-montserrat bg-[#1A0C25]'>
            <Header />
            <div className="body w-full h-[30rem] relative flex flex-col justify-center items-center">
                {/* Uncomment if needed */}
                {/* <img src={img1} alt="" className='w-full opacity-90 h-[40rem] relative object-cover' /> */}
                <div className='w-full h-full absolute flex flex-col justify-center items-center'>
                    <div className="flex flex-col items-center space-y-2">
                        <h1 className="text-center tracking-tight text-3xl md:text-4xl font-semibold font-manrope text-[#F0F0F0]">
                            Frontier AI for Your Child’s
                        </h1>
                        <h1 className="text-center tracking-tight text-3xl md:text-4xl font-semibold font-manrope text-[#F0F0F0]">
                            Best Development
                        </h1>
                    </div>
                    <Link to="/learn-more" className='w-[50%] sm:w-[14rem] cursor-pointer mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B7407D] transition-colors duration-300'>
    <span className='text-white text-sm sm:text-base flex-grow text-center'>Learn more</span>
    <div className='w-[2.5rem] h-[2.5rem] flex justify-center items-center text-white text-xl ml-2 group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1] mr-1'>
        <GoArrowUpRight />
    </div>
</Link>

                </div>
            </div>
        </div>
    );
}

export default Homepage;
