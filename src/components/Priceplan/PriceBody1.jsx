import React, { useState, useEffect } from 'react';
import axiosInstance from '../config/axiosInstance';
import './PriceBody.css';
import most from './most.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PriceBody1 = ({ selectedOption }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [amount, setAmount] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image

  const images = [
    'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/120.png',
    'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/130.png',
    'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/140.png',
    'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/150.png',
    'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/160.png',
  ]; // Image array

  const handleCardSelect = (cardIndex, cardAmount) => {
    setSelectedCard(cardIndex); // Highlight the selected card
    setAmount(cardAmount); // Update the selected amount
  };

  useEffect(() => {
    const preOrderData = JSON.parse(localStorage.getItem('preOrderData'));

    if (!preOrderData) return;

    console.log('Checking localStorage after redirect:', preOrderData);

    if (preOrderData.selectedCardType === 'therapy') {
      handlePayment(preOrderData.selectedCard);
    }
  }, []); // Dependency array remains empty as no external state is required

  const handlePayment = async (selectedCard) => {
    console.log('handlePayment called for therapy plan:', selectedCard);

    if (selectedCard === null) {
      return toast.error('Please select a plan before proceeding.');
    }

    const storedToken = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!storedToken || !user || !user._id) {
      toast.error('You need to log in to proceed with the payment.');

      localStorage.setItem(
        'preOrderData',
        JSON.stringify({
          selectedCardType: 'therapy',
          selectedCard,
          amount: therapyCards[selectedCard]?.amount,
          sessions: therapyCards[selectedCard]?.sessions,
          validity: 3,
          fromPage: location.pathname, // Store current page
        })
      );

      return navigate('/login');
    }

    // Ensure valid plan details
    const amount = therapyCards[selectedCard]?.amount;
    const sessions = therapyCards[selectedCard]?.sessions;
    const validity = 3;

    if (!amount || !sessions) {
      return toast.error('Invalid plan details. Please try again.');
    }

    try {
      console.log('Initiating payment process...');

      // Create order
      const { data } = await axiosInstance.post(
        '/api/payment/create-order',
        {
          user_id: user._id,
          service_type: 'Therapy',
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
        console.error('Razorpay is not loaded');
        return toast.error('Failed to load Razorpay. Please refresh and try again.');
      }

      // Razorpay payment options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderAmount,
        currency,
        name: 'Aignosis',
        description: 'Payment for Therapy',
        order_id,
        handler: async (response) => {
          try {
            console.log('Verifying payment...');
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
              // localStorage.removeItem("preOrderData");
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

  const therapyCards = [
    {
      amount: 5000,
      discount: 'Shark tank 50% off',
      sessions: 10,
      sessionCost: 500,
      validity: '30',
      savings: 5000,
    },
    {
      amount: 7500,
      discount: 'Shark tank 50% off',
      sessions: 15,
      sessionCost: 500,
      validity: '45',
      savings: 7500,
    },
    {
      amount: 10000,
      discount: 'Shark tank 50% off',
      sessions: 20,
      sessionCost: 500,
      validity: '90',
      savings: 10000,
    },
  ];
  return (
    <>
      <ToastContainer />
      <div className="">
        <div className="2xl:p-10 2xl:px-[5vw] hidden h-full w-full font-raleway md:flex md:p-4 md:px-10">
          <div className="flex">
            {/* Left Column: Thumbnails */}
            <div className="flex w-[20%] flex-col gap-4 overflow-hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="h-[10vw] w-[15vw] cursor-pointer bg-[#D9D9D9]"
                  onClick={() => setSelectedImage(image)} // Update selected image on click
                >
                  <img className="h-full w-[75%] max-sm:w-full" src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            {/* Right Column: Display Selected Image */}
            <div className="ml-[1vw] flex h-[43.75vw] w-[40vw] overflow-hidden">
              <div className="h-[43.75vw] w-[40vw] bg-[#D9D9D9]">
                <img
                  className="h-full w-full object-cover"
                  src={selectedImage || images[0]} // Default to the first image if none is selected
                  alt="Selected"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="w-[40%] pr-4">
            <div className="flex flex-col">
              <h1 className="text-4xl">Select best therapy plan For Your Child's Needs</h1>
              <p className="mt-4 pr-6 font-montserrat text-xs text-[#F6E8FB]">
                Find the ideal support plan tailored to your child’s unique journey. Our options are designed to provide
                targeted guidance,whether for developmental assessments, therapy, or academic support, ensuring a
                comprehensive approach to their growth and success.
              </p>

              <p className="mt-4 pr-6 font-montserrat text-xs italic text-[#F6E8FB]">
                "Looking to support another child’s journey? You can also gift this assessment, offering meaningful
                support and valuable insights to families navigating similar paths."
              </p>
            </div>
            <div className="mt-5">
              <div className="">
                <h1 className="text-2xl font-semibold text-white">Add Therapy</h1>
              </div>
              <div className="scrollbar-hidden relative mt-6 flex h-full gap-4 overflow-x-auto">
                {therapyCards.map((card, index) => (
                  <div
                    key={index}
                    className={`w-full cursor-pointer rounded-3xl bg-[#261431] p-8 ${
                      selectedCard === index ? 'rounded-3xl border-2 border-[#B7407D54]' : ''
                    }`}
                    onClick={() => handleCardSelect(index, card.amount)}
                  >
                    {index === 1 && (
                      <img
                        src={most}
                        alt="Most Popular"
                        className="left-1/6 absolute -top-2 w-20 -translate-x-1/2 transform"
                      />
                    )}

                    <div className="w-[90%] rounded-lg bg-[#43284C4D] p-4 text-white sm:w-[18vw] md:w-[22vw] lg:w-[15vw]">
                      <div className="mb-4 text-center">
                        <span className="rounded-full bg-[#B7407D54] px-1 py-1 text-xs">{card.discount} Off!</span>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold">
                          ₹{card.amount}{' '}
                          <span className="text-gray-400 line-through">₹{card.amount + card.savings}</span>
                        </p>

                        <p className="mt-2 text-xs">{card.validity} -Days Validity</p>
                        <p className="text-xs">
                          {card.sessions} Sessions at ₹{card.sessionCost}
                          /session
                        </p>
                        <p className="mt-2 text-xs font-bold">Save ₹{card.savings} overall!</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                            url: window.location.href, // Current page URL
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
                      //   onClick={handleBuyNowClick}
                      onClick={() => handlePayment(selectedCard)}
                      className="w-full rounded-lg bg-transparent px-5 py-2 text-sm text-white"
                    >
                      Pre order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block h-full w-full gap-4 p-4 font-raleway md:hidden">
          <div className="flex flex-col items-center gap-4">
            {/* Center Image */}
            <div className="h-[80vw] w-[90vw] bg-[#D9D9D9]">
              <img
                className="h-full w-full object-center"
                src={selectedImage || images[0]} // Default to the first image if none is selected
                alt="Selected"
              />
            </div>

            {/* Left Column */}
            <div className="mt-4 flex w-full gap-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="h-[20vw] w-[20vw] cursor-pointer bg-[#D9D9D9]"
                  onClick={() => setSelectedImage(image)} // Update selected image on click
                >
                  <img className="h-full w-full object-cover" src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
            {/* Text Content */}
            <div className="mt-4 px-2 text-left">
              <span className="text-xl font-bold">Select Perfect Plan For Your Child's Needs</span>
              <p className="mt-2 font-montserrat text-xs text-[#F6E8FB]">
                Find the ideal support plan tailored to your child’s unique journey. Our options are designed to provide
                targeted guidance, whether for developmental assessments, therapy, or academic support, ensuring a
                comprehensive approach to their growth and success.
              </p>
              <p className="mt-2 text-xs italic text-[#F6E8FB]">
                "Looking to support another child’s journey? You can also gift this assessment, offering meaningful
                support and valuable insights to families navigating similar paths."
              </p>
            </div>
            <div className="mt-4">
              <span className="px-2 text-left text-lg font-semibold">Benefits</span>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="w-[40%] rounded-lg bg-[#43284C4D] px-2 py-2 text-center text-[10px]">
                  Better Social Skills & Communication
                </span>
                <span className="w-[40%] rounded-lg bg-[#43284C4D] px-2 py-2 text-center text-[10px]">
                  Stronger Emotional Connection
                </span>
                <span className="w-[40%] rounded-lg bg-[#43284C4D] px-2 py-2 text-center text-[10px]">
                  Happier Families with Clear Guidance
                </span>
                <span className="w-[40%] rounded-lg bg-[#43284C4D] px-2 py-2 text-center text-[10px]">
                  Boosted Confidence & Happiness
                </span>
                <span className="w-[40%] rounded-lg bg-[#43284C4D] px-2 py-2 text-center text-[10px]">
                  Faster Developmental Growth{' '}
                </span>
                <span className="w-[40%] rounded-lg bg-[#43284C4D] px-2 py-2 text-center text-[10px]">
                  Improved Focus & Learning{' '}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <span className="px-2 text-left text-xl font-bold text-white">Add Therapy</span>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                {therapyCards.map((card, index) => (
                  <div
                    key={index}
                    className={`relative w-full cursor-pointer rounded-3xl bg-[#261431] p-8 ${
                      selectedCard === index ? 'rounded-3xl border-2 border-[#B7407D54]' : ''
                    }`}
                    onClick={() => handleCardSelect(index, card.amount)}
                  >
                    {index === 1 && (
                      <img
                        src={most}
                        alt="Most Popular"
                        className="left-1/5 absolute top-[-5px] w-16 -translate-x-1/2 transform sm:w-20"
                      />
                    )}

                    <div className="mb-2">
                      <span className="rounded-full bg-[#B7407D54] px-2 py-1 text-xs">{card.discount}</span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">
                        ₹{card.amount} <span className="text-gray-400 line-through">₹{card.amount + card.savings}</span>
                      </p>
                      <p className="mt-2 text-xs">{card.validity} -Days Validity</p>
                      <p className="text-xs">
                        {card.sessions} Sessions at ₹{card.sessionCost}/session
                      </p>
                      <p className="mt-2 text-xs font-bold">Save ₹{card.savings} overall!</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
              {/* <button className="w-[40%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg">
                  Add to cart
                </button>  */}
              <button
                onClick={() => handlePayment(selectedCard)}
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

export default PriceBody1;
