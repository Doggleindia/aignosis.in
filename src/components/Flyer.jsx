import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const Flyer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
  useEffect(() => {
    // Show the popup after 15 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/flyer/submit`, formData);
      toast.success(data.message);
      setFormData({ name: '', phone: '' }); // Reset form
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex w-11/12 flex-col overflow-hidden rounded-lg bg-white shadow-lg md:w-8/12 md:flex-row lg:w-6/12">
        {/* Left Section (Image with Content Overlay) */}
        <div className="relative flex flex-1 flex-col items-center justify-center p-6 text-white">
          {/* Close Button (Visible on Mobile Only) */}
          <button
            className="absolute right-4 top-4 z-20 text-xl text-gray-500 hover:text-gray-800 md:hidden"
            onClick={closePopup}
          >
            &times;
          </button>
          {/* Shark Image */}
          <img
            src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/sharks.png"
            className="object-fit absolute inset-0 h-full w-full"
            alt="Shark"
          />

          {/* Overlay Content */}
          <div className="relative z-10 text-center">
            <h1 className="font-[Passion One] mb-2 text-2xl font-bold text-[#8EADFC] md:text-3xl">SHARK TANK</h1>
            <h2 className="font-[Passion One] mb-2 text-xl font-bold text-yellow-500 md:text-2xl">INDIA</h2>
            <h3 className="mb-4 text-4xl font-bold md:text-5xl">50% off</h3>
            <p
              className="mb-2 rounded-lg px-4 py-2 text-sm font-semibold md:text-base"
              style={{
                background: 'linear-gradient(90deg, #9C00AD 0%, rgba(241, 198, 254, 0.46) 100%)',
              }}
            >
              On your first screening
            </p>
            <p className="text-sm md:text-base">Free consultation for First 1000 users</p>
          </div>

          {/* Overlay Background */}
          <div className="absolute inset-0 bg-[#1A0C25] opacity-80"></div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 bg-[#063756] p-6">
          <div className="mb-4 flex items-center justify-between text-center">
            <h3 className="ml-[4vw] text-center text-lg font-bold text-white max-sm:ml-[12vw] md:text-xl">
              Know your child better
            </h3>

            {/* Close Button (Visible on Desktop Only) */}
            <button className="hidden text-xl text-gray-500 hover:text-gray-800 md:block" onClick={closePopup}>
              &times;
            </button>
          </div>

          <p className="mb-4 text-sm text-white">100% Privacy. No spam. Only helpful updates.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#9C00AD] py-2 font-semibold text-white transition hover:bg-purple-600"
            >
              Get now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Flyer;
