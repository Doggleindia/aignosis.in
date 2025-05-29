import React, { useState, useEffect } from 'react';
import axiosInstance from '../config/axiosInstance';
import './PriceBody.css';
import most from './most.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const PriceBody = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [selectedImage2, setSelectedImage2] = useState(null); // State to hold the selected image
  const [sessions, setSessions] = useState(null);
  const [validity, setValidity] = useState(null);
  const [selectedCardType, setSelectedCardType] = useState(null);
  const [selectedTestCard, setSelectedTestCard] = useState(null);

  const images2 = [
    'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/TEST+PAGE+FIRST+IMAGE.png',
    'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/501.png',
    'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/601.png',
    'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/701.png',
    'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/801.png',
  ]; // Image array

  const handleCardSelect = (cardIndex) => {
    if (cardIndex < 0 || cardIndex >= testCards.length) {
      console.error('Invalid card index:', cardIndex);
      return;
    }

    setSelectedTestCard(cardIndex);
    setSelectedCardType('test');
    setAmount(testCards[cardIndex].price);
    setSessions(1); // Test usually has 1 session
    setValidity(testCards[cardIndex].validity);
  };
  const storedToken = localStorage.getItem('authToken');
  console.log('handleCardSelect is defined:', typeof handleCardSelect === 'function');

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const preOrderData = JSON.parse(localStorage.getItem('preOrderData'));

    console.log('Checking localStorage after redirect:', preOrderData); // ✅ Debugging

    if (preOrderData && storedToken) {
      console.log('User logged in, restarting payment...');
      handlePayment(preOrderData.selectedCardType);
    }
  }, []);

  const handlePayment = async (selectedCardType) => {
    console.log('handlePayment called with:', selectedCardType); // ✅ Debugging

    if (!selectedCardType) {
      return toast.error('Please select a plan before proceeding.');
    }

    const storedToken = localStorage.getItem('authToken');

    const storedPreOrderData = JSON.parse(localStorage.getItem('preOrderData')) || {
      selectedCardType: 'test',
      amount,
      sessions,
      validity,
    };

    if (!storedPreOrderData.selectedCardType) {
      return toast.error('Please select a plan before proceeding.');
    }

    // 🔹 If user is not logged in, store data and redirect to login
    if (!storedToken) {
      toast.error('You need to log in to proceed with the payment.');

      const preOrderData = {
        ...storedPreOrderData,
        fromPage: location.pathname, // Store current page for redirection after login
      };

      localStorage.setItem('preOrderData', JSON.stringify(preOrderData));
      return navigate('/login');
    }

    try {
      console.log('Initiating payment process...');

      const user = JSON.parse(localStorage.getItem('user'));
      if (!user || !user._id) {
        throw new Error('User data is missing. Please log in again.');
      }

      // 🔹 Step 1: Create an order
      const { data } = await axiosInstance.post(
        '/api/payment/create-order',
        {
          user_id: user._id,
          service_type: storedPreOrderData.selectedCardType === 'test' ? 'Test' : 'Therapy',
          amount: storedPreOrderData.amount,
          sessions: storedPreOrderData.sessions,
          validity: storedPreOrderData.validity,
          phoneNumber: user.phoneNumber,
        },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      if (!data.success) throw new Error('Order creation failed');

      const { id: order_id, amount: orderAmount, currency } = data.order;
      console.log('Order created successfully:', order_id);

      if (!window.Razorpay) {
        toast.error('Failed to load Razorpay. Please refresh and try again.');
        return console.error('Razorpay is not loaded');
      }

      // 🔹 Step 2: Initialize Razorpay
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderAmount,
        currency,
        name: 'Aignosis',
        description: `Payment for ${storedPreOrderData.selectedCardType === 'test' ? 'Test' : 'Therapy'}`,
        order_id,
        handler: async (response) => {
          try {
            console.log('Verifying payment...');

            // 🔹 Step 3: Verify payment
            const verifyResponse = await axiosInstance.post(
              '/api/payment/verify-payment',
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              { headers: { Authorization: `Bearer ${storedToken}` } }
            );

            if (verifyResponse.data.success) {
              toast.success('Payment successful! Your service is activated.');

              // 🔹 Step 4: Clear preOrderData after successful payment
              localStorage.removeItem('preOrderData');

              setTimeout(() => navigate('/dashboard'), 2000);
            } else {
              toast.error('Payment verification failed. Please contact support.');
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
            toast.error('Payment verification failed.');
          }
        },
        theme: { color: '#3399cc' },
      };

      console.log('Opening Razorpay payment window...');
      new window.Razorpay(options).open();
    } catch (error) {
      console.error('Payment initiation failed:', error);
      toast.error('Failed to initiate payment. Please try again.');
    }
  };

  const testCards = [
    {
      id: 8,
      discount: 'Shark tank 50% off',
      title: 'Aignosis Screening – Standard',
      subtitle: 'Includes Autism Screening Test + Expert Consultation',
      price: 700,
      validity: '30',
      actualprice: 999,
    },
    {
      id: 9,
      discount: 'Shark tank 50% off',
      title: 'Aignosis Screening – Comprehensive',
      subtitle: 'Includes Autism Screening Test + Expert Consultation + Assessments with 2  Sessions',
      price: 1899,
      validity: '30',
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
        <div className="2xl:p-10 2xl:px-[5vw] hidden h-full w-full font-raleway md:flex md:p-4 md:px-10">
          <div className="top-4 flex">
            <div className="flex">
              {/* Left Column: Thumbnails */}
              <div className="flex w-[20%] flex-col gap-4 overflow-hidden">
                {images2.map((image, index) => (
                  <div
                    key={index}
                    className="h-[10vw] w-[15vw] cursor-pointer bg-[#D9D9D9]"
                    onClick={() => setSelectedImage2(image)} // Update selected image on click
                  >
                    <img
                      className="h-full w-[75%] object-fill max-sm:w-full"
                      loading=""
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* Right Column: Display Selected Image */}
              <div className="ml-[1vw] flex h-[43.75vw] w-[40vw] overflow-hidden">
                <div className="h-[43.75vw] w-[40vw] bg-[#D9D9D9]">
                  <img
                    className="h-full w-full object-cover"
                    src={selectedImage2 || images2[0]} // Default to the first image if none is selected
                    alt="Selected"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45%] flex-1 overflow-auto pr-4">
            <div className="flex flex-col">
              <h1 className="text-4xl">Early Autism Screening for a Brighter Tomorrow</h1>
              <div className="mt-2 flex items-center text-[#F6E8FB]">
                <span className="text-lg text-yellow-500">4.9</span>
                <span className="ml-1 text-lg text-yellow-500">★★★★★</span>
                <span className="ml-2 text-sm">(Based on 106 reviews)</span>
              </div>
            </div>

            <div className="mt-4">
              <span className="text-2xl font-semibold text-white">Test</span>
            </div>
            <div className="relative mt-6 flex gap-4">
              {testCards.map((card, index) => (
                <div
                  key={index}
                  className={`h-full w-full cursor-pointer rounded-3xl bg-[#43284C4D] p-6 ${
                    selectedTestCard === index ? 'border-2 border-[#B740A1]' : 'border-[#5455694D]'
                  }`}
                  onClick={() => handleCardSelect(index, 'test')}
                >
                  <div className="flex h-[2vw] w-full items-center justify-center rounded-full bg-[#B7407D54]">
                    <span className="text-xs">{card.discount}</span>
                  </div>
                  <h2 className="mt-3">{card.title}</h2>
                  <h3 className="text-[9px]">{card.subtitle}</h3>
                  <p className="mt-2 text-xs">{card.validity}-Days Validity</p>
                  <span className="mt-3 font-manrope">
                    ₹{card.price} <span className="text-[10px] line-through">(₹{card.actualprice})</span>
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

              <div className="mt-5 flex gap-4">
                <div className="relative flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D24074] to-[#6518B4] p-[2px] opacity-60">
                  <div
                    className="w-full rounded-full bg-[#1A0C25] p-[2px]"
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: 'Check this out!',
                            text: 'I found something interesting for you.',
                            url: window.location.href,
                          })
                          .then(() => console.log('Content shared successfully'))
                          .catch((error) => console.error('Error sharing content', error));
                      } else {
                        alert('Web Share API is not supported in your browser.');
                      }
                    }}
                  >
                    <button className="w-full rounded-lg bg-transparent px-5 py-2 text-sm text-white">Share</button>
                  </div>
                </div>
                <div className="relative flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D24074] to-[#6518B4] p-[2px]">
                  <div className="w-full rounded-full bg-[#1A0C25] p-[2px]">
                    <button
                      onClick={() =>
                        window.open(
                          'https://docs.google.com/forms/d/e/1FAIpQLSerENDa7bKynm9LWWphS8fo5mwKWbgZvaJeKKdTNC-xDijZ-Q/viewform?usp=sharing',
                          '_blank'
                        )
                      }
                      className="w-full rounded-lg bg-transparent px-5 py-2 text-sm text-white"
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
        <div className="block h-full w-full gap-4 p-4 font-raleway md:hidden">
          <div className="flex flex-col items-center gap-2">
            {/* Center Image */}
            <div className="h-[80vw] w-[90vw] bg-[#D9D9D9]">
              <img
                className="h-full w-full object-center"
                src={selectedImage2 || images2[0]} // Default to the first image if none is selected
                alt="Selected"
              />
            </div>

            {/* Left Column */}
            <div className="mt-4 flex w-full gap-2">
              {images2.map((image, index) => (
                <div
                  key={index}
                  className="h-[20vw] w-[20vw] cursor-pointer bg-[#D9D9D9]"
                  onClick={() => setSelectedImage2(image)} // Update selected image on click
                >
                  <img className="h-full w-full object-cover" src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            {/* Text Content */}
            <div className="mt-4 px-2 text-left">
              <h1 className="text-xl font-bold">Early Autism Screening for a Brighter Tomorrow</h1>
              <div className="mt-2 flex items-center text-[#F6E8FB]">
                <span className="text-lg text-yellow-500">4.9</span>
                <span className="ml-1 text-lg text-yellow-500">★★★★★</span>
                <span className="ml-2 text-sm">(Based on 106 reviews)</span>
              </div>
            </div>

            <div className="mb-[-2vw] mt-2 pr-80 text-left">
              <div className="mr-auto px-2 text-left text-xl font-bold text-white">Test</div>
            </div>
            <div className="relative mt-6 flex flex-col gap-4">
              {testCards.map((card, index) => (
                <div
                  key={index}
                  className={`h-full w-full cursor-pointer rounded-3xl bg-[#43284C4D] p-6 ${
                    selectedTestCard === index ? 'border-2 border-[#B740A1]' : 'border-[#5455694D]'
                  }`}
                  onClick={() => handleCardSelect(index, 'test')}
                >
                  <div className="flex h-[8vw] w-[40vw] items-center justify-center rounded-full bg-[#B7407D54]">
                    <span className="text-xs">{card.discount}</span>
                  </div>
                  <h2 className="mt-3">{card.title}</h2>
                  <h3 className="text-[9px]">{card.subtitle}</h3>
                  <span className="mt-3 font-manrope">
                    ₹{card.price} <span className="text-[10px] line-through">(₹{card.actualprice})</span>
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

            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: 'Check this out!',
                        text: 'I found something interesting for you.',
                        url: window.location.href, // Current page URL
                      })
                      .then(() => console.log('Content shared successfully'))
                      .catch((error) => console.error('Error sharing content', error));
                  } else {
                    alert('Web Share API is not supported in your browser.');
                  }
                }}
                className="w-[100%] rounded-lg bg-gradient-to-r from-[#D2407480] to-[#6518B480] px-5 py-2 text-sm text-white"
              >
                Share
              </button>

              <button
                onClick={() =>
                  window.open(
                    'https://docs.google.com/forms/d/e/1FAIpQLSerENDa7bKynm9LWWphS8fo5mwKWbgZvaJeKKdTNC-xDijZ-Q/viewform?usp=sharing',
                    '_blank'
                  )
                }
                className="w-[100%] rounded-lg bg-gradient-to-r from-[#D2407480] to-[#6518B480] px-5 py-2 text-sm text-white"
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
