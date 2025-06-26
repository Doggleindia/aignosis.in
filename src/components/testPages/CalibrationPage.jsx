import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WebcamMicTest from './WebcamMicTest';
import { AppContext } from '../aignosisintegration/AppContext';
import PageUnavailable from './PageUnavailable';

const CalibrationPage = () => {
  const [showWebcamMicTest, setShowWebcamMicTest] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const { testData, setTestData } = useContext(AppContext);
  const [pageUnavailable, setPageUnavailable] = useState(true);

  console.log(testData);
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleNextClick = async () => {
    // Request fullscreen on user action
    function goFullScreen() {
      let elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
    await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    goFullScreen();
    setTestData({
      ...testData,
      videolanguage: selectedLanguage,
      calibrationCompleted: true,
    });
    setShowWebcamMicTest(true);
  };

  useEffect(() => {
    if (localStorage.getItem('isLicensedUser') === 'true') {
      setPageUnavailable(false);
      return;
    }
  }, [pageUnavailable]);
  return pageUnavailable ? (
    <PageUnavailable />
  ) : (
    <>
      {!showWebcamMicTest ? (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25] p-4">
          <div className="flex w-full max-w-[950px] flex-col items-center space-y-6 rounded-3xl bg-[#FDF9FF] p-8 shadow-lg">
            <div className="relative mb-2 text-4xl font-bold text-[#1A0C25]">
              <span className="relative z-10 font-montserrat">Aignosis</span>
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="h-[80px] w-[120px] rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-70 blur-2xl"></div>
              </div>
            </div>
            <h2 className="font-manrope text-2xl font-semibold">Calibration</h2>
            <p className="text-center font-raleway font-normal text-[#292738]">
              Please complete the task in sequence before proceeding to the next step.
            </p>

            <div className="w-full max-w-[500px] space-y-2 text-left font-raleway font-medium text-[#292738]">
              <p>
                1. Click each dog face one at a time as it appears on the screen, ensuring your child is looking at it
                before you click.
              </p>
              <p>2. Ensure your child watches the entire video without pausing or replaying it.</p>
              <p>3. When prompted in the video, call out for your child as instructed.</p>
            </div>

            <div className="w-full max-w-[400px]">
              <label className="mb-2 block font-raleway font-medium text-[#292738]">
                Select Video Calibration Language:
              </label>
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Choose language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>

            <div className="mt-6 flex w-full justify-center">
              <Link
                onClick={handleNextClick}
                className={`flex h-[50px] w-[200px] items-center justify-center rounded-full border font-montserrat font-semibold transition-colors ${
                  selectedLanguage
                    ? 'border-[#9C00AD] text-[#292738] hover:bg-[#1a0c25] hover:text-white'
                    : 'cursor-not-allowed border-gray-300 text-gray-400'
                }`}
                style={{ pointerEvents: selectedLanguage ? 'auto' : 'none' }}
              >
                Start calibration
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <WebcamMicTest />
      )}
    </>
  );
};

export default CalibrationPage;
