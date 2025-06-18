// import React, { useState, useEffect } from 'react';
// import { FaBell, FaPlus, FaUserEdit } from "react-icons/fa";
// import Newnavbar from '../Newnavbar';
// import Header from '../Header';
// import Profile2 from './Profile2';
// import Profile3 from './Profile3';
// import Profile4 from './Profile4';
// import axios from 'axios';  // Import axios at the top
// import { Link } from 'react-router-dom';
// import Booking from './Booking';

// const Profile1 = () => {
//   const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
//   const token = localStorage.getItem("authToken");
//   const [profiles, setProfiles] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);

//   const handleClick = (buttonIndex) => {
//     setActiveButton(buttonIndex);
//   };

//   const toggleEdit = () => {
//     setIsEditing((prev) => !prev);
//   };

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/api/profiles`, {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });
//         setProfiles(response.data.profiles); // Set the fetched profiles
//       } catch (err) {
//         console.error('Error fetching profiles:', err);
//         // setError('Error fetching profiles');
//       }
//     };
//     fetchProfiles();
//   }, [token]);

//   return (
//     <>

//       <Header />
//       <div className="w-full text-white px-5 md:px-10 py-10 mt-[2vw] font-manrope pt-[8vh] md:pt-[12vh] min-h-screen h-full bg-[#2B1B2D]">
//         <div className="w-full h-full">
//           {/* Welcome Header Section */}
//           <div
//             className="w-full h-[7vw] flex items-center rounded-3xl max-sm:h-[20vw] justify-between px-[5vw] md:px-10"
//             style={{
//               background: 'linear-gradient(to right, #B740A1, #9C00AD)',
//             }}
//           >
//             {/* Avatar Section */}
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
//                 {profiles.length > 0 && profiles[0].profilePicUrl ? (
//                   <div className="w-full h-full bg-gray-500 overflow-hidden rounded-full flex items-center justify-center">
//                     <img
//                       className="w-full h-full object-cover"
//                       src={profiles[0].profilePicUrl}
//                       alt="Profile"
//                     />
//                   </div>

//                 ) : (
//                   <div className="w-full h-full bg-gray-500 rounded-full flex items-center justify-center">
//                     <span className="text-white text-lg">?</span> {/* Default placeholder */}
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <h2 className="text-white text-base font-medium">Welcome</h2>
//                 {profiles.length > 0 ? (
//                   <>
//                     <p className="text-white font-bold text-xl">{profiles[0].name}</p>
//                     <p className="text-white text-xs">{profiles[0].email}</p>
//                   </>
//                 ) : (
//                   <p className="text-white text-xs">No profile data available</p>
//                 )}
//               </div>
//             </div>
//             {/* Notification Icon */}
//             <div className="text-white text-2xl">
//               <FaBell />
//             </div>
//           </div>

//           {/* Edit Profile Section */}
//           {isEditing ? (
//             <div className="mt-4 relative border-2 border-[#C4C4C45E] w-full h-full bg-[#2B1B2D] text-sm text-white px-[4vw] py-6 rounded-md">
//               <h2 className="text-lg font-bold mb-4">Add Personal Info (Guardian)</h2>
//               <form>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     className="w-full p-2 rounded bg-[#3D253F] text-white"
//                   />
//                   <input
//                     type="text"
//                     placeholder="User name"
//                     className="w-full p-2 rounded bg-[#3D253F] text-white"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Mobile number"
//                     className="w-full p-2 rounded bg-[#3D253F] text-white"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="w-full p-2 rounded bg-[#3D253F] text-white"
//                   />
//                   <input
//                     type="date"
//                     placeholder="Date of birth"
//                     className="w-full p-2 rounded bg-[#3D253F] text-white"
//                   />
//                   <select className="w-full p-2 rounded bg-[#3D253F] text-white">
//                     <option value="">Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//                 <div className="mt-4 flex justify-between items-center">
//                   <div>
//                     <label className="block mb-2">Profile Picture</label>
//                     <div className="w-[12vw] h-[12vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
//                       <div className="w-14 flex justify-center items-center h-14 bg-[#9C00AD] rounded-full">
//                         <FaPlus />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//               <div className="absolute bottom-10 right-10">
//                 <button
//                   type="submit"
//                   className="border border-[#9C00AD] px-6 py-2 rounded-full text-white"
//                 >
//                   Save
//                 </button>
//               </div>
//               <div className="absolute top-5 right-10 max-sm:right-[4vw]">
//                 <button
//                   type="button"
//                   onClick={() => setIsEditing(false)}
//                   className="border border-red-500 px-6 py-2 rounded-full m text-white"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               {/* Dashboard Container */}
//               <div className="mt-5 px-5">
//                 <h3 className="font-semibold">
//                   <Link to="/dashboard">Dashboard</Link>  -<span className="text-[#9C00AD] ml-1"><Link to="/profile1">Profiles</Link></span>
//                 </h3>
//               </div>

//               {/* Profile and P1 Container */}
//               <div className="mt-5 px-5 flex flex-wrap items-center justify-between">
//                 {/* Left Section: Profile */}
//                 <h3 className="font-semibold">Profile</h3>

//                 {/* Right Section: P1 */}
//                 {/* <div className="w-14 flex relative justify-center items-center h-14 bg-[#9C00AD] rounded-full">
//                   <h3 className="font-bold">P1</h3>
//                   <FaUserEdit
//                     onClick={toggleEdit}
//                     className="absolute cursor-pointer bottom-0 right-0"
//                   />
//                 </div> */}
//               </div>

//               <div className="border-b-2 my-2 border-[#B859EA]"></div>
//               <div className="flex flex-wrap justify-between gap-4 mt-4">
//                 {/* <button
//                   onClick={() => handleClick(1)}
//                   className={`flex items-center px-4 py-2 bg-transparent text-white max-sm:w-[42vw] max-sm:h-[20vw] border-[#FB7CE4] border-[1px] rounded-md shadow-md ${
//                     activeButton === 1 ? "underline" : ""
//                   }`}
//                 >
//                   <span>📅</span>
//                   <span className="ml-2">Book my appointment</span>
//                 </button> */}
//                 <button
//                   onClick={() => handleClick(2)}
//                   className={`flex items-center px-4 py-2 bg-transparent text-white max-sm:w-[42vw] border-[#FB7CE4] border-[1px] rounded-md shadow-md ${
//                     activeButton === 2 ? "underline" : ""
//                   }`}
//                 >
//                   <span>📄</span>
//                   <span className="ml-2">My Assessments</span>
//                 </button>
//                 {/* <button
//                   onClick={() => handleClick(3)}
//                   className={`flex items-center px-4 py-2 bg-transparent text-white max-sm:w-[42vw] max-sm:h-[20vw] border-[#FB7CE4] border-[1px] rounded-md shadow-md ${
//                     activeButton === 3 ? "underline" : ""
//                   }`}
//                 >
//                   <span>📋</span>
//                   <span className="ml-2">My sessions</span>
//                 </button> */}

//               </div>
//               {activeButton === 1 && (
//                 <div>
//                   <Booking />
//                 </div>
//               )}
//               {activeButton === 2 && (
//                 <div>
//                   <Profile2 />
//                 </div>
//               )}
//               {activeButton === 3 && (
//                 <div>
//                   <Profile3 />
//                 </div>
//               )}

//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile1;

import { useState, useEffect } from 'react';
import { FaBell, FaPlus } from 'react-icons/fa';
// import Newnavbar from '../Newnavbar';
import Header from '../Header';
import Profile2 from './Profile2';
import Profile3 from './Profile3';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Booking from './Booking';

const Profile1 = () => {
  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
  const token = localStorage.getItem('authToken');
  const [profiles, setProfiles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('assessments'); // Default to assessments

  const showSection = (sectionName) => {
    setActiveSection(sectionName);
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/profiles`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfiles(response.data.profiles);
      } catch (err) {
        console.error('Error fetching profiles:', err);
      }
    };

    fetchProfiles();
  }, [API_BASE_URL, token]);

  // Render profile information
  const renderProfileInfo = () => {
    if (profiles.length > 0) {
      const profile = profiles[0];
      return (
        <>
          <p className="text-xl font-bold text-white">{profile.name}</p>
          <p className="text-xs text-white">{profile.email}</p>
        </>
      );
    }
    return <p className="text-xs text-white">No profile data available</p>;
  };

  // Render profile picture
  const renderProfilePicture = () => {
    if (profiles.length > 0 && profiles[0].profilePicUrl) {
      return (
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full">
          <img className="h-full w-full object-cover" src={profiles[0].profilePicUrl} alt="Profile" />
        </div>
      );
    }
    return (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-500">
        <span className="text-lg text-white">?</span>
      </div>
    );
  };

  return (
    <>
      {/* <Newnavbar /> */}
      <Header />
      <div className="h-full min-h-screen w-full bg-[#2B1B2D] px-5 py-10 pt-[8vh] font-manrope text-white md:px-10 md:pt-[12vh]">
        <div className="h-full w-full">
          {/* Welcome Header Section */}
          <div
            className="flex h-[7vw] w-full items-center justify-between rounded-3xl px-[5vw] max-sm:h-[20vw] md:px-10"
            style={{
              background: 'linear-gradient(to right, #B740A1, #9C00AD)',
            }}
          >
            {/* Avatar Section */}
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                {renderProfilePicture()}
              </div>
              <div>
                <h2 className="text-base font-medium text-white">Welcome</h2>
                {renderProfileInfo()}
              </div>
            </div>
            {/* Notification Icon */}
            <div className="cursor-pointer text-2xl text-white transition-colors hover:text-pink-300">
              <FaBell />
            </div>
          </div>

          {/* Edit Profile Section */}
          {isEditing ? (
            <div className="relative mt-4 h-full w-full rounded-md border-2 border-[#C4C4C45E] bg-[#2B1B2D] px-[4vw] py-6 text-sm text-white">
              <h2 className="mb-4 text-lg font-bold">Add Personal Info (Guardian)</h2>
              <form>
                <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded bg-[#3D253F] p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]"
                  />
                  <input
                    type="text"
                    placeholder="User name"
                    className="w-full rounded bg-[#3D253F] p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]"
                  />
                  <input
                    type="text"
                    placeholder="Mobile number"
                    className="w-full rounded bg-[#3D253F] p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded bg-[#3D253F] p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]"
                  />
                  <input
                    type="date"
                    placeholder="Date of birth"
                    className="w-full rounded bg-[#3D253F] p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]"
                  />
                  <select className="w-full rounded bg-[#3D253F] p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="mb-2 block">Profile Picture</label>
                  <div className="mt-2 flex h-[12vw] max-h-[100px] w-[12vw] max-w-[100px] cursor-pointer items-center justify-center rounded-md bg-[#3D253F] transition-colors hover:bg-[#4D354F]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9C00AD]">
                      <FaPlus />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="rounded-full border border-red-500 px-6 py-2 text-white transition-colors hover:bg-red-500 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-full border border-[#9C00AD] bg-[#9C00AD] px-6 py-2 text-white transition-colors hover:bg-[#8C009D]"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <>
              {/* Dashboard Container */}
              <div className="mt-5 px-5">
                <h3 className="font-semibold">
                  <Link to="/dashboard" className="transition-colors hover:text-[#FB7CE4]">
                    Dashboard
                  </Link>{' '}
                  -
                  <span className="ml-1 text-[#9C00AD]">
                    <Link to="/profile" className="transition-colors hover:text-[#FB7CE4]">
                      Profiles
                    </Link>
                  </span>
                </h3>
              </div>

              {/* Profile Container */}
              <div className="mt-5 px-5">
                <h3 className="mb-4 text-xl font-semibold">Profile</h3>
                <div className="my-2 border-b-2 border-[#B859EA]"></div>
              </div>

              {/* Navigation Buttons */}
              <div className="mt-4 flex flex-wrap justify-start gap-4 px-5">
                <button
                  onClick={() => showSection('booking')}
                  className={`flex items-center rounded-md border-[1px] border-[#FB7CE4] bg-transparent px-4 py-2 text-white shadow-md transition-colors hover:bg-[#3D253F] max-sm:w-[42vw] ${
                    activeSection === 'booking' ? 'border-[#9C00AD] bg-[#3D253F]' : ''
                  }`}
                >
                  <span>📅</span>
                  <span className="ml-2">Book my appointment</span>
                </button>
                <button
                  onClick={() => showSection('assessments')}
                  className={`flex items-center rounded-md border-[1px] border-[#FB7CE4] bg-transparent px-4 py-2 text-white shadow-md transition-colors hover:bg-[#3D253F] max-sm:w-[42vw] ${
                    activeSection === 'assessments' ? 'border-[#9C00AD] bg-[#3D253F]' : ''
                  }`}
                >
                  <span>📄</span>
                  <span className="ml-2">My Assessments</span>
                </button>
                <button
                  onClick={() => showSection('sessions')}
                  className={`flex items-center rounded-md border-[1px] border-[#FB7CE4] bg-transparent px-4 py-2 text-white shadow-md transition-colors hover:bg-[#3D253F] max-sm:w-[42vw] ${
                    activeSection === 'sessions' ? 'border-[#9C00AD] bg-[#3D253F]' : ''
                  }`}
                >
                  <span>📋</span>
                  <span className="ml-2">My sessions</span>
                </button>
              </div>

              {/* Content Section */}
              <div className="mt-6 px-5">
                {activeSection === 'booking' && <Booking />}
                {activeSection === 'assessments' && <Profile2 />}
                {activeSection === 'sessions' && <Profile3 />}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile1;
