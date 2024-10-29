import React from 'react'
import bg from '../assets/images/bg3.png'





const Screen3 = () => {
  return (
    <div className='h-screen text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25]'>
        <div className="w-full h-[90%] flex justify-center items-center flex-col border-t rounded-3xl border-[#B874B580]">
            <div className='w-full flex-col h-[25vw] justify-center flex items-center'>
                <div className="flex justify-center gap-5 items-center">
                    <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
                    <h1 className='text-[#F1C6FE]'>Understanding the Numbers</h1>
                    <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
                </div>
                <div className=" mt-[2rem]">
                    <h1 className='text-center text-7xl tracking-tight font-semibold leading-[3rem]'>Understanding the Numbers</h1>
                    <h1 className='text-center text-6xl italic tracking-tight font-semibold mt-5 leading-[3rem]'>Developmental Delays & Autism</h1>
                </div>
                <div className='px-[25rem] mt-[2rem]'>
                    <p className='text-center'>Gain insight into the prevalence of developmental challenges and autism among children. Each data point highlights the urgency of early detection, supporting parents with reliable information to act quickly. Learn more about the numbers that drive our mission.</p>
                </div>
            </div>
            <div className='w-[60%] h-[20vw] flex border border-[#B874B540] rounded-3xl' >
                <div className="w-[50%] ml-[5rem] text-4xl h-full flex flex-col justify-center items-start">
                    <h1 className='font-medium '><span className='text-[#811098] italic '>1 in 10</span>    children experience</h1>
                    <h1 className='font-medium justify-center items-center gap-4 flex text-left'>developmental delays <span className='w-[2rem] text-xs h-[2rem] rounded-full flex justify-center items-center bg-red-600'>SOS</span></h1>
                    <h1 className='text-base mt-2'>Early identification is crucial for support</h1>
                    <div className='w-[10rem] cursor-pointer group hover:bg-[#B740A1] transition-colors duration-300 mt-[2rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3rem] bg-transparent'>
                        <a href="" className='text-white  text-base'>Learn more</a>
                    </div>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center">
                    <img className='w-[60%] h-[60%] object-cover' src={bg} alt="" srcset="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Screen3