// // import React, { useState , useContext} from 'react';
// // import { Link } from 'react-router-dom';
// // import WebcamMicTest from './WebcamMicTest';
// // import { AppContext } from "../aignosisintegration/AppContext";

// // const CalibrationPage = () => {
// //   const [showWebcamMicTest, setShowWebcamMicTest] = useState(false);
// //   const [checks, setChecks] = useState({
// //     checkbox1: false,
// //     checkbox2: false,
// //     checkbox3: false,
// //   });
// //   const [selectedLanguage, setSelectedLanguage] = useState('');

// //   const handleLanguageChange = (e) => {
// //     setSelectedLanguage(e.target.value);
// //   };

// //   const handleCheckboxChange = (e) => {
// //     const { name, checked } = e.target;
// //     setChecks((prevState) => ({
// //       ...prevState,
// //       [name]: checked,
// //     }));
// //   };
// //   const {testData, setTestData} = useContext(AppContext);
// //   const allChecked = Object.values(checks).every((value) => value);

// //   const handleNextClick = () => {
// 

// //       setTestData({
// //         ...testData,
// //         videolanguage: selectedLanguage,
// //         calibrationCompleted: true,
// //       });

// //       setShowWebcamMicTest(true);
// //   };

// //   return (
// //     <>
// //       {!showWebcamMicTest ? (
// //         <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
// //           <div className="w-[900px] max-sm:w-[45vh] h-[550px] bg-[#FDF9FF] rounded-3xl flex flex-col items-center p-8 space-y-8">
// //             <div className="relative text-4xl font-bold text-[#1A0C25] mb-4">
// //               <span className="relative z-10 font-montserrat">Aignosis</span>
// //               <div className="absolute inset-0 flex justify-center items-center z-0">
// //                 <div className="w-[150px] h-[100px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-70"></div>
// //               </div>
// //             </div>
// //             <h2 className="text-2xl font-semibold font-manrope">Calibration</h2>
// //             <p className="text-center text-[#292738] font-raleway font-normal mb-6">
// //               Please complete the task in sequence before proceeding to the next step
// //             </p>

// //             <div className="space-y-3">
// //               <label className="text-[#292738] font-medium font-raleway">
// //                 Select Video Calibration Language: &nbsp;&nbsp;
// //               </label>
// //               <select
// //                 value={selectedLanguage}
// //                 onChange={handleLanguageChange}
// //                 className="border border-gray-300 rounded-md px-4 py-2"
// //               >
// //                 <option value="">Choose language</option>
// //                 <option value="English">English</option>
// //                 <option value="Hindi">Hindi</option>
// //               </select>
// //             </div>

// //             <div className="flex max-sm:flex-col max-sm:space-y-3 md:space-x-8 mt-[40px]">
// //               <Link
// //                 onClick={handleNextClick}
// //                 className={`flex items-center justify-center w-[200px] h-[50px] border ${
// //                 selectedLanguage
// //                     ? 'border-[#9C00AD] text-[#292738] hover:bg-[#1a0c25] hover:text-white'
// //                     : 'border-gray-300 text-gray-400 cursor-not-allowed'
// //                 } font-montserrat rounded-full font-semibold transition-colors`}
// //                 style={{ pointerEvents:selectedLanguage ? 'auto' : 'none' }}
// //               >
// //                 Start calibration
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       ) : (
// //         <WebcamMicTest />
// //       )}
// //     </>
// //   );
// // };

// // export default CalibrationPage;

// import React, { useState , useContext} from 'react';
// import { Link } from 'react-router-dom';
// import WebcamMicTest from './WebcamMicTest';
// import { AppContext } from "../aignosisintegration/AppContext";

// const CalibrationPage = () => {
//   const [showWebcamMicTest, setShowWebcamMicTest] = useState(false);
//   const [checks, setChecks] = useState({
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
//   });
//   const [selectedLanguage, setSelectedLanguage] = useState('');

//   const handleLanguageChange = (e) => {
//     setSelectedLanguage(e.target.value);
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setChecks((prevState) => ({
//       ...prevState,
//       [name]: checked,
//     }));
//   };
//   const {testData, setTestData} = useContext(AppContext);
//   const allChecked = Object.values(checks).every((value) => value);

//   const handleNextClick = () => {


//       setTestData({
//         ...testData,
//         videolanguage: selectedLanguage,
//         calibrationCompleted: true,
//       });

//       setShowWebcamMicTest(true);
//   };

//   return (
//     <>
//       {!showWebcamMicTest ? (
//         <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
//           <div className="w-[900px] max-sm:w-[45vh] h-[550px] bg-[#FDF9FF] rounded-3xl flex flex-col items-center p-8 space-y-8">
//             <div className="relative text-4xl font-bold text-[#1A0C25] mb-4">
//               <span className="relative z-10 font-montserrat">Aignosis</span>
//               <div className="absolute inset-0 flex justify-center items-center z-0">
//                 <div className="w-[150px] h-[100px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-70"></div>
//               </div>
//             </div>
//             <h2 className="text-2xl font-semibold font-manrope">Calibration</h2>
//             <p className="text-center text-[#292738] font-raleway font-normal mb-6">
//               Please complete the task in sequence before proceeding to the next step
//             </p>

//             <div className="text-left text-[#292738] font-raleway font-medium mb-4" style={{maxWidth: 500}}>
//               <p className="">1. Click each dog face one at a time as it appears on the screen, ensuring your child is looking at it before you click.</p>
//               <p className="">2. Ensure your child watches the entire video without pausing or replaying it.</p>
//               <p className="">3. When prompted in the video, call out for your child as instructed.</p>
//             </div>

//             <div className="space-y-3">
//               <label className="text-[#292738] font-medium font-raleway">
//                 Select Video Calibration Language: &nbsp;&nbsp;
//               </label>
//               <select
//                 value={selectedLanguage}
//                 onChange={handleLanguageChange}
//                 className="border border-gray-300 rounded-md px-4 py-2"
//               >
//                 <option value="">Choose language</option>
//                 <option value="English">English</option>
//                 <option value="Hindi">Hindi</option>
//               </select>
//             </div>

//             <div className="flex max-sm:flex-col max-sm:space-y-3 md:space-x-8 mt-[40px]">
//               <Link
//                 onClick={handleNextClick}
//                 className={`flex items-center justify-center w-[200px] h-[50px] border ${
//                 selectedLanguage
//                     ? 'border-[#9C00AD] text-[#292738] hover:bg-[#1a0c25] hover:text-white'
//                     : 'border-gray-300 text-gray-400 cursor-not-allowed'
//                 } font-montserrat rounded-full font-semibold transition-colors`}
//                 style={{ pointerEvents:selectedLanguage ? 'auto' : 'none' }}
//               >
//                 Start calibration
//               </Link>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <WebcamMicTest />
//       )}
//     </>
//   );
// };

// export default CalibrationPage;

import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WebcamMicTest2 from './WebcamMicTest2';
import { AppContext } from '../aignosisintegration/AppContext';

const CalibrationPage = () => {
  const [showWebcamMicTest, setShowWebcamMicTest] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const { testData, setTestData } = useContext(AppContext);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleNextClick = () => {
    setTestData({
      ...testData,
      videolanguage: selectedLanguage,
      calibrationCompleted: true,
    });
    setShowWebcamMicTest(true);
  };

  return (
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
        <WebcamMicTest2 />
      )}
    </>
  );
};

export default CalibrationPage;
