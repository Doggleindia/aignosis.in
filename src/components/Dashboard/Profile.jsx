import React, { useState } from 'react'
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import pic from "../../assets/pic4.png"
import Sessions from './Sessions';
import Header from '../Header';
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <Header />
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
                        <div className="flex gap-4">
                            <div className="w-[12vw] h-[12vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                <div className="w-14 flex relative justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                                    <h3 className='font-bold'>P1</h3>
                                    <FaUserEdit onClick={togglePopup} className='absolute cursor-pointer bottom-0 right-0' />
                                </div>
                            </div>
                            <div className="w-[12vw] h-[12vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                <div className="w-14 flex relative justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                                    <h3 className='font-bold'>P2</h3>
                                    <FaUserEdit onClick={togglePopup} className='absolute cursor-pointer bottom-0 right-0' />
                                </div>
                            </div>
                            <div className="w-[12vw] h-[12vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                <div className="w-14 flex justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                                    <FaPlus />
                                </div>
                            </div>
                        </div>
                    </div>
                    {isPopupOpen && (
                        <div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                            onClick={togglePopup} // Close popup when clicking outside the modal
                        >
                            <div
                                className="bg-[#2B1B2D] text-sm text-white px-[4vw] py-[10vw] rounded-md w-[90%] md:w-[50%]"
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                            >
                                <h2 className="text-lg font-bold mb-4">Add Personal info (Guardin) </h2>
                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        />
                                        <input
                                            type="text"
                                            placeholder="User name"
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Mobile number"
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        />
                                        <input
                                            type="date"
                                            placeholder="Date of birth"
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        />
                                        <select
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        >
                                            <option value="">Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div>
                                            <label className="block mb-2">Profile Picture</label>
                                            <div className="w-[8vw] h-[8vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                                <div className="w-14 flex justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                                                    <FaPlus />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-[#9C00AD] px-6 py-2 rounded text-white"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
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
                        <div className="grid grid-cols-3 gap-4">
                            <div className="w-24 h-24 bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                <div className="w-10 h-10 relative  bg-[#9C00AD] flex justify-center items-center rounded-full">
                                    <h3>P1</h3>
                                    <FaUserEdit onClick={togglePopup} className='absolute cursor-pointer -bottom-1 -right-1' />
                                </div>
                            </div>
                            <div className="w-24 h-24 bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                <div className="w-10 h-10 relative bg-[#9C00AD] flex justify-center items-center rounded-full">
                                    <h3>P2</h3>
                                    <FaUserEdit onClick={togglePopup} className='absolute cursor-pointer -bottom-1 -right-1' />
                                </div>
                            </div>
                            <div className="w-24 h-24 bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                <div className="w-10 h-10 bg-[#9C00AD] flex justify-center items-center rounded-full">
                                    <FaPlus />
                                </div>
                            </div>
                        </div>
                    </div>
                    {isPopupOpen && (
                        <div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                            onClick={togglePopup} // Close popup when clicking outside the modal
                        >
                            <div
                                className="bg-[#2B1B2D] text-sm text-white px-[4vw] py-[6vw] rounded-md w-[90%] md:w-[50%]"
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                            >
                                <h2 className="text-lg font-bold mb-4">Add Personal info (Guardin) </h2>
                                <form>
                                    <div className="grid px-4 grid-cols-1 gap-4">
                                        {/* Name Input */}
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        />
                                        {/* Username Input */}
                                        <input
                                            type="text"
                                            placeholder="User name"
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        />
                                        {/* Mobile Number Input */}
                                        <input
                                            type="text"
                                            placeholder="Mobile number"
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        />
                                        {/* Email Input */}
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        />
                                        {/* Date of Birth Input */}
                                        <input
                                            type="date"
                                            placeholder="Date of birth"
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        />
                                        {/* Gender Selection */}
                                        <select
                                            className="w-full p-2 rounded bg-[#3D253F] text-white"
                                        >
                                            <option value="">Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="mt-4 flex flex-col items-center gap-4">
                                        {/* Profile Picture */}
                                        <div>
                                            <label className="block mb-2 text-center">Profile Picture</label>
                                            <div className="w-24 h-24 bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                                <div className="w-10 h-10 bg-[#9C00AD] flex justify-center items-center rounded-full">
                                                    <FaPlus />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Save Button */}
                                        <button
                                            type="submit"
                                            className="bg-[#9C00AD] w-full px-6 py-2 rounded text-white"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

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

export default Profile