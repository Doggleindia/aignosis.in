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
// //     console.log('Testdata:', selectedLanguage);
    
      
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
// //               <span className="relative z-10 font-montserrat">Ai.gnosis</span>
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
//     console.log('Testdata:', selectedLanguage);
    
    
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
//               <span className="relative z-10 font-montserrat">Ai.gnosis</span>
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


import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import WebcamMicTest from './WebcamMicTest';
import { AppContext } from "../aignosisintegration/AppContext";

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
        <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center p-4">
          <div className="w-full max-w-[950px] bg-[#FDF9FF] rounded-3xl flex flex-col items-center p-8 space-y-6 shadow-lg">
            <div className="relative text-4xl font-bold text-[#1A0C25] mb-2">
              <span className="relative z-10 font-montserrat">Ai.gnosis</span>
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-[120px] h-[80px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-70"></div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold font-manrope">Calibration</h2>
            <p className="text-center text-[#292738] font-raleway font-normal">
              Please complete the task in sequence before proceeding to the next step.
            </p>
            
            <div className="text-left text-[#292738] font-raleway font-medium space-y-2 w-full max-w-[500px]">
              <p>1. Click each dog face one at a time as it appears on the screen, ensuring your child is looking at it before you click.</p>
              <p>2. Ensure your child watches the entire video without pausing or replaying it.</p>
              <p>3. When prompted in the video, call out for your child as instructed.</p>
            </div>
            
            <div className="w-full max-w-[400px]">
              <label className="text-[#292738] font-medium font-raleway block mb-2">Select Video Calibration Language:</label>
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Choose language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            
            <div className="flex justify-center w-full mt-6">
              <Link
                onClick={handleNextClick}
                className={`flex items-center justify-center w-[200px] h-[50px] border rounded-full font-montserrat font-semibold transition-colors ${
                  selectedLanguage
                    ? 'border-[#9C00AD] text-[#292738] hover:bg-[#1a0c25] hover:text-white'
                    : 'border-gray-300 text-gray-400 cursor-not-allowed'
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
