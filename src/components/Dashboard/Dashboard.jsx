import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import pic from '../../assets/pic4.png';
import { FaUserEdit } from 'react-icons/fa';
import fetchData from '../config/fetchData';
import Sessions from './Sessions';
import Header from '../Header';
import Newnavbar from '../Newnavbar';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios at the top
import ServicesCard from '../service/ServicesCard';
import { toast, ToastContainer } from 'react-toastify';

const Dashboard = () => {
  const token = localStorage.getItem('authToken');
  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
  const [services, setServices] = useState([]);
  const [numTestsCompleted, setNumTestsCompleted] = useState(0);
  const userId = JSON.parse(localStorage.getItem('user'));
  const authToken = localStorage.getItem('authToken');
  const TEST_API_URL = 'https://de.aignosismdw.in/rest/get_num_tests_used/';
  const [profiles, setProfiles] = useState([]);
  const [isLicensedUser, setIsLicensedUser] = useState(false);

  useEffect(() => {
    if (isLicensedUser) {
      toast.success('Welcome to the your Dashboard!');
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/service/${userId._id}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        setServices(response.data.services || []);

        // Fetch the number of tests completed from external API
        const testResponse = await axios.post(
          TEST_API_URL,
          { patient_uid: userId._id },
          { headers: { 'Content-Type': 'application/json' } }
        );

        axios
          .post(
            'https://de.aignosismdw.in/rest/check_licensed_user/',
            JSON.stringify({ patient_uid: userId.phoneNumber })
          )
          .then((response) => {
            setIsLicensedUser(response.data.licensed_user);
          })
          .catch((error) => {
            toast.error('Error checking licensed user status. Please try again later.');
          });

        if (testResponse.data.num_tests_completed !== undefined) {
          setNumTestsCompleted(testResponse.data.num_tests_completed);
        } else {
          setNumTestsCompleted(0);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        toast.error('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLicensedUser]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/profiles`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfiles(response.data.profiles); // Set the fetched profiles
      } catch (err) {
        console.error('Error fetching profiles:', err);
        toast.error('Error fetching profiles. Please try again later.');
      }
    };
    fetchProfiles();
  }, [token]);

  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [logoModalOpen, setLogoModalOpen] = useState(false); // Modal state
  const [logoFile, setLogoFile] = useState(null); // Logo file state
  const [logoUploading, setLogoUploading] = useState(false);

  const [currentProfile, setCurrentProfile] = useState(null); // For editing specific profile
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    age: '',
    email: '',
    dob: '',
    gender: '',
  });

  const [profilePic, setProfilePic] = useState(null); // State to handle profile picture

  // Function to convert ISO date to yyyy-mm-dd format for HTML date input
  const formatDateForInput = (dateString) => {
    if (!dateString) return '';

    try {
      // Handle ISO date format (2003-07-31T00:00:00.000Z)
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toISOString().split('T')[0];
      }

      return '';
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  };

  const toggleEdit = (profile = null) => {
    if (profile) {
      // Edit existing profile
      setCurrentProfile(profile);
      setFormData({
        name: profile.name,
        username: profile.username,
        age: profile.age,
        email: profile.email,
        dob: formatDateForInput(profile.dob), // Convert ISO date format to yyyy-mm-dd
        gender: profile.gender,
      });
      setProfilePic(profile.profilePicUrl); // Use profilePicUrl from API response
      setIsUpdating(true);
    } else {
      // Add new profile
      setFormData({
        name: '',
        username: '',
        age: '',
        email: '',
        dob: '',
        gender: '',
      });
      setProfilePic(null); // Reset profile pic
      setIsUpdating(false);
    }
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        toast.error('Only JPG, JPEG, and PNG files are allowed for profile pictures.');
        e.target.value = ''; // Clear the input
        return;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      profilePic: file,
    }));
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();

    setIsSaving(true);
    const token = localStorage.getItem('authToken');

    const profileFormData = new FormData();
    profileFormData.append('name', formData.name);
    profileFormData.append('username', formData.username);
    profileFormData.append('age', formData.age);
    profileFormData.append('email', formData.email);
    profileFormData.append('dob', formData.dob);
    profileFormData.append('gender', formData.gender);

    // Only append profile picture if one is selected
    const profilePicInput = document.querySelector('#profilePicInput');
    const profilePic = profilePicInput ? profilePicInput.files[0] : null;
    if (profilePic) {
      profileFormData.append('profilePic', profilePic);
    }

    try {
      if (currentProfile) {
        const response = await axios.put(`${API_BASE_URL}/api/profiles/${currentProfile._id}`, profileFormData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Update the profile in the local state using _id instead of id
        setProfiles((prevProfiles) =>
          prevProfiles.map((profile) => (profile._id === currentProfile._id ? response.data.profile : profile))
        );
        toast.success('Profile updated successfully!');
      } else {
        // Add a new profile
        const response = await axios.post(`${API_BASE_URL}/api/profiles/add`, profileFormData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfiles((prevProfiles) => [...prevProfiles, response.data.profile]);
        toast.success('Profile created successfully!');
      }

      setIsEditing(false);
      setCurrentProfile(null);
    } catch (err) {
      console.error('Error saving profile:', err);

      // Display error message from backend or default message
      const errorMessage = err.response?.data?.message || 'An error occurred while saving the profile.';
      toast.error(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  // Logo upload handler
  const handleLogoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      const allowedExtensions = ['.jpeg', '.jpg', '.png'];
      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
        toast.error('Only JPG, JPEG, and PNG files are allowed for logo.');
        e.target.value = '';
        setLogoFile(null);
        return;
      }
    }
    setLogoFile(file);
  };

  const handleLogoUpload = async (e) => {
    e.preventDefault();
    if (!logoFile) {
      toast.error('Please select a logo file.');
      return;
    }
    setLogoUploading(true);
    const formData = new FormData();
    formData.append('logo', logoFile);
    formData.append('patient_uid', userId.phoneNumber);
    try {
      await axios.post('https://de.aignosismdw.in/rest/upload_logo', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Logo uploaded successfully!');
      setLogoModalOpen(false);
      setLogoFile(null);
    } catch {
      toast.error('Failed to upload logo.');
    } finally {
      setLogoUploading(false);
    }
  };

  // if (loading) return <p className="text-white">Loading dashboard...</p>;
  // if (error) return <p className="text-red-500">{error}</p>;

  // Find the user's `total_sessions`
  const totalSessions = services.length > 0 ? services[0].total_sessions : 0;
  const isTestAvailable = numTestsCompleted < totalSessions;
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      {/* Custom Logo Upload Modal */}
      {logoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <div className="relative w-full max-w-xs rounded-lg bg-[#2B1B2D] p-6 text-white shadow-lg">
            <button
              className="absolute right-2 top-2 text-xl text-white hover:text-[#9C00AD]"
              onClick={() => setLogoModalOpen(false)}
              disabled={logoUploading}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="mb-4 text-lg font-bold">Upload Logo</h2>
            <form onSubmit={handleLogoUpload}>
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleLogoFileChange}
                className="mb-4 w-full rounded bg-[#3D253F] p-2 text-white"
              />
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="rounded-full border border-[#9C00AD] px-6 py-2 text-white disabled:opacity-50"
                  disabled={logoUploading}
                >
                  {logoUploading ? 'Uploading...' : 'Upload'}
                </button>
                <button
                  type="button"
                  onClick={() => setLogoModalOpen(false)}
                  className="rounded-full border border-red-500 px-6 py-2 text-white"
                  disabled={logoUploading}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Header />
      <div className="h-full w-full bg-[#2B1B2D] px-5 py-10 pt-[10vh] font-manrope text-white md:px-10 md:pt-[12vh]">
        <div className="hidden h-full w-full md:block">
          {/* Header */}
          <div
            className="flex h-[7vw] w-full items-center justify-between rounded-3xl px-[5vw]"
            style={{
              background: 'linear-gradient(to right, #B740A1, #9C00AD)',
            }}
          >
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                {profiles.length > 0 && profiles[0].profilePicUrl ? (
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gray-500">
                    <img className="h-full w-full object-cover" src={profiles[0].profilePicUrl} alt="Profile" />
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-500">
                    <span className="text-lg text-white">?</span> {/* Default placeholder */}
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-base font-medium text-white">Welcome</h2>
                {profiles.length > 0 ? (
                  <>
                    <p className="text-xl font-bold text-white">{profiles[0].name}</p>
                    <p className="text-xs text-white">{profiles[0].email}</p>
                  </>
                ) : (
                  <p className="text-xs text-white">No profile data available</p>
                )}
              </div>
            </div>

            {/* Notification Icon */}
            {/* <div className="text-white text-2xl">
              <FaBell />
            </div> */}
          </div>

          <div>
            {isEditing ? (
              <div className="relative mt-4 h-full w-full rounded-md border-2 border-[#C4C4C45E] bg-[#2B1B2D] px-[4vw] py-6 text-sm text-white">
                <h2 className="mb-4 text-lg font-bold">
                  {isUpdating ? 'Edit Personal Info' : 'Add Personal Info (Guardian)'}
                </h2>
                <form>
                  <div className="grid grid-cols-1 gap-6 pr-[20vw] text-sm md:grid-cols-2">
                    {/* Form Fields */}
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full rounded bg-[#3D253F] p-2 text-white"
                    />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="User name"
                      className="w-full rounded bg-[#3D253F] p-2 text-white"
                    />
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Age"
                      className="w-full rounded bg-[#3D253F] p-2 text-white"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full rounded bg-[#3D253F] p-2 text-white"
                    />
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      placeholder="Date of birth"
                      className="w-full rounded bg-[#3D253F] p-2 text-white"
                    />
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full rounded bg-[#3D253F] p-2 text-white"
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className="mb-2 block">Profile Picture</label>
                    <input
                      type="file"
                      id="profilePicInput"
                      name="profilePic"
                      accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                      onChange={handleFileChange}
                      className="w-full rounded bg-[#3D253F] p-2 text-white"
                    />
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <button
                      onClick={handleSaveProfile}
                      className="rounded-full border border-[#9C00AD] px-6 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={isSaving}
                    >
                      {isSaving ? (isUpdating ? 'Updating...' : 'Saving...') : isUpdating ? 'Update' : 'Save'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="rounded-full border border-red-500 px-6 py-2 text-white disabled:opacity-50"
                      disabled={isSaving}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <div className="mt-5 px-5">
                  <div className="flex items-center gap-5">
                    <h3 className="font-semibold">Profiles</h3>
                    <button
                      className="ml-2 rounded-full border border-[#9C00AD] px-3 py-1 text-xs text-white hover:bg-[#9C00AD]"
                      onClick={() => setLogoModalOpen(true)}
                      type="button"
                    >
                      Upload Logo
                    </button>
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    {profiles.map((profile, idx) => (
                      <div
                        key={profile._id + idx}
                        className="mt-5 flex h-[12vw] w-[12vw] cursor-pointer items-center justify-center rounded-md bg-[#3D253F]"
                        onClick={() => toggleEdit(profile)}
                      >
                        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#9C00AD]">
                          {profile.profilePicUrl ? (
                            <img className="h-full w-full object-cover" src={profile.profilePicUrl} alt="Profile" />
                          ) : (
                            <span className="text-lg font-bold text-white">{profile.name.charAt(0)}</span>
                          )}
                        </div>
                      </div>
                    ))}
                    <div
                      onClick={() => toggleEdit()}
                      className="mt-5 flex h-[12vw] w-[12vw] cursor-pointer items-center justify-center rounded-md bg-[#3D253F]"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9C00AD]">
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>
                {/* {isTestAvailable &&  */}
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
                      <button className="text-xl font-bold text-white">
                        {/* {isTestAvailable ? ( */}
                        <Link to={'/test'} className="mt-5 rounded-full bg-[#811F67] px-6 py-2 text-white">
                          Book Now
                        </Link>
                        {/* ) : (
                          <p className="mt-5 text-gray-400">
                            No available sessions remaining.
                          </p>
                        )} */}
                      </button>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                        <FaPlus size={12} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* } */}
              </>
            )}
          </div>
        </div>
        <div className="block h-full w-full py-4 md:hidden">
          {/* Avatar Section */}
          <div
            className="flex h-20 w-full items-center justify-between rounded-2xl px-4"
            style={{
              background: 'linear-gradient(to right, #B740A1, #9C00AD)',
            }}
          >
            <div className="flex items-center space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                {profiles.length > 0 && profiles[0].profilePicUrl ? (
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src={profiles[0].profilePicUrl}
                    alt="Profile"
                  />
                ) : (
                  <span className="text-base text-white">
                    {profiles.length > 0 && profiles[0].name ? profiles[0].name[0] : '?'}
                  </span> // Use the first letter of the name or a fallback
                )}
              </div>
              <div>
                <h2 className="text-sm font-medium text-white">Welcome</h2>
                {profiles.length > 0 ? (
                  <>
                    <p className="text-lg font-bold text-white">{profiles[0].name}</p>
                    <p className="text-xs text-white">
                      {profiles[0].email || '+1234567890'} {/* Default to phone if email is not available */}
                    </p>
                  </>
                ) : (
                  <p className="text-xs text-white">No profile data available</p>
                )}
              </div>
            </div>

            {/* <div className="text-white text-xl">
              <FaBell />
            </div> */}
          </div>

          {/* Edit Profile Form */}
          {isEditing ? (
            <div className="relative mt-[5vw] h-full w-full rounded-md border-2 border-[#C4C4C45E] bg-[#2B1B2D] px-[4vw] py-6 text-sm text-white">
              <h2 className="mb-4 text-lg font-bold">
                {isUpdating ? 'Edit Personal Info' : 'Add Personal Info (Guardian)'}
              </h2>
              <form>
                <div className="grid grid-cols-1 gap-6 pr-[20vw] text-sm">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full rounded bg-[#3D253F] p-2 text-white"
                  />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="User name"
                    className="w-full rounded bg-[#3D253F] p-2 text-white"
                  />
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                    className="w-full rounded bg-[#3D253F] p-2 text-white"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full rounded bg-[#3D253F] p-2 text-white"
                  />
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    placeholder="Date of birth"
                    className="w-full rounded bg-[#3D253F] p-2 text-white"
                  />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full rounded bg-[#3D253F] p-2 text-white"
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <label className="mb-2 block">Profile Picture</label>
                  <input
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full rounded bg-[#3D253F] p-2 text-white"
                  />
                </div>

                <div className="mt-4 flex space-x-4">
                  <button
                    type="button"
                    onClick={handleSaveProfile}
                    className="rounded-full border border-[#9C00AD] px-6 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={isSaving}
                  >
                    {isSaving ? (isUpdating ? 'Updating...' : 'Saving...') : isUpdating ? 'Update' : 'Save'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="rounded-full border border-red-500 px-6 py-2 text-white"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              {/* Display Profiles */}
              <div className="mt-[10vw] flex items-center gap-5">
                <h3 className="text-sm font-semibold">Profiles</h3>
                <button
                  className="ml-2 rounded-full border border-[#9C00AD] px-3 py-1 text-xs text-white hover:bg-[#9C00AD]"
                  onClick={() => setLogoModalOpen(true)}
                  type="button"
                >
                  Upload Logo
                </button>
              </div>

              {/* Profile List */}
              <div className="grid grid-cols-3">
                <div
                  onClick={() => toggleEdit()}
                  className="mt-5 flex h-24 w-24 items-center justify-center rounded-md bg-[#3D253F]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9C00AD]">
                    <FaPlus />
                  </div>
                </div>

                {profiles.map((profile, idx) => (
                  <div
                    key={profile._id + idx}
                    onClick={() => toggleEdit(profile)}
                    className="mt-5 flex h-24 w-24 items-center justify-center rounded-md bg-[#3D253F]"
                  >
                    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#9C00AD]">
                      {profile.profilePicUrl ? (
                        <img className="h-full w-full object-cover" src={profile.profilePicUrl} alt="Profile" />
                      ) : (
                        <span className="text-lg font-bold text-white">{profile.name.charAt(0)}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* {isTestAvailable &&  */}
              <div className="mt-5 px-3">
                <div
                  className="flex h-auto w-full flex-col items-start justify-between space-y-4 px-4 py-3 sm:flex-row sm:items-center sm:px-8 sm:py-5"
                  style={{
                    background: 'linear-gradient(to left, #4B1056, #280834)',
                  }}
                >
                  {/* Left Section */}
                  <div className="flex items-start space-x-3 sm:items-center sm:space-x-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10">
                      <img src={pic} alt="Child Icon" className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white sm:text-sm">
                        Upto 1 in 5 children are at risk of developmental delays**
                      </p>
                      <p className="mt-1 text-xs font-medium text-white sm:text-sm">
                        Take 5 minutes to check if your child is achieving key milestones on time
                      </p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex w-full items-center justify-center">
                    {/* {isTestAvailable ? ( */}
                    <button className="mt-5 rounded-full bg-[#811F67] px-6 py-2 text-white">
                      <Link to={'/test'}>Book Now</Link>
                    </button>
                    {/* ) : (
                      <p className="mt-5 text-gray-400">
                        No available sessions remaining.
                      </p>
                    )} */}
                  </div>
                </div>
              </div>
              {/* } */}
            </div>
          )}
        </div>
        {/* <ServicesCard userId={userId._id} /> */}
        {!isLicensedUser ? (
          <></>
        ) : (
          <div
            style={{
              margin: 30,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              borderWidth: '1px',
              borderRadius: 20,
              borderColor: '#722c7e',
            }}
          >
            <h3
              className="mb-4 p-10 text-lg font-thin text-white md:text-xl"
              style={{ fontSize: 30, fontWeight: 100, opacity: 1.0 }}
            >
              Experience our product
            </h3>

            <Link to={'/test/fillup'}>
              <button
                className="demo-button"
                style={{
                  borderWidth: '1px',
                  borderColor: '#9C00AD',
                  borderRadius: 20,
                  padding: '10px 20px',
                  backgroundColor: 'transparent',
                  width: '30vw',
                  maxWidth: '50vw',
                  height: '5vw',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  marginBottom: 50,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.backgroundColor = 'rgba(156, 0, 173, 0.2)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(156, 0, 173, 0.7)';
                  e.currentTarget.style.borderColor = '#D740FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#9C00AD';
                }}
              >
                Take Test
              </button>
            </Link>
          </div>
        )}

        <Sessions />
        {/* <Link
          to={"/prices"}
          className="w-full border-2 flex justify-center items-center border-zinc-500 py-4"
        >
          <h3 className="font-bold">Book Now</h3>
        </Link> */}
      </div>
    </>
  );
};

export default Dashboard;
