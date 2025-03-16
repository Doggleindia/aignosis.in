import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import Newnavbar from "../Newnavbar";
import Header from "../Header";
import axios from "axios";

const Orderhistory = () => {
  const [payments, setPayments] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
  const userId = JSON.parse(localStorage.getItem("user"));
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/service/${userId._id}`,
          { headers: { Authorization: `Bearer ${authToken}` } }
        );
        setPayments(response.data.payments || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Newnavbar />
      <Header />
      <div className="w-full text-white px-5 md:px-10 py-10 mt-[2vw] font-manrope pt-[8vh] md:pt-[12vh] min-h-screen h-full bg-[#2B1B2D]">
        <div className="w-full h-full">
          {/* Welcome Header Section */}
          <div
            className="w-full h-[7vw] flex items-center rounded-3xl max-sm:h-[20vw] justify-between px-[5vw] md:px-10"
            style={{
              background: "linear-gradient(to right, #B740A1, #9C00AD)",
            }}
          >
            {/* Avatar Section */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">
                  {userId?.name ? userId.name.charAt(0) : "U"}
                </span>
              </div>
              <div>
                <h2 className="text-white text-base font-medium">Welcome</h2>
                <p className="text-white font-bold text-xl">{userId?.name || "User"}</p>
                <p className="text-white text-xs">{userId?.phoneNumber || "N/A"}</p>
              </div>
            </div>
            {/* Notification Icon */}
            <div className="text-white text-2xl">
              <FaBell />
            </div>
          </div>

          {/* Order History Section */}
          <div className="mt-5 px-5 md:px-10">
            <h3 className="font-semibold text-lg md:text-xl">Order History</h3>
          </div>

          <div className="border-b-2 my-2 border-[#B859EA]"></div>

          {/* Payment History Table */}
          <div className="mt-5 px-5 md:px-10">
            <div className="border border-[#FB7CE4] rounded-lg p-2">
              <h4 className="text-lg font-semibold mb-4">My Payments</h4>
              <div className="border border-[#9C00AD] rounded-lg">
                <table className="w-full text-left text-sm text-white">
                  <thead>
                    <tr className="border-b border-[#9C00AD]">
                      <th className="px-4 py-2">Service</th>
                      <th className="px-4 py-2">Amount</th>
                      <th className="px-4 py-2">Sessions</th>
                      <th className="px-4 py-2">Validity</th>
                      <th className="px-4 py-2">Payment Date</th>
                      <th className="px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.length > 0 ? (
                      payments.map((payment) => (
                        <tr key={payment._id} className="border-b border-[#9C00AD]">
                          <td className="px-4 py-2">{payment.service_type}</td>
                          <td className="px-4 py-2">₹{payment.amount}</td>
                          <td className="px-4 py-2">{payment.sessions}</td>
                          <td className="px-4 py-2">{payment.validity} Days</td>
                          <td className="px-4 py-2">
                            {new Date(payment.created_at).toLocaleDateString()}
                          </td>
                          <td
                            className={`px-4 py-2 ${
                              payment.status === "success"
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {payment.status}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="px-4 py-4 text-center">
                          No payment history available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* My Sessions Section */}
            {/* <h4 className="text-lg font-semibold mt-10">My Sessions</h4>
            <div className="border border-[#9C00AD] mt-[1vw] rounded-lg p-4">
              <p className="text-sm text-gray-400">No sessions available.</p>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Orderhistory;
