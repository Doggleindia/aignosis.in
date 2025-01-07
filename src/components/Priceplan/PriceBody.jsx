import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import brain from "../../assets/brain payment.png";
import { MdDeleteForever } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPaypal } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import axiosInstance from "../config/axiosInstance";

const PaymentPopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleNextStep = () => {
    if (step === 3) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setOrderConfirmed(true);
      }, 2000); // Simulate a 2-second loading period
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  const handleClosePopup = () => {
    if (onClose) {
      onClose(); // Calling the onClose prop to handle the closing of the popup
    }
  };

  const renderStepContent = () => {
    if (orderConfirmed) {
      return (
        <div className="text-center">
          <h1 className="text-lg font-bold text-[#B740A1]">
            Payment Successful!
          </h1>
          <p className="text-sm mt-2">
            Thank you for your purchase. Your payment has been confirmed.
          </p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="flex mb-[9.5vw] flex-col items-center justify-center h-full">
          <div className="loader border-t-[#B740A1] border-4 border-gray-300 rounded-full w-12 h-12 animate-spin"></div>
          <p className="mt-4 text-sm">Processing your payment...</p>
        </div>
      );
    }

    switch (step) {
      case 1:
        return (
          <div>
            <h1 className="text-xs font-bold">Complete Registration Payment</h1>
            <form className="mt-5 mb-5 grid gap-4 px-5">
              <input
                type="text"
                placeholder="Your Name*"
                className="border border-[#9C00AD63] w-full px-4 py-2 rounded-sm text-xs"
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="border border-[#9C00AD63] w-full px-4 py-2 rounded-sm text-xs"
              />
              <input
                type="text"
                placeholder="Phone number*"
                className="border border-[#9C00AD63] w-full px-4 py-2 rounded-sm text-xs"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Area/city"
                  className="border border-[#9C00AD63] w-full px-4 py-2 rounded-sm text-xs"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="border border-[#9C00AD63] w-full px-4 py-2 rounded-sm text-xs"
                />
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="p-2 mb-5 max-w-lg mx-auto">
              <h1 className="font-medium text-xs mb-3">Payment Methods</h1>
              <div className="space-y-2">
                <label className="flex items-start gap-4 py-2 px-4 border rounded-md cursor-pointer hover:shadow-lg transition-shadow">
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="font-medium text-[12px]">
                        Credit/Debit Cards
                      </p>
                      <p className="text-gray-500 text-[10px]">
                        Pay with your Credit / Debit Card
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <FaCcVisa />
                      <SiAmericanexpress />
                      <FaCcMastercard />
                    </div>
                  </div>
                </label>

                <label className="flex items-start gap-4 py-2 px-4 border rounded-md cursor-pointer hover:shadow-lg transition-shadow">
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="font-medium text-[12px]">
                        Direct Bank Transfer
                      </p>
                      <p className="text-gray-500 text-[10px]">
                        Make payment directly through bank account.
                      </p>
                    </div>
                  </div>
                </label>

                <label className="flex items-start gap-4 py-2 px-4 border rounded-md cursor-pointer hover:shadow-lg transition-shadow">
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="font-medium text-[12px]">
                        Other Payment Methods
                      </p>
                      <p className="text-gray-500 text-[10px]">
                        Make payment through Gpay, Paypal, Paytm etc
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <FaPaypal />
                      <FaCcAmazonPay />
                      <FaGooglePay />
                      <FaCcApplePay />
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="mb-[7vw]">
            <h1 className="text-[14px] font-medium">Enter OTP</h1>
            <p className="mt-4 text-center text-[12px] text-gray-600">
              Enter your 4-digit card pin to confirm this payment
            </p>
            <div className="w-full flex justify-center gap-4 mt-6">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 text-black z-50 font-manrope flex items-center justify-end bg-white bg-opacity-50">
      <div className="bg-white p-8 h-screen w-[30%]">
        <div className="flex text-[#B740A1] justify-between items-center">
          <h1 className="text-[#B740A1] text-xs">Your Cart - 1 item</h1>
          <ImCancelCircle onClick={handleClosePopup} />
        </div>
        <div className="border flex border-[#9C00AD63] rounded-2xl mt-5 w-full h-[10vw] p-4">
          <div className="w-[10vw] rounded-2xl items-center justify-center flex h-full bg-[#9C00AD63]">
            <img src={brain} alt="" />
          </div>
          <div className="text-black w-full py-2 px-4">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-xs font-medium">Behavioral therapy</h1>
              <MdDeleteForever />
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="">
                <h1 className="text-[10px] mt-5">6-Month Validity</h1>
                <h1 className="text-[10px]">30 Sessions at ₹600/session</h1>
                <h1 className="text-[10px]">Save ₹8000 overall!</h1>
              </div>
              <h1 className="mt-[4vw] text-sm font-bold">Rs 46000</h1>
            </div>
          </div>
        </div>
        <div className="flex mt-5 gap-2 justify-center items-center w-full">
          <p className="text-[10px]">
            Explore educational trends, teaching strategies, and edtech
            innovations that are Explore educational trends, teaching
            strategies, and edtech innovations that are{" "}
          </p>
          <div className="border gap-2 flex items-center justify-center border-[#9C00AD63] px-2 py-2 w-[15vw]">
            <h1>
              <CiSquarePlus size={20} />
            </h1>
            <h1>1</h1>
            <h1>
              <CiSquareMinus size={20} />
            </h1>
          </div>
        </div>
        <div className="flex mt-3 gap-2 w-full">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="border border-[#9C00AD63] w-full px-4 py-1 text-xs rounded-md"
          />
          <button className="bg-[#B740A1] text-white px-4 py-2 text-xs rounded-md ">
            Apply
          </button>
        </div>

        {/* Price Details */}
        <div className="mt-6">
          <div className="flex justify-between text-sm">
            <span className="text-[10px]">Subtotal</span>
            <span className="text-[10px]">₹160.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[10px]">Sales Tax (6.5%)</span>
            <span className="text-[10px]">₹4.23</span>
          </div>
          <div className="flex justify-between text-sm font-bold">
            <span className="text-[12px]">Total Due</span>
            <span className="text-[12px]">₹164.23</span>
          </div>
        </div>

        <div className="mt-5">{renderStepContent()}</div>
        {!orderConfirmed && (
          <div className="flex bg-[#F1C6FE94] items-center justify-between border-t py-4 px-5">
            {step > 1 && (
              <button
                onClick={handlePrevStep}
                className="text-black border border-[#9C00AD] px-4 py-1 rounded-full text-xs flex items-center gap-2"
              >
                <div className="w-6 h-6 rotate-180 text-white bg-[#B7407D] rounded-full flex justify-center items-center">
                  <BsArrowRightShort size={20} />
                </div>
                Back
              </button>
            )}
            <h1 className="text-sm font-bold">
              ₹164.23{" "}
              <span className="text-[10px] font-normal">Includes tax</span>
            </h1>
            <button
              onClick={handleNextStep}
              className="text-black border border-[#9C00AD] px-4 py-1 rounded-full text-xs flex items-center gap-2"
            >
              {step === 3 ? "Confirm" : "Next"}
              <div className="w-6 h-6 text-white bg-[#B7407D] rounded-full flex justify-center items-center">
                <BsArrowRightShort size={20} />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const PriceBody = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [amount, setAmount] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleCardSelect = (cardIndex, cardAmount) => {
    setSelectedCard(cardIndex); // Highlight the selected card
    setAmount(cardAmount); // Update the selected amount
  };

  console.log(amount, "amount");
  
  const handleBuyNowClick = () => {
    if (!amount) {
      alert("Please select a plan before proceeding.");
      return;
    }
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  const storedToken = localStorage.getItem("authToken");
  console.log(storedToken), "storedToken";

  const handlePayment = async () => {
    try {
        console.log("enter first");
        
      const { data: order } = await axiosInstance.post(
        "/api/payment/create-order",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      const options = {
        key: "rzp_test_v6tbOXA491rzAG",
        amount: order.amount,
        currency: order.currency,
        name: "Test Payment",
        description: "Test Transaction",
        order_id: order.id,
        handler: async (response) => {
          const verificationData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            amount,
            currency: "INR",
          };
          try {
            const { data } = await axios.post(
              "/api/payment/verify",
              verificationData
            );
            setPaymentStatus(data.message || "Payment successful!");
          } catch (error) {
            setPaymentStatus("Payment verification failed.");
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  const therapyCards = [
    {
      amount: 24000,
      discount: "10% Off!",
      sessions: 15,
      sessionCost: 1600,
      validity: "3-Month Validity",
      savings: 3000,
    },
    {
      amount: 18000,
      discount: "15% Off!",
      sessions: 10,
      sessionCost: 1800,
      validity: "2-Month Validity",
      savings: 2000,
    },
    {
      amount: 12000,
      discount: "20% Off!",
      sessions: 5,
      sessionCost: 2000,
      validity: "1-Month Validity",
      savings: 1000,
    },
  ];
  return (
    <>
      <div className=" hidden md:flex w-full h-full font-raleway 2xl:p-10 md:p-4 gap-4 2xl:px-[5vw] md:px-10">
        <div className="flex w-[15%] flex-col gap-4">
          <div className="w-[10vw] h-[10vw] bg-[#D9D9D9]"></div>
          <div className="w-[10vw] h-[10vw] bg-[#D9D9D9]"></div>
          <div className="w-[10vw] h-[10vw] bg-[#D9D9D9]"></div>
          <div className="w-[10vw] h-[10vw] bg-[#D9D9D9]"></div>
        </div>
        <div className="">
          <div className="w-[40vw] h-[43.75vw] bg-[#D9D9D9]"></div>
        </div>
        <div className="ml-4 w-[45%] pr-4">
          <div className="flex flex-col">
            <h1 className="text-4xl">
              Select Perfect Plan For Your Child's Needs
            </h1>
            <p className=" text-xs mt-4 font-montserrat text-[#F6E8FB]">
              Find the ideal support plan tailored to your child’s unique
              journey. Our options are designed to provide targeted
              guidance,whether for developmental assessments, therapy, or
              academic support, ensuring a comprehensive approach to their
              growth and success.
            </p>
            <p className="italic text-xs mt-4 text-[#F6E8FB]">
              "Looking to support another child’s journey? You can also gift
              this assessment, offering meaningful support and valuable insights
              to families navigating similar paths."
            </p>
          </div>
          <div className="mt-4 font-montserrat">
            <h1>700₹</h1>
            <div className="text-[9px]">
              <h1 className="text-[#F6E8FB]">originally ₹2000</h1>
              <h1 className="text-[#F6E8FB]">(Comprehensive Evaluation)</h1>
              <h1 className="text-[#F6E8FB]">Includes Formal Report</h1>
              <h1 className="text-[#F6E8FB]">Detailed Explanation</h1>
              <h1 className="text-[#F6E8FB]">Easy & fast procedure</h1>
            </div>
          </div>
          <div className="mt-4">
            <h1>Benefits</h1>
          </div>
          <div className="">
            <div className="">
              <div className="mt-2 flex gap-4">
                <h1 className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center">
                  In-Depth Assessment
                </h1>
                <h1 className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center">
                  Personalized therapy
                </h1>
              </div>
              <div className="mt-2 flex gap-4">
                <h1 className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center">
                  Addaptive learning support{" "}
                </h1>
                <h1 className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center">
                  Continuos feedback
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="">
              <h1 className="text-2xl font-semibold text-white">Add Therapy</h1>
            </div>
            <div className="flex mt-6 gap-4">
              {/* Card 1 */}
              {therapyCards.map((card, index) => (
                <div
                  key={index}
                  className={`therapy-card ${
                    selectedCard === index ? "selected" : ""
                  }`}
                  onClick={() => handleCardSelect(index, card.amount)}
                >
                  <div className="bg-[#43284C4D]  rounded-lg p-4 text-white w-[90%] sm:w-[18vw] md:w-[22vw] lg:w-[15vw]">
                    <div className="text-center mb-4">
                      <span className="bg-pink-500 text-xs rounded-full px-2 py-1">
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
                      
                      <p className="text-xs mt-2">{card.sessions}Month Validity</p>
                      <p className="text-xs">15 Sessions at ₹{card.sessionCost}/session</p>
                      <p className="text-xs font-bold mt-2">
                      Save ₹{card.savings} overall!
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex mt-5 gap-4">
              {/* Share Button */}
              <div className="relative w-full flex justify-center items-center rounded-lg p-[2px] bg-gradient-to-r from-[#D2407480] to-[#6518B480]"
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

              {/* Add to Cart Button */}
              <div className="relative w-full flex justify-center items-center rounded-lg p-[2px] bg-gradient-to-r from-[#D2407480] to-[#6518B480]">
                <button className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="flex mt-5 gap-4">
              {/* Share Button */}
              <div className="relative w-full flex justify-center items-center rounded-lg p-[2px] bg-gradient-to-r from-[#D2407480] to-[#6518B480]">
                <button
                //   onClick={handleBuyNowClick}
                  onClick={handlePayment}
                  className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden w-full h-full font-raleway p-4 gap-4">
        <div className="flex flex-col gap-4 items-center">
          {/* Center Image */}
          <div className="w-[90vw] h-[60vw] bg-[#D9D9D9]"></div>
          {/* Left Column */}
          <div className="flex gap-2">
            <div className="w-[20vw] h-[20vw] bg-[#D9D9D9]"></div>
            <div className="w-[20vw] h-[20vw] bg-[#D9D9D9]"></div>
            <div className="w-[20vw] h-[20vw] bg-[#D9D9D9]"></div>
            <div className="w-[20vw] h-[20vw] bg-[#D9D9D9]"></div>
          </div>

          {/* Text Content */}
          <div className="text-left mt-4 px-2">
            <h1 className="text-xl font-bold">
              Select Perfect Plan For Your Child's Needs
            </h1>
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

          {/* Pricing */}
          <div className="text-left w-full px-2 font-montserrat">
            <h1 className="text-2xl">700₹</h1>
            <div className="text-[10px] mt-2 text-[#FFFEF8]">
              <p>originally ₹2000</p>
              <p>(Comprehensive Evaluation)</p>
              <p>Includes Formal Report</p>
              <p>Detailed Explanation</p>
              <p>Easy & fast procedure</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-4">
            <h1 className="text-lg text-left px-2 font-semibold">Benefits</h1>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                In-Depth Assessment
              </span>
              <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                Personalized Therapy
              </span>
              <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                Adaptive Learning Support
              </span>
              <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                Continuous Feedback
              </span>
            </div>
          </div>

          {/* Therapy Options */}
          <div className="mt-4">
            <h1 className="text-xl font-bold text-white text-left px-2">
              Add Therapy
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {/* Therapy Cards */}
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#43284C4D] rounded-lg p-4 text-white w-[80%] text-center"
                  >
                    <div className="mb-2">
                      <span className="bg-pink-500 text-xs rounded-full px-2 py-1">
                        10% Off!
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">
                        ₹24000{" "}
                        <span className="line-through text-gray-400">
                          ₹27000
                        </span>
                      </p>
                      <p className="text-xs mt-2">3-Month Validity</p>
                      <p className="text-xs">15 Sessions at ₹1600/session</p>
                      <p className="text-xs font-bold mt-2">
                        Save ₹3000 overall!
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button className="w-[40%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg">
              Share
            </button>
            <button className="w-[40%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg">
              Add to cart
            </button>
            <button
              onClick={handleBuyNowClick}
              className="w-[85%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
      {/* <PaymentPopup isVisible={isPopupVisible} onClose={handleClosePopup} /> */}
    

      {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
    </>
  );
};

export default PriceBody;
