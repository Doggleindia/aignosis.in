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


import React, { useState, useEffect } from 'react';
import { FaBell, FaPlus } from "react-icons/fa";
import Newnavbar from '../Newnavbar';
import Header from '../Header';
import Profile2 from './Profile2';
import Profile3 from './Profile3';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Booking from './Booking';

const Profile1 = () => {
  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
  const token = localStorage.getItem("authToken");
  const [profiles, setProfiles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState("assessments"); // Default to assessments

  const showSection = (sectionName) => {
    setActiveSection(sectionName);
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/profiles`, {
          headers: {
            'Authorization': `Bearer ${token}`,
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
          <p className="text-white font-bold text-xl">{profile.name}</p>
          <p className="text-white text-xs">{profile.email}</p>
        </>
      );
    }
    return <p className="text-white text-xs">No profile data available</p>;
  };

  // Render profile picture
  const renderProfilePicture = () => {
    if (profiles.length > 0 && profiles[0].profilePicUrl) {
      return (
        <div className="w-full h-full overflow-hidden rounded-full flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            src={profiles[0].profilePicUrl}
            alt="Profile"
          />
        </div>
      );
    }
    return (
      <div className="w-full h-full bg-gray-500 rounded-full flex items-center justify-center">
        <span className="text-white text-lg">?</span>
      </div>
    );
  };

  return (
    <>
      <Newnavbar />
      <Header />
      <div className="w-full text-white px-5 md:px-10 py-10 mt-[2vw] font-manrope pt-[8vh] md:pt-[12vh] min-h-screen h-full bg-[#2B1B2D]">
        <div className="w-full h-full">
          {/* Welcome Header Section */}
          <div
            className="w-full h-[7vw] flex items-center rounded-3xl max-sm:h-[20vw] justify-between px-[5vw] md:px-10"
            style={{
              background: 'linear-gradient(to right, #B740A1, #9C00AD)',
            }}
          >
            {/* Avatar Section */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                {renderProfilePicture()}
              </div>
              <div>
                <h2 className="text-white text-base font-medium">Welcome</h2>
                {renderProfileInfo()}
              </div>
            </div>
            {/* Notification Icon */}
            <div className="text-white text-2xl cursor-pointer hover:text-pink-300 transition-colors">
              <FaBell />
            </div>
          </div>

          {/* Edit Profile Section */}
          {isEditing ? (
            <div className="mt-4 relative border-2 border-[#C4C4C45E] w-full h-full bg-[#2B1B2D] text-sm text-white px-[4vw] py-6 rounded-md">
              <h2 className="text-lg font-bold mb-4">Add Personal Info (Guardian)</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 rounded bg-[#3D253F] text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]"
                  />
                  <input
                    type="text"
                    placeholder="User name"
                    className="w-full p-2 rounded bg-[#3D253F] text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]"
                  />
                  <input
                    type="text"
                    placeholder="Mobile number"
                    className="w-full p-2 rounded bg-[#3D253F] text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 rounded bg-[#3D253F] text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]"
                  />
                  <input
                    type="date"
                    placeholder="Date of birth"
                    className="w-full p-2 rounded bg-[#3D253F] text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]"
                  />
                  <select className="w-full p-2 rounded bg-[#3D253F] text-white focus:outline-none focus:ring-2 focus:ring-[#9C00AD]">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block mb-2">Profile Picture</label>
                  <div className="w-[12vw] h-[12vw] max-w-[100px] max-h-[100px] bg-[#3D253F] flex justify-center items-center mt-2 rounded-md cursor-pointer hover:bg-[#4D354F] transition-colors">
                    <div className="w-14 flex justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                      <FaPlus />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-6 space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="border border-red-500 px-6 py-2 rounded-full text-white hover:bg-red-500 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="border border-[#9C00AD] px-6 py-2 rounded-full text-white bg-[#9C00AD] hover:bg-[#8C009D] transition-colors"
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
                  <Link to="/dashboard" className="hover:text-[#FB7CE4] transition-colors">Dashboard</Link> - 
                  <span className="text-[#9C00AD] ml-1">
                    <Link to="/profile1" className="hover:text-[#FB7CE4] transition-colors">Profiles</Link>
                  </span>
                </h3>
              </div>
          
              {/* Profile Container */}
              <div className="mt-5 px-5">
                <h3 className="font-semibold text-xl mb-4">Profile</h3>
                <div className="border-b-2 my-2 border-[#B859EA]"></div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-wrap justify-start gap-4 mt-4 px-5">
                <button
                  onClick={() => showSection("booking")}
                  className={`flex items-center px-4 py-2 bg-transparent text-white max-sm:w-[42vw] border-[#FB7CE4] border-[1px] rounded-md shadow-md hover:bg-[#3D253F] transition-colors ${
                    activeSection === "booking" ? "bg-[#3D253F] border-[#9C00AD]" : ""
                  }`}
                >
                  <span>📅</span>
                  <span className="ml-2">Book my appointment</span>
                </button>
                <button
                  onClick={() => showSection("assessments")}
                  className={`flex items-center px-4 py-2 bg-transparent text-white max-sm:w-[42vw] border-[#FB7CE4] border-[1px] rounded-md shadow-md hover:bg-[#3D253F] transition-colors ${
                    activeSection === "assessments" ? "bg-[#3D253F] border-[#9C00AD]" : ""
                  }`}
                >
                  <span>📄</span>
                  <span className="ml-2">My Assessments</span>
                </button>
                <button
                  onClick={() => showSection("sessions")}
                  className={`flex items-center px-4 py-2 bg-transparent text-white max-sm:w-[42vw] border-[#FB7CE4] border-[1px] rounded-md shadow-md hover:bg-[#3D253F] transition-colors ${
                    activeSection === "sessions" ? "bg-[#3D253F] border-[#9C00AD]" : ""
                  }`}
                >
                  <span>📋</span>
                  <span className="ml-2">My sessions</span>
                </button>
              </div>
              
              {/* Content Section */}
              <div className="mt-6 px-5">
                {activeSection === "booking" && <Booking />}
                {activeSection === "assessments" && <Profile2 />}
                {activeSection === "sessions" && <Profile3 />}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile1;