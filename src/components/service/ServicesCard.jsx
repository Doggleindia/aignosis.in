import React, { useEffect, useState } from "react";
import axios from "axios";

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
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-5 px-5">
      <h3 className="text-lg font-semibold text-white">Purchased Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {services.length > 0 ? (
          services.map((service) => (
            <div key={service._id} className="bg-[#3D253F] p-4 rounded-lg shadow-md">
              <h4 className="text-white text-xl font-bold">{service.service_type}</h4>
              <p className="text-gray-300">Validity: {service.validity_period} days</p>
              <p className="text-gray-300">Total Sessions: {service.total_sessions}</p>
              <p className="text-gray-300">Sessions Used: {service.sessions_used}</p>
              <p className="text-gray-400 text-sm">Purchased On: {new Date(service.purchased_on).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No services purchased yet.</p>
        )}
      </div>
    </div>
  );
};

export default ServicesCard;
