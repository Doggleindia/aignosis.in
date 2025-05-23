import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ServicesCard = ({ userId }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/service/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setServices(response.data.services || []);
      } catch (err) {
        setError('Failed to fetch services.');
        console.error('Error fetching services:', err);
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
      <h3 className="mb-4 text-lg font-semibold text-white md:text-xl">Purchased Services</h3>

      {services.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service._id}
              className="relative transform overflow-hidden rounded-2xl border border-[#B740A1] bg-gradient-to-r from-[#522D5B] to-[#3D253F] p-6 shadow-lg transition-transform hover:scale-105"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black opacity-20"></div>

              {/* Content */}
              <div className="relative z-10">
                <h4 className="mb-2 text-xl font-bold text-white">{service.service_type}</h4>

                <div className="mb-3 flex items-center space-x-2">
                  <span className="rounded-full bg-[#B740A1] px-3 py-1 text-xs text-white">
                    {service.validity_period} Days Validity
                  </span>
                </div>

                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">Total Sessions:</span> {service.total_sessions}
                </p>
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">Sessions Used:</span> {service.sessions_used}
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  <span className="font-semibold text-gray-300">Purchased On:</span>{' '}
                  {new Date(service.purchased_on).toLocaleDateString()}
                </p>

                {/* Button for action (e.g., Book Session) */}
                <Link to={'/test/fillup'}>
                  <button className="mt-4 w-full rounded-lg bg-[#811F67] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#B740A1]">
                    Take Test Now
                  </button>
                </Link>
                <Link to={'https://calendly.com/aignosis-support/30min'} target="_blank" rel="noreferrer">
                  <button className="mt-4 w-full rounded-lg bg-[#811F67] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#B740A1]">
                    Book a Session
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-400">No services purchased yet.</p>
      )}
    </div>
  );
};

export default ServicesCard;
