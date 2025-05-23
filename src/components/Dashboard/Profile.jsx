import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import pic from '../../assets/pic4.png';
import Sessions from './Sessions';
import Header from '../Header';
import { FaUserEdit } from 'react-icons/fa';
import Newnavbar from '../Newnavbar';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility
  const [isEditing, setIsEditing] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div className="mt-[2vw] h-full min-h-screen w-full bg-[#2B1B2D] px-5 py-10 pt-[8vh] font-manrope text-white md:px-10 md:pt-[12vh]">
        <div className="hidden h-full w-full md:block">
          <div
            className="flex h-[7vw] w-full items-center justify-between rounded-3xl px-[5vw]"
            style={{
              background: 'linear-gradient(to right, #B740A1, #9C00AD)',
            }}
          >
            {/* Avatar Section */}
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                {/* Placeholder for Avatar */}
                <span className="text-lg text-white">V</span>
              </div>
              <div>
                <h2 className="text-base font-medium text-white">Welcome</h2>
                <p className="text-xl font-bold text-white">Vinay Prasad</p>
                <p className="text-xs text-white">+9876543567</p>
              </div>
            </div>

            {/* Notification Icon */}
            <div className="text-2xl text-white">
              {/* Bell Icon */}
              <FaBell />
            </div>
          </div>
          {isEditing ? (
            <div className="relative mt-4 h-full w-full rounded-md border-2 border-[#C4C4C45E] bg-[#2B1B2D] px-[4vw] py-6 text-sm text-white">
              <h2 className="mb-4 text-lg font-bold">Add Personal Info (Guardian)</h2>
              <form>
                <div className="grid grid-cols-1 gap-6 pr-[20vw] text-sm md:grid-cols-2">
                  <input type="text" placeholder="Name" className="w-full rounded bg-[#3D253F] p-2 text-white" />
                  <input type="text" placeholder="User name" className="w-full rounded bg-[#3D253F] p-2 text-white" />
                  <input
                    type="text"
                    placeholder="Mobile number"
                    className="w-full rounded bg-[#3D253F] p-2 text-white"
                  />
                  <input type="email" placeholder="Email" className="w-full rounded bg-[#3D253F] p-2 text-white" />
                  <input
                    type="date"
                    placeholder="Date of birth"
                    className="w-full rounded bg-[#3D253F] p-2 text-white"
                  />
                  <select className="w-full rounded bg-[#3D253F] p-2 text-white">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <label className="mb-2 block">Profile Picture</label>
                    <div className="mt-5 flex h-[12vw] w-[12vw] items-center justify-center rounded-md bg-[#3D253F]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9C00AD]">
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="absolute bottom-10 right-10">
                <div className="flex space-x-4">
                  <button type="submit" className="rounded-full border border-[#9C00AD] px-6 py-2 text-white">
                    Save
                  </button>
                </div>
              </div>
              <div className="absolute right-10 top-10">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="rounded-full border border-red-500 px-6 py-2 text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-5 px-5">
                <h3 className="font-semibold">Dashboard</h3>
                <div className="my-2 border-b-2 border-[#B859EA]"></div>
              </div>
              <div className="mt-16 px-5">
                <h3 className="font-semibold">Profile</h3>
                <div className="flex gap-4">
                  <div className="mt-5 flex h-[12vw] w-[12vw] items-center justify-center rounded-md bg-[#3D253F]">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#9C00AD]">
                      <h3 className="font-bold">P1</h3>
                      <FaUserEdit onClick={toggleEdit} className="absolute bottom-0 right-0 cursor-pointer" />
                    </div>
                  </div>
                  <div className="mt-5 flex h-[12vw] w-[12vw] items-center justify-center rounded-md bg-[#3D253F]">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#9C00AD]">
                      <h3 className="font-bold">P2</h3>
                      <FaUserEdit onClick={toggleEdit} className="absolute bottom-0 right-0 cursor-pointer" />
                    </div>
                  </div>
                  <div className="mt-5 flex h-[12vw] w-[12vw] items-center justify-center rounded-md bg-[#3D253F]">
                    <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#9C00AD]">
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 px-5">
                <div
                  className="mt-4 flex h-[5vw] w-full items-center justify-between px-10"
                  style={{
                    background: 'linear-gradient(to left, #4B1056, #280834)',
                  }}
                >
                  {/* Left Section */}
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10">
                      <img src={pic} alt="Child Icon" className="h-full w-full" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        Upto 1 in 5 children are at risk of developmental delays**
                      </p>
                      <p className="mt-1 text-xs font-medium text-white">
                        Take 5 minutes to check if your child is achieving key milestones on time
                      </p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex items-center space-x-8">
                    <button className="text-xl font-bold text-white">Act now</button>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <FaPlus size={12} />
                    </div>
                  </div>
                </div>
              </div>
              <Sessions />
              <Link to={'/prices'} className="flex w-full items-center justify-center border-2 border-zinc-500 py-4">
                <h3 className="font-bold">Book Now</h3>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
