import React, { useState } from "react";
import axiosInstance from "../config/axiosInstance";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import most from "./most.png";

const PriceBody = ({ selectedOption, }) => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [amount, setAmount] = useState("");
  const [serviceType, setServiceType] = useState("Test"); // Default service type
  const [selectedImage2, setSelectedImage2] = useState(null); // Selected image state
  const storedToken = localStorage.getItem("authToken");
  const testCards = [
    {
      id: 8,
      discount: "Shark tank 50% off",
      title: "Aignosis Screening – Standard",
      subtitle: "Includes Autism Screening Test + Expert Consultation",
      price: 700,
      actualprice: 999,
    },
    {
      id: 9,
      discount: "Shark tank 50% off",
      title: "Aignosis Screening – Comprehensive",
      subtitle:
        "Includes Autism Screening Test + Expert Consultation + Personalized Home Therapy Plan + Assessments with 3 Therapy Sessions",
      price: 1899,
      actualprice: 3899,
    },
  ];

  const therapyCards = [
    { amount: 5000, discount: "Shark tank 50% off", sessions: 10, sessionCost: 500, validity: "3-Month Validity", savings: 5000 },
    { amount: 7500, discount: "Shark tank 50% off", sessions: 15, sessionCost: 500, validity: "3-Month Validity", savings: 7500 },
    { amount: 10000, discount: "Shark tank 50% off", sessions: 20, sessionCost: 500, validity: "3-Month Validity", savings: 10000 },
  ];

  const images2 = [
    "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/TEST+PAGE+FIRST+IMAGE.png",
    "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/501.png",
  ];

  const handleCardSelect = (cardIndex, cardAmount, type) => {
    setSelectedCard(cardIndex);
    setAmount(cardAmount);
    setServiceType(type);
  };

  const handlePayment = async () => {
    if (!storedToken) {
      toast.error("You need to log in to proceed with the payment.");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    try {
      console.log("Initiating payment process...");
      const { data } = await axiosInstance.post(
        "/api/payment/create-order",
        { user_id: '67a79a186661e4cb964377ed', service_type: serviceType, amount, sessions: 3, 
          validity: 90  },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      if (!data.success) {
        throw new Error("Order creation failed");
      }

      const { id: order_id, amount: orderAmount, currency } = data.order;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderAmount,
        currency,
        name: "Your Business Name",
        description: `Payment for ${serviceType}`,
        order_id,
        handler: async (response) => {
          try {
            console.log("Verifying payment...");
            const verifyResponse = await axiosInstance.post(
              "/api/payment/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              { headers: { Authorization: `Bearer ${storedToken}` } }
            );

            if (verifyResponse.data.success) {
              toast.success("Payment successful! Your service is activated.");
              console.log("Payment verified:", verifyResponse.data);
            } else {
              toast.error("Payment verification failed. Please contact support.");
            }
          } catch (error) {
            console.error("Payment verification failed:", error);
            toast.error("Payment verification failed.");
          }
        },
        prefill: { email: "user@example.com", contact: "9876543210" },
        theme: { color: "#3399cc" },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      toast.error("Failed to initiate payment. Please try again.");
      navigate("/login");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full p-4 font-raleway">
        <h1 className="text-2xl text-white">Early Autism Screening</h1>

        {/* Test Cards */}
        <div className="mt-4">
          <h2 className="text-xl font-bold text-white">Test</h2>
          <div className="flex gap-4 mt-4">
            {testCards.map((card) => (
              <div
                key={card.id}
                className={`p-6 rounded-3xl bg-[#43284C4D] cursor-pointer ${
                  selectedCard === card.id ? "border-2 border-[#B740A1]" : "border-[#5455694D]"
                }`}
                onClick={() => handleCardSelect(card.id, card.price, "Test")}
              >
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
                <span className="font-bold">₹{card.price}</span>
                <span className="text-xs line-through">₹{card.actualprice}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Therapy Cards */}
        <div className="mt-4">
          <h2 className="text-xl font-bold text-white">Add Therapy</h2>
          <div className="flex gap-4 mt-4">
            {therapyCards.map((card, index) => (
              <div
                key={index}
                className={`p-6 rounded-3xl bg-[#261431] cursor-pointer ${
                  selectedCard === index ? "border-2 border-[#B7407D54]" : ""
                }`}
                onClick={() => handleCardSelect(index, card.amount, "Therapy")}
              >
                <h3>{card.sessions} Sessions</h3>
                <p>{card.validity}</p>
                <span className="font-bold">₹{card.amount}</span>
                <span className="text-xs line-through">₹{card.amount + card.savings}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Button */}
        <div className="mt-4">
          <button
            onClick={handlePayment}
            className="w-full text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg"
          >
            Pre Order
          </button>
        </div>
      </div>
    </>
  );
};

export default PriceBody;
