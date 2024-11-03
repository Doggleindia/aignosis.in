import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/herobg.gif';

const HeroSection = () => {
  return (
    <div className="body w-full  h-[30rem] relative flex-col flex justify-center items-center">
    <img src={img1} alt="" className='w-full opacity-90 h-[40rem] relative object-cover' />
    <div className='w-full h-full absolute flex-col flex justify-center items-center'>
        <div className="flex flex-row items-center space-y-1">
            <h1 className="text-center text-fuchsia-50 tracking-tight text-3xl font-semibold">
                Frontier AI for Your Child’s
            </h1>
            <h1 className="text-center ml-24 text-fuchsia-50 tracking-tight text-3xl font-semibold">
                Best Development
            </h1>
        </div>
        <Link to="/learn-more" className='w-[14rem] cursor-pointer mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B740A1] transition-colors duration-300'>
            <span className='text-white'>Learn more</span>
            <div className='w-[2.5rem] h-[2.5rem] justify-center flex items-center text-white text-xl group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]'>
                <GoArrowUpRight />
            </div>
        </Link>
    </div>
</div>
  )
}

export default HeroSection