import React from 'react'
import img1 from '../assets/images/image 32.png'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';



const Homepage = () => {
    return (
        <div className='h-screen text-white w-full font-montserrat bg-[#1A0C25]'>
            <div className="navbar text-center w-full h-[7rem] flex justify-between items-center px-[12rem]">
                <div class="relative justify-center items-center inline-block">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                    <a href="" class="relative text-3xl font-semibold tracking-wide text-white z-10">Ai.gnosis</a>
                </div>
                <div className='flex justify-center font-medium items-center gap-[8rem]'>
                    <a href="">Services</a>
                    <Link to='/aboutus'>About</Link>
                    <Link to='/prices'>prices</Link>
                    
                    <div className='w-[18rem] gap-4 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] h-[3.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300'>
                        <a href="">Book an appointment</a>
                        <div className='w-[2.5rem] text-white group-hover:text-black text-xl flex justify-center items-center h-[2.5rem] rounded-full bg-[#B740A1] group-hover:bg-white'>
                            <GoArrowUpRight />
                        </div>
                    </div>


                </div>
            </div>
            <div className="body w-full mt-[10rem] h-[30rem] relative flex-col flex justify-center items-center">
                {/* <img src={img1} alt="" className='w-full opacity-90 h-[40rem] relative object-cover' /> */}
                <div className='w-full h-full absolute flex-col flex justify-center items-center'>
                    <h1 className='text-center tracking-tight text-8xl font-semibold'>Frontier AI for Your Child’s</h1>
                    <h1 className='text-center mt-1 tracking-tight text-7xl font-semibold'>Best Development</h1>
                    <div className='w-[14rem] cursor-pointer mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B740A1] transition-colors duration-300'>
                        <a href="" className='text-white'>Learn more</a>
                        <div className='w-[2.5rem] h-[2.5rem] justify-center flex items-center text-white text-xl group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]'>
                        <GoArrowUpRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage