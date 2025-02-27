import React, { useState } from "react";
import axiosInstance from "../config/axiosInstance";
import "./PriceBody.css"
import most from './most.png'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const PriceBody1 = ({ selectedOption }) => {
  const navigate = useNavigate(); // Initialize navigation
  const [amount, setAmount] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image

  const images = ["https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/120.png", "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/130.png", "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/140.png", "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/150.png", "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/160.png"]; // Image array

  const handleCardSelect = (cardIndex, cardAmount) => {
    setSelectedCard(cardIndex); // Highlight the selected card
    setAmount(cardAmount); // Update the selected amount
  };

  const storedToken = localStorage.getItem("authToken");

  const handlePayment = async () => {
    if(selectedCard === null){
      return toast.error("Please select a plan before proceeding.");
    }

    if (!storedToken) {
      toast.error("You need to log in to proceed with the payment.");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    try {
      console.log("Initiating payment process...");
      const user = JSON.parse(localStorage.getItem('user'));

      const { data } = await axiosInstance.post(
        "/api/payment/create-order",
        { user_id: user._id, service_type: "Therapy", amount, sessions: therapyCards[selectedCard].sessions, 
          validity: 3  },
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
        description: `Payment for Therapy`,
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
              setTimeout(() => navigate("/dashboard"), 2000);
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

  const therapyCards = [
    {
      amount: 5000,
      discount: "Shark tank 50% off",
      sessions: 10,
      sessionCost: 500,
      validity: "30",
      savings: 5000,
    },
    {
      amount: 7500,
      discount: "Shark tank 50% off",
      sessions: 15,
      sessionCost: 500,
      validity: "45",
      savings: 7500,
    },
    {
      amount: 10000,
      discount: "Shark tank 50% off",
      sessions: 20,
      sessionCost: 500,
      validity: "90",
      savings: 10000,
    },
  ];
  return (
    <>
      <ToastContainer />
      <div className="">
        <div className=" hidden md:flex w-full h-full font-raleway 2xl:p-10 md:p-4 2xl:px-[5vw] md:px-10">
          <div className="flex">
            {/* Left Column: Thumbnails */}
            <div className="flex w-[20%] overflow-hidden flex-col gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-[15vw] h-[10vw] bg-[#D9D9D9] cursor-pointer"
                  onClick={() => setSelectedImage(image)} // Update selected image on click
                >
                  <img className="max-sm:w-full w-[75%] h-full" src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
                
              ))}
            </div>

            {/* Right Column: Display Selected Image */}
            <div className="flex ml-[1vw] w-[40vw] h-[43.75vw] overflow-hidden">
              <div className="w-[40vw] h-[43.75vw] bg-[#D9D9D9]">
                <img
                  className="w-full h-full object-cover"
                  src={selectedImage || images[0]} // Default to the first image if none is selected
                  alt="Selected"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="w-[40%] pr-4">
            <div className="flex flex-col">
              <h1 className="text-4xl">
                Select best therapy plan  For Your Child's Needs

              </h1>
              <p className=" text-xs mt-4  pr-6 font-montserrat text-[#F6E8FB]">
                Find the ideal support plan tailored to your child’s unique journey. Our options are designed to provide targeted guidance,whether for developmental assessments, therapy, or academic support, ensuring a comprehensive approach to their growth and success.
              </p>

              <p className=" text-xs mt-4 pr-6 font-montserrat italic text-[#F6E8FB]">
                "Looking to support another child’s journey? You can also gift this assessment, offering meaningful support and valuable insights to families navigating similar paths."
              </p>
             
            </div>
            <div className="mt-5">
              <div className="">
                <h1 className="text-2xl font-semibold text-white">Add Therapy</h1>
              </div>
              <div className="flex mt-6 h-full overflow-x-auto scrollbar-hidden gap-4 relative">
                {therapyCards.map((card, index) => (
                  <div
                    key={index}
                    className={`p-8 rounded-3xl w-full cursor-pointer bg-[#261431] ${selectedCard === index ? "border-2 rounded-3xl border-[#B7407D54]" : ""
                      }`}
                    onClick={() => handleCardSelect(index, card.amount)}
                  >
                    {index === 1 && (
                      <img
                        src={most}
                        alt="Most Popular"
                        className="absolute -top-2 left-1/6 transform -translate-x-1/2 w-20"
                      />
                    )}

                    <div className="bg-[#43284C4D] rounded-lg p-4 text-white w-[90%] sm:w-[18vw] md:w-[22vw] lg:w-[15vw]">
                      <div className="text-center mb-4">
                        <span className="bg-[#B7407D54] text-xs rounded-full px-1 py-1">
                          {card.discount} Off!
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold">
                          ₹{card.amount}{" "}
                          <span className="line-through text-gray-400">
                            ₹{card.amount + card.savings}
                          </span>
                        </p>

                        <p className="text-xs mt-2">{card.validity} -Days Validity</p>
                        <p className="text-xs">
                          {card.sessions} Sessions at ₹{card.sessionCost}/session
                        </p>
                        <p className="text-xs font-bold mt-2">
                          Save ₹{card.savings} overall!
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
              <div className="flex mt-5 gap-4">
                <div className="relative w-full flex justify-center items-center rounded-full p-[2px] bg-gradient-to-r opacity-60 from-[#D24074] to-[#6518B4]">
                  <div className="w-full rounded-full p-[2px] bg-[#1A0C25]"
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: "Check this out!",
                            text: "I found something interesting for you.",
                            url: window.location.href, // Current page URL
                          })
                          .then(() => console.log("Content shared successfully"))
                          .catch((error) => console.error("Error sharing content", error));
                      } else {
                        alert("Web Share API is not supported in your browser.");
                      }
                    }}
                  >
                    <button className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg">
                      Share
                    </button>
                  </div>
                </div>
                <div className="relative w-full flex justify-center items-center rounded-full p-[2px] bg-gradient-to-r from-[#D24074] to-[#6518B4]">
                  <div className="w-full rounded-full p-[2px] bg-[#1A0C25]">
                    <button
                      //   onClick={handleBuyNowClick}
                      onClick={handlePayment}
                      className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg"
                    >
                      Pre order
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="block md:hidden w-full h-full font-raleway p-4 gap-4">
          <div className="flex flex-col gap-4 items-center">
            {/* Center Image */}
            <div className="w-[90vw] h-[80vw] bg-[#D9D9D9]">
              <img
                className="w-full h-full object-center"
                src={selectedImage || images[0]} // Default to the first image if none is selected
                alt="Selected"
              />
            </div>

            {/* Left Column */}
            <div className="flex gap-2 w-full mt-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-[20vw] h-[20vw] bg-[#D9D9D9] cursor-pointer"
                  onClick={() => setSelectedImage(image)} // Update selected image on click
                >
                  <img className="w-full h-full object-cover" src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
            {/* Text Content */}
            <div className="text-left mt-4 px-2">
              <span className="text-xl font-bold">
                Select Perfect Plan For Your Child's Needs
              </span>
              <p className="text-xs mt-2 font-montserrat text-[#F6E8FB]">
                Find the ideal support plan tailored to your child’s unique
                journey. Our options are designed to provide targeted guidance,
                whether for developmental assessments, therapy, or academic
                support, ensuring a comprehensive approach to their growth and
                success.
              </p>
              <p className="italic text-xs mt-2 text-[#F6E8FB]">
                "Looking to support another child’s journey? You can also gift
                this assessment, offering meaningful support and valuable insights
                to families navigating similar paths."
              </p>
            </div>
            <div className="mt-4">
              <span className="text-lg text-left px-2 font-semibold">Benefits</span>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Better Social Skills & Communication
                </span>
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Stronger Emotional Connection
                </span>
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Happier Families with Clear Guidance
                </span>
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Boosted Confidence & Happiness
                </span>
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Faster Developmental Growth                  </span>
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Improved Focus & Learning                  </span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-xl font-bold text-white text-left px-2">
                Add Therapy
              </span>
              <div className="flex flex-wrap justify-center gap-4 mt-4 ">
                {therapyCards.map((card, index) => (
                  <div
                    key={index}
                    className={`relative p-8 rounded-3xl cursor-pointer w-full bg-[#261431] ${selectedCard === index ? "border-2 rounded-3xl border-[#B7407D54]" : ""
                      }`}
                    onClick={() => handleCardSelect(index, card.amount)}
                  >
                    {index === 1 && (
                      <img
                        src={most}
                        alt="Most Popular"
                        className="absolute top-[-5px] left-1/5 transform -translate-x-1/2 w-16 sm:w-20"
                      />
                    )}

                    <div className="mb-2">
                      <span className="bg-[#B7407D54] text-xs rounded-full px-2 py-1">
                        {card.discount}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">
                        ₹{card.amount}{" "}
                        <span className="line-through text-gray-400">₹{card.amount + card.savings}</span>
                      </p>
                      <p className="text-xs mt-2">{card.validity} -Days Validity</p>
                      <p className="text-xs">{card.sessions} Sessions at ₹{card.sessionCost}/session</p>
                      <p className="text-xs font-bold mt-2">
                        Save ₹{card.savings} overall!
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: "Check this out!",
                      text: "I found something interesting for you.",
                      url: window.location.href, // Current page URL
                    })
                    .then(() => console.log("Content shared successfully"))
                    .catch((error) => console.error("Error sharing content", error));
                } else {
                  alert("Web Share API is not supported in your browser.");
                }
              }}
                className="w-[100%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg">
                Share
              </button>
               {/* <button className="w-[40%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg">
                  Add to cart
                </button>  */}
              <button
                onClick={handlePayment}
                className="w-[100%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg"
              >
                Pre order
              </button>
            </div>
          </div>
        </div>
      </div>
      {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
    </>
  );
};

export default PriceBody1;
