import React, { useState, useEffect } from "react";
import axiosInstance from "../config/axiosInstance";
import "./PriceBody.css";
import most from "./most.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

const PriceBody = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [amount, setAmount] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [selectedImage2, setSelectedImage2] = useState(null); // State to hold the selected image
  const [sessions, setSessions] = useState(null);
  const [validity, setValidity] = useState(null);
  const [selectedCardType, setSelectedCardType] = useState(null);
  const [selectedTestCard, setSelectedTestCard] = useState(null);
  
  const images2 = [
    "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/TEST+PAGE+FIRST+IMAGE.png",
    "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/501.png",
    "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/601.png",
    "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/701.png",
    "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/801.png",
  ]; // Image array

  const handleCardSelect = (cardIndex) => {
    if (cardIndex < 0 || cardIndex >= testCards.length) {
      console.error("Invalid card index:", cardIndex);
      return;
    }
  
    setSelectedTestCard(cardIndex);
    setSelectedCardType("test");
    setAmount(testCards[cardIndex].price);
    setSessions(1); // Test usually has 1 session
    setValidity(testCards[cardIndex].validity);
  };
  const storedToken = localStorage.getItem("authToken");
  console.log("handleCardSelect is defined:", typeof handleCardSelect === "function");
  
  useEffect(() => {
    const preOrderData = JSON.parse(localStorage.getItem("preOrderData"));

    console.log("Checking localStorage after redirect:", preOrderData); // ✅ Debugging

    if (preOrderData && preOrderData.selectedCardType === "test") {
      handlePayment(preOrderData.selectedCardType);
    }
  }, []);
  

  const handlePayment = async (selectedCardType) => {
    console.log("handlePayment called with:"); // ✅ Debugging
    if (selectedCardType === null) {
      return toast.error("Please select a plan before proceeding.");
    }
    const storedPreOrderData = JSON.parse(
      localStorage.getItem("preOrderData")
    ) || {
      selectedCardType:'test',
      amount,
      sessions,
      validity,
    };

    if (!storedPreOrderData.selectedCardType) {
      return toast.error("Please select a plan before proceeding.");
    }


    // if (!storedToken) {
    //   toast.error("You need to log in to proceed with the payment.");

    //   const preOrderData = {
    //     selectedCardType,
    //     amount,
    //     sessions,
    //     validity,
    //     fromPage: location.pathname, // ✅ Store current page
    //   };

    //   localStorage.setItem("preOrderData", JSON.stringify(preOrderData));

    //   navigate("/login");
    //   return;
    // }

     if (!storedToken) {
          toast.error("You need to log in to proceed with the payment.");
          const preOrderData = {
            ...storedPreOrderData,
            fromPage: location.pathname, // Store current page
          };
          localStorage.setItem("preOrderData", JSON.stringify(preOrderData));
          return navigate("/login");
        }

    try {
      console.log("Initiating payment process...");
  
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user._id) {
        throw new Error("User data is missing. Please log in again.");
      }
      const { data } = await axiosInstance.post(
        "/api/payment/create-order",
        {
          user_id: user._id,
          service_type: storedPreOrderData.selectedCardType === "test" ? "Test" : "Therapy",
          amount: storedPreOrderData.amount,
          sessions: storedPreOrderData.sessions,
          validity: storedPreOrderData.validity,
          phoneNumber: user.phoneNumber,
        },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );
  
      if (!data.success) throw new Error("Order creation failed");
  
      const { id: order_id, amount: orderAmount, currency } = data.order;
      console.log("Order created successfully:", order_id);
  
      if (!window.Razorpay) {
        toast.error("Failed to load Razorpay. Please refresh and try again.");
        return console.error("Razorpay is not loaded");
      }
  
      // Razorpay payment options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderAmount,
        currency,
        name: "Aignosis",
        description: `Payment for ${
          storedPreOrderData.selectedCardType === "test" ? "Test" : "Therapy"
        }`,
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
            } else {
              toast.error("Payment verification failed. Please contact support.");
            }
          } catch (error) {
            console.error("Payment verification failed:", error);
            toast.error("Payment verification failed.");
          }
        },
        theme: { color: "#3399cc" },
      };
  
      console.log("Opening Razorpay payment window...");
      new window.Razorpay(options).open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      toast.error("Failed to initiate payment. Please try again.");
    }
  };
  
  const testCards = [
    {
      id: 8,
      discount: "Shark tank 50% off",
      title: "Aignosis Screening – Standard",
      subtitle: "Includes Autism Screening Test + Expert Consultation",
      price: 700,
      validity: "30",
      actualprice: 999,
    },
    {
      id: 9,
      discount: "Shark tank 50% off",
      title: "Aignosis Screening – Comprehensive",
      subtitle:
        "Includes Autism Screening Test + Expert Consultation + Personalized Home Therapy Plan + Assessments with 3 Therapy Sessions",
      price: 1899,
      validity: "30",
      actualprice: 3899,
    },
  ];
  // const therapyCards = [
  //   {
  //     amount: 5000,
  //     discount: "Shark tank 50% off",
  //     sessions: 10,
  //     sessionCost: 500,
  //     validity: "30",
  //     savings: 5000,
  //   },
  //   {
  //     amount: 7500,
  //     discount: "Shark tank 50% off",
  //     sessions: 15,
  //     sessionCost: 500,
  //     validity: "45",
  //     savings: 7500,
  //   },
  //   {
  //     amount: 10000,
  //     discount: "Shark tank 50% off",
  //     sessions: 20,
  //     sessionCost: 500,
  //     validity: "90",
  //     savings: 10000,
  //   },
  // ];
  return (
    <>
      <div>
        <ToastContainer />
        <div className=" hidden md:flex w-full h-full font-raleway 2xl:p-10 md:p-4 2xl:px-[5vw] md:px-10">
          <div className="flex top-4">
            <div className="flex">
              {/* Left Column: Thumbnails */}
              <div className="flex w-[20%] overflow-hidden flex-col gap-4">
                {images2.map((image, index) => (
                  <div
                    key={index}
                    className="w-[15vw] h-[10vw] bg-[#D9D9D9] cursor-pointer"
                    onClick={() => setSelectedImage2(image)} // Update selected image on click
                  >
                    <img
                      className=" max-sm:w-full w-[75%] h-full object-fill"
                      loading=""
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* Right Column: Display Selected Image */}
              <div className="flex ml-[1vw] w-[40vw] h-[43.75vw] overflow-hidden">
                <div className="w-[40vw] h-[43.75vw] bg-[#D9D9D9]">
                  <img
                    className="w-full h-full object-cover"
                    src={selectedImage2 || images2[0]} // Default to the first image if none is selected
                    alt="Selected"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-auto w-[45%] pr-4">
            <div className="flex flex-col">
              <h1 className="text-4xl">
                Early Autism Screening for a Brighter Tomorrow
              </h1>
              <div className="flex items-center mt-2 text-[#F6E8FB]">
                <span className="text-yellow-500 text-lg">4.9</span>
                <span className="text-yellow-500 text-lg ml-1">★★★★★</span>
                <span className="ml-2 text-sm">(Based on 106 reviews)</span>
              </div>
            </div>

            <div className="mt-4">
              <span className="text-2xl font-semibold text-white">Test</span>
            </div>
            <div className="flex mt-6  gap-4 relative">
              {testCards.map((card, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-3xl w-full h-full cursor-pointer bg-[#43284C4D] ${
                    selectedTestCard === index
                      ? "border-2 border-[#B740A1]"
                      : "border-[#5455694D]"
                  }`}
                  onClick={() => handleCardSelect(index, "test")}
                >
                  <div className="w-full h-[2vw] bg-[#B7407D54] rounded-full flex justify-center items-center">
                    <span className="text-xs">{card.discount}</span>
                  </div>
                  <h2 className="mt-3">{card.title}</h2>
                  <h3 className="text-[9px]">{card.subtitle}</h3>
                  <p className="text-xs mt-2">{card.validity}-Days Validity</p>
                  <span className="mt-3 font-manrope">
                    ₹{card.price}{" "}
                    <span className="text-[10px] line-through">
                      (₹{card.actualprice})
                    </span>
                  </span>
                  <div className="text-xs">(MRP incl. all taxes)</div>
                </div>
              ))}
            </div>
            <div className="">
              {/* <div className="mt-2">
                <span className="text-2xl font-semibold text-white">
                  Add Therapy
                </span>
              </div> */}
              {/* <div className="flex mt-6 h-full overflow-x-auto scrollbar-hidden gap-4 relative">
                {therapyCards.map((card, index) => (
                <div
                key={index}
                className={`relative p-8 rounded-3xl cursor-pointer w-full bg-[#261431] ${
                  selectedTherapyCard === index ? "border-2 border-[#B7407D54]" : ""
                }`}
                onClick={() => handleCardSelect(index, "therapy")}
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
                        <span className="bg-[#B7407D54] text-xs rounded-full px-4 py-1">
                          {card.discount}
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold">
                          ₹{card.amount}{" "}
                          <span className="line-through text-gray-400">
                            ₹{card.amount + card.savings}
                          </span>
                        </p>

                        <p className="text-xs mt-2">
                          {card.validity}-Days Validity
                        </p>
                        <p className="text-xs">
                          {card.sessions} Sessions at ₹{card.sessionCost}
                          /session
                        </p>
                        <p className="text-xs font-bold mt-2">
                          Save ₹{card.savings} overall!
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}

              <div className="flex mt-5 gap-4">
                <div className="relative w-full flex justify-center items-center rounded-full p-[2px] bg-gradient-to-r opacity-60 from-[#D24074] to-[#6518B4]">
                  <div
                    className="w-full rounded-full p-[2px] bg-[#1A0C25]"
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: "Check this out!",
                            text: "I found something interesting for you.",
                            url: window.location.href,
                          })
                          .then(() =>
                            console.log("Content shared successfully")
                          )
                          .catch((error) =>
                            console.error("Error sharing content", error)
                          );
                      } else {
                        alert(
                          "Web Share API is not supported in your browser."
                        );
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
                      onClick={() => handlePayment(selectedCardType)}
                      className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg"
                    >
                      Pre Order
                    </button>

                    {/* <button
                      // onClick={handleBuyNowClick}
                      onClick={handlePayment}
                      className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg"
                    >
                      Pre order
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden w-full h-full font-raleway p-4 gap-4">
          <div className="flex flex-col gap-2 items-center">
            {/* Center Image */}
            <div className="w-[90vw] h-[80vw] bg-[#D9D9D9]">
              <img
                className="w-full h-full object-center"
                src={selectedImage2 || images2[0]} // Default to the first image if none is selected
                alt="Selected"
              />
            </div>

            {/* Left Column */}
            <div className="flex gap-2 w-full mt-4">
              {images2.map((image, index) => (
                <div
                  key={index}
                  className="w-[20vw] h-[20vw] bg-[#D9D9D9] cursor-pointer"
                  onClick={() => setSelectedImage2(image)} // Update selected image on click
                >
                  <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            {/* Text Content */}
            <div className="text-left mt-4 px-2">
              <h1 className="text-xl font-bold">
                Early Autism Screening for a Brighter Tomorrow
              </h1>
              <div className="flex items-center mt-2 text-[#F6E8FB]">
                <span className="text-yellow-500 text-lg">4.9</span>
                <span className="text-yellow-500 text-lg ml-1">★★★★★</span>
                <span className="ml-2 text-sm">(Based on 106 reviews)</span>
              </div>
            </div>

            <div className="mt-2 mb-[-2vw] text-left pr-80">
              <div className="text-xl font-bold text-white mr-auto text-left px-2">
                Test
              </div>
            </div>
            <div className="flex flex-col mt-6 gap-4 relative">
              {testCards.map((card, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-3xl w-full h-full cursor-pointer bg-[#43284C4D] ${
                    selectedTestCard === index
                      ? "border-2 border-[#B740A1]"
                      : "border-[#5455694D]"
                  }`}
                  onClick={() => handleCardSelect(index, "test")}
                >
                  <div className="w-[40vw] h-[8vw] bg-[#B7407D54] rounded-full flex justify-center items-center">
                    <span className="text-xs">{card.discount}</span>
                  </div>
                  <h2 className="mt-3">{card.title}</h2>
                  <h3 className="text-[9px]">{card.subtitle}</h3>
                  <span className="mt-3 font-manrope">
                    ₹{card.price}{" "}
                    <span className="text-[10px] line-through">
                      (₹{card.actualprice})
                    </span>
                  </span>
                  <div className="text-xs">(MRP incl. all taxes)</div>
                </div>
              ))}
            </div>

            {/* Therapy Options */}
            {/* <div className="mt-4">
              <span className="text-xl font-bold text-white text-left px-2">
                Add Therapy
              </span>
              <div className="flex flex-wrap justify-center gap-4 mt-4 ">
                {therapyCards.map((card, index) => (
                  <div
                  key={index}
                  className={`relative p-8 rounded-3xl cursor-pointer w-full bg-[#261431] ${
                    selectedTherapyCard === index ? "border-2 border-[#B7407D54]" : ""
                  }`}
                  onClick={() => handleCardSelect(index, "therapy")}
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
                        <span className="line-through text-gray-400">
                          ₹{card.amount + card.savings}
                        </span>
                      </p>
                      <p className="text-xs mt-2">
                        {card.validity}-Days Validity
                      </p>
                      <p className="text-xs">
                        {card.sessions} Sessions at ₹{card.sessionCost}/session
                      </p>
                      <p className="text-xs font-bold mt-2">
                        Save ₹{card.savings} overall!
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: "Check this out!",
                        text: "I found something interesting for you.",
                        url: window.location.href, // Current page URL
                      })
                      .then(() => console.log("Content shared successfully"))
                      .catch((error) =>
                        console.error("Error sharing content", error)
                      );
                  } else {
                    alert("Web Share API is not supported in your browser.");
                  }
                }}
                className="w-[100%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg"
              >
                Share
              </button>

              <button
                onClick={() => handlePayment(selectedCardType)}
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

export default PriceBody;
