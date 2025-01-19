import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import pic from "../../assets/pic4.png"
import Sessions from './Sessions';
import Header from '../Header';
const Dashboard = () => {
  return (
    <> 
      <Header/>
      <div className='w-full text-white px-5 md:px-10 py-10 font-manrope pt-[8vh] md:pt-[12vh] h-full bg-[#2B1B2D]'>
        <div className="w-full h-full md:block hidden">
          <div
            className="w-full h-[7vw] flex items-center rounded-3xl justify-between px-[5vw]"
            style={{
              background: 'linear-gradient(to right, #B740A1, #9C00AD)',
            }}
          >
            {/* Avatar Section */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                {/* Placeholder for Avatar */}
                <span className="text-white text-lg">V</span>
              </div>
              <div>
                <h2 className="text-white text-base font-medium">Welcome</h2>
                <p className="text-white font-bold text-xl">Vinay Prasad</p>
                <p className="text-white text-xs">+9876543567</p>
              </div>
            </div>

            {/* Notification Icon */}
            <div className="text-white text-2xl">
              {/* Bell Icon */}
              <FaBell />
            </div>
          </div>
          <div className="mt-5 px-5">
            <h3 className='font-semibold'>Dashboard</h3>
            <div className="border-b-2 my-2 border-[#B859EA]"></div>
          </div>
          <div className="mt-16 px-5">
            <h3 className='font-semibold'>Profile</h3>
            <div className="w-[12vw] h-[12vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
              <div className="w-14 flex justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                <FaPlus />
              </div>
            </div>
          </div>
          <div className="mt-5 px-5">
            <div
              className="w-full h-[5vw] flex items-center justify-between px-10 mt-4"
              style={{
                background: 'linear-gradient(to left, #4B1056, #280834)',
              }}
            >
              {/* Left Section */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10">
                  {/* Placeholder for Icon */}
                  <img
                    src={pic}
                    alt="Child Icon"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">
                    Upto 1 in 5 children are at risk of developmental delays**
                  </p>
                  <p className="text-white font-medium mt-1 text-xs">
                    Take 5 minutes to check if your child is achieving key milestones on time
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-8">
                <button className="text-white font-bold text-xl">
                  Act now
                </button>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                  <FaPlus size={12} />

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:hidden block py-4">
          {/* Avatar Section */}
          <div
            className="w-full h-20 flex items-center rounded-2xl justify-between px-4"
            style={{
              background: 'linear-gradient(to right, #B740A1, #9C00AD)',
            }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-white text-base">V</span>
              </div>
              <div>
                <h2 className="text-white text-sm font-medium">Welcome</h2>
                <p className="text-white font-bold text-lg">Vinay Prasad</p>
                <p className="text-white text-xs">+9876543567</p>
              </div>
            </div>            
            {/* Notification Icon */}
            <div className="text-white text-xl">
              <FaBell />
            </div>
          </div>

          {/* Dashboard Section */}
          <div className="mt-5">
            <h3 className="font-semibold text-sm">Dashboard</h3>
            <div className="border-b-2 my-2 border-[#B859EA]"></div>
          </div>

          {/* Profile Section */}
          <div className="mt-10">
            <h3 className="font-semibold text-sm">Profile</h3>
            <div className="w-24 h-24 bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
              <div className="w-10 h-10 bg-[#9C00AD] flex justify-center items-center rounded-full">
                <FaPlus />
              </div>
            </div>
          </div>

          {/* Notification Banner */}
          <div
            className="w-full flex flex-col justify-between items-start mt-6 rounded-lg p-4"
            style={{
              background: 'linear-gradient(to left, #4B1056, #280834)',
            }}
          >
            <div className="flex space-x-4 items-center">
              <div className="w-[100px] h-full">
                <img src={pic} alt="Child Icon" className="w-full h-full" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  Upto 1 in 5 children are at risk of developmental delays**
                </p>
                <p className="text-white text-xs font-medium mt-1">
                  Take 5 minutes to check if your child is achieving key milestones on time
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-full mt-4">
              <button className="text-white text-center font-bold text-xl">Act now</button>
            </div>
          </div>
        </div>

        <Sessions />
        <button className="w-full border-2 flex justify-center items-center border-zinc-500 py-4">
          <h3 className='font-bold'>Book Now</h3>
        </button>
      </div>
    </>
  )
}

export default Dashboard