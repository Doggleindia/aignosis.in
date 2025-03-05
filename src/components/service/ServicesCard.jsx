import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ServicesCard = ({ userId }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
  const token = localStorage.getItem("authToken"); 
  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
            `${API_BASE_URL}/api/service/${userId}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setServices(response.data.services || []);
      } catch (err) {
        setError("Failed to fetch services.");
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [userId]);

  if (loading) return <p className="text-white">Loading services...</p>;
  // if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-5 px-5">
  <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Purchased Services</h3>

  {services.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <div
          key={service._id}
          className="relative bg-gradient-to-r from-[#522D5B] to-[#3D253F] p-6 rounded-2xl shadow-lg border border-[#B740A1] overflow-hidden transform transition-transform hover:scale-105"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 rounded-2xl"></div>

          {/* Content */}
          <div className="relative z-10">
            <h4 className="text-white text-xl font-bold mb-2">{service.service_type}</h4>

            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-[#B740A1] text-xs text-white px-3 py-1 rounded-full">
                {service.validity_period} Days Validity
              </span>
            </div>

            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-white">Total Sessions:</span> {service.total_sessions}
            </p>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-white">Sessions Used:</span> {service.sessions_used}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <span className="font-semibold text-gray-300">Purchased On:</span>{" "}
              {new Date(service.purchased_on).toLocaleDateString()}
            </p>

            {/* Button for action (e.g., Book Session) */}
            <Link to={'/test/fillup'}>
            <button className="mt-4 w-full bg-[#811F67] hover:bg-[#B740A1] text-white text-sm font-semibold py-2 px-4 rounded-lg transition duration-300">
              Take Test Now
            </button>
            </Link>
            <Link to={'https://calendly.com/aignosis-support/30min'} target="_blank" rel="noreferrer">
            <button className="mt-4 w-full bg-[#811F67] hover:bg-[#B740A1] text-white text-sm font-semibold py-2 px-4 rounded-lg transition duration-300">
              Book a Session
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-400 text-center text-lg">No services purchased yet.</p>
  )}
</div>


  );
};

export default ServicesCard;
