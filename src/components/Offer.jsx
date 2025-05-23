import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
  const [isVisible, setIsVisible] = useState(() => {
    const isDismissed = sessionStorage.getItem('offerDismissed');
    return !isDismissed;
  });
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = sessionStorage.getItem('offerTime');
    return savedTime ? parseInt(savedTime, 10) : 10 * 60; // Default to 10 minutes
  });

  // Countdown timer logic
  useEffect(() => {
    if (!isVisible || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        sessionStorage.setItem('offerTime', newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsVisible(false);
    }
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return {
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('offerDismissed', 'true');
  };

  const { minutes, seconds } = formatTime(timeLeft);

  // useEffect(() => {
  //     const handleScroll = () => {
  //         const scrollPosition = window.scrollY;
  //         const shouldHide = scrollPosition > 300 && scrollPosition < 600;
  //         setIsVisible(!shouldHide);
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    isVisible && (
      <>
        <div className="fixed bottom-0 left-0 right-0 z-50 hidden items-center justify-between bg-gradient-to-t from-[#43284C] to-[#241E22] px-5 py-2 font-raleway text-white shadow-lg transition-all duration-500 md:flex">
          <div className="flex items-center">
            <span className="mr-10 text-base font-semibold">OFFER ENDS IN</span>
            <div className="flex space-x-3">
              <div className="text-center">
                <span className="block text-xl font-bold">{minutes}</span>
                <span className="text-sm">Minutes</span>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="text-center">
                <span className="block text-xl font-bold">{seconds}</span>
                <span className="text-sm">Seconds</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-10 text-base font-semibold">
              Schedule Your Screening Today for a Brighter Tomorrow!
            </span>
            <div className="relative flex w-[10vw] items-center justify-center rounded-full bg-gradient-to-r from-[#D24074] to-[#6518B4] p-[2px] opacity-60">
              <div className="w-full rounded-full bg-[#38253D] p-[2px]">
                <Link to="/prices" className="w-full rounded-lg bg-transparent px-5 py-2 text-sm text-white">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          <button onClick={handleDismiss} className="ml-4 text-sm font-bold text-red-500 hover:text-red-700">
            ✕
          </button>
        </div>
        <div className="fixed bottom-0 left-0 right-0 m-2 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-t from-[#43284C] to-[#241E22] px-4 py-3 font-raleway text-white shadow-lg transition-all duration-500 md:hidden">
          <div className="flex w-full items-center justify-between px-2">
            <span className="text-sm font-semibold">OFFER ENDS IN</span>
            <button onClick={handleDismiss} className="text-sm font-bold text-red-500 hover:text-red-700">
              ✕
            </button>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="mt-2 flex items-center space-x-3">
              <div className="text-center">
                <span className="block text-lg font-bold">{minutes}</span>
                <span className="text-xs">Minutes</span>
              </div>
              <span className="text-xl font-bold">:</span>
              <div className="text-center">
                <span className="block text-lg font-bold">{seconds}</span>
                <span className="text-xs">Seconds</span>
              </div>
            </div>
            <Link
              to="/prices"
              className="mt-3 rounded-full bg-gradient-to-r from-[#D24074] to-[#6518B4] px-6 py-2 text-sm text-white"
            >
              Book Now
            </Link>
          </div>
        </div>
      </>
    )
  );
};

export default Offer;
