// import React, { useEffect, useRef, useState, useMemo, useContext } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook
// import CalibrationPage from "./CalibrationPage";
// import "./facearea.css";
// import { AppContext } from "../aignosisintegration/AppContext.jsx"; // Import AppContext

// const WebcamMicTest = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [error, setError] = useState("");
//   const [volume, setVolume] = useState(0);
//   const [snapshotTaken, setSnapshotTaken] = useState(false); // Track if snapshot is taken
//   const [snapshot, setSnapshot] = useState(null); // Store snapshot image data
//   const audioContextRef = useRef(null);
//   const analyserRef = useRef(null);
//   const dataArrayRef = useRef(null);
//   const [isCalVisible, setIsCalVisible] = useState(false);
//   const [deviceId, setDevicedId] = useState("");
//   const { testData, setTestData } = useContext(AppContext);

//   const navigate = useNavigate(); // Initialize navigate function

//   // Handle the "Next" button click
//   const handleNextClick = async () => {
//     // Navigate to DogCalibration page
//     navigate("/dogcalibration");
//   };
//   const [permissionsGranted, setPermissionsGranted] = useState(false); // Track permissions

//   useEffect(() => {
//     async function setupMediaDevices() {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });

//         navigator.mediaDevices.enumerateDevices().then((devices) => {
//           devices.forEach(async (device) => {
//             if (device.kind === "videoinput") {
//               console.log(device);
//               if (device.label.startsWith("Kreo")) {
//                 setDevicedId(device.deviceId);
//                 setTestData({
//                   ...testData,
//                   deviceId: device.deviceId,
//                 });

//                 const stream = await navigator.mediaDevices.getUserMedia({
//                   video: deviceId
//                     ? { deviceId: { exact: targetDevice.deviceId } }
//                     : true,
//                   audio: true,
//                 });

//                 console.log("Device ID:", device.deviceId);

//                 // ✅ Log resolution
//                 const videoTrack = stream.getVideoTracks()[0];
//                 const settings = videoTrack.getSettings();
//                 console.log(`Resolution: ${settings.width}x${settings.height}`);

//                 setPermissionsGranted(true); // Permissions granted

//                 // ✅ Set video stream
//                 if (videoRef.current) {
//                   videoRef.current.srcObject = stream;

//                   if (videoRef.current.paused && !videoRef.current.ended) {
//                     videoRef.current.play().catch((error) => {
//                       console.error("Error while trying to play video:", error);
//                       // when you move to another tab while the video is playing, it will throw an error
//                     });
//                   }
//                 }

//                 // ✅ Setup audio analyser
//                 audioContextRef.current = new (window.AudioContext ||
//                   window.webkitAudioContext)();
//                 const audioSource = audioContextRef.current.createMediaStreamSource(
//                   stream
//                 );
//                 analyserRef.current = audioContextRef.current.createAnalyser();
//                 audioSource.connect(analyserRef.current);

//                 analyserRef.current.fftSize = 256;
//                 const bufferLength = analyserRef.current.frequencyBinCount;
//                 dataArrayRef.current = new Uint8Array(bufferLength);

//                 const getVolume = () => {
//                   analyserRef.current.getByteFrequencyData(
//                     dataArrayRef.current
//                   );
//                   const average =
//                     dataArrayRef.current.reduce(
//                       (sum, value) => sum + value,
//                       0
//                     ) / bufferLength;
//                   setVolume(average);
//                   if (!snapshotTaken) {
//                     requestAnimationFrame(getVolume);
//                   }
//                 };

//                 getVolume();
//               }
//             }
//           });
//         });
//       } catch (err) {
//         console.error("Error accessing webcam/microphone:", err);
//         setPermissionsGranted(false);
//         setError("Error: please allow access to your webcam and microphone");
//         navigate("/resourcepermissionerror");
//       }
//     }

//     setupMediaDevices();
//   }, [snapshotTaken]);

//   const silhouette = useMemo(
//     () => (
//       <img
//         src="src/assets/aignoisiai/sil.png"
//         className="absolute left-1/2 w-[130%] h-[130%] object-contain z-20 opacity-60 pointer-events-none -translate-x-1/2 translate-y-[20%] scale-150"
//         alt="Silhouette"
//       />
//     ),
//     []
//   );

//   const handleSnapshot = () => {
//     if (videoRef.current && canvasRef.current) {
//       // Pause video and audio
//       videoRef.current.pause();
//       if (audioContextRef.current) {
//         audioContextRef.current.suspend();
//       }

//       const context = canvasRef.current.getContext("2d");
//       canvasRef.current.width = videoRef.current.videoWidth;
//       canvasRef.current.height = videoRef.current.videoHeight;
//       context.drawImage(
//         videoRef.current,
//         0,
//         0,
//         canvasRef.current.width,
//         canvasRef.current.height
//       );

//       // Convert canvas to a data URL (base64 string)
//       const imageData = canvasRef.current.toDataURL("image/png");
//       setSnapshot(imageData); // Save snapshot data
//       setSnapshotTaken(true); // Mark that the snapshot is taken
//     }
//   };

//   return (
//     <>
//       {!isCalVisible ? (
//         <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
//           <div className="w-[900px] max-sm:w-[90vw] h-[650px] bg-[#FDF9FF] rounded-3xl shadow-lg flex flex-col items-center p-8 space-y-3 relative border border-[#5F1B73]">
//             {/* Ai.gnosis Branding */}
//             <div className="text-4xl font-bold text-[#1A0C25] relative mb-2">
//               <span className="z-10 font-montserrat">Ai.gnosis</span>
//               <div className="absolute inset-0 flex justify-center items-center z-0">
//                 <div className="w-[150px] h-[100px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-70"></div>
//               </div>
//             </div>

//             {/* Webcam & Microphone Test Section */}
//             <h2 className="text-2xl font-semibold text-[#292738] font-manrope max-sm:text-xl">
//               Webcam & Microphone test
//             </h2>

//             {/* Webcam Preview or Snapshot Display */}
//             {/* <div className="w-[500px] max-sm:w-[85vw] h-[300px] bg-[#D9D9D9] rounded-lg flex items-center justify-center overflow-hidden">
//               {snapshotTaken ? (
//                 <img
//                   src={snapshot}
//                   alt="Snapshot"
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <video
//                   ref={videoRef}
//                   className="w-full h-full object-cover"
//                   muted
//                   style={{ maxWidth: "500px", maxHeight: "300px" }}
//                 ></video>
//               )}
//             </div> */}

//             <div className="relative w-[500px] max-sm:w-[85vw] h-[300px] bg-[#D9D9D9] rounded-lg flex items-center justify-center overflow-hidden">
//               {!snapshotTaken && (
//                 <div className="face-area">
//                   <video
//                     ref={videoRef}
//                     autoPlay
//                     muted
//                     className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
//                   />
//                 </div>
//               )}

//               {/* Silhouette overlay */}
//               {/* {!snapshotTaken && silhouette} */}

//               {/* Show snapshot after it’s taken */}
//               {snapshotTaken && snapshot && (
//                 <img
//                   src={snapshot}
//                   alt="Snapshot"
//                   className="absolute inset-0 w-full h-full object-cover rounded-lg z-30"
//                 />
//               )}
//             </div>

//             {/* Canvas for snapshot */}
//             <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

//             <div className="text-center mt-4" style={{ color: "red" }}>
//               Please adjust your distance from the camera until your face fills
//               the oval region
//             </div>

//             {/* Buttons */}
//             {!snapshotTaken ? (
//               <button
//                 onClick={handleSnapshot}
//                 disabled={!permissionsGranted} // Disable if permissions are not granted
//                 className={`mt-4 px-6 py-2 border-2 border-[#9C00AD] text-[#292738] rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors font-montserrat ${
//                   !permissionsGranted ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 Take snapshot
//               </button>
//             ) : (
//               <button
//                 onClick={handleNextClick}
//                 className="mt-4 px-6 py-2 border-2 border-[#9C00AD] text-[#292738] rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors font-montserrat"
//               >
//                 Next
//               </button>
//             )}

//             {/* Microphone Test Section */}
//             <div className="text-center mt-4">
//               <h3 className="text-lg font-medium text-[#292738] font-montserrat">
//                 Microphone test
//               </h3>
//               <p className="text-[#292738] font-raleway">
//                 Speak into the microphone and volume level will be displayed
//                 below:
//               </p>

//               {/* Volume Level Indicator */}
//               <div className="w-full h-4 bg-gray-300 rounded-full mt-2">
//                 <div
//                   className="h-full bg-[#952981] rounded-full transition-all"
//                   style={{ width: `${Math.min(volume, 100)}%` }}
//                 ></div>
//               </div>

//               {/* Error Message */}
//               {error && (
//                 <p className="text-[#D0161F] font-raleway mt-2">{error}</p>
//               )}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <CalibrationPage />
//       )}
//     </>
//   );
// };

// export default WebcamMicTest;

import React, { useEffect, useRef, useState, useMemo, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import CalibrationPage from './CalibrationPage';
import './facearea.css';
import { AppContext } from '../aignosisintegration/AppContext.jsx'; // Import AppContext

const WebcamMicTest = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState('');
  const [volume, setVolume] = useState(0);
  const [snapshotTaken, setSnapshotTaken] = useState(false); // Track if snapshot is taken
  const [snapshot, setSnapshot] = useState(null); // Store snapshot image data
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const [isCalVisible, setIsCalVisible] = useState(false);
  const [deviceId, setDevicedId] = useState('');
  const { testData, setTestData } = useContext(AppContext);

  const navigate = useNavigate(); // Initialize navigate function

  // Handle the "Next" button click
  const handleNextClick = async () => {
    // Navigate to DogCalibration page
    navigate('/dogcalibration');
  };
  const [permissionsGranted, setPermissionsGranted] = useState(false); // Track permissions

  useEffect(() => {
    async function setupMediaDevices() {
      try {
        navigator.mediaDevices.enumerateDevices().then((devices) => {
          devices.forEach(async (device) => {
            if (device.kind === 'videoinput') {
              console.log(device);
              if (device.label.startsWith('Kreo')) {
                setDevicedId(device.deviceId);
                setTestData({
                  ...testData,
                  deviceId: device.deviceId,
                });

                const stream = await navigator.mediaDevices.getUserMedia({
                  video: deviceId ? { deviceId: { exact: targetDevice.deviceId } } : true,
                  audio: true,
                });

                console.log('Device ID:', device.deviceId);

                // ✅ Log resolution
                const videoTrack = stream.getVideoTracks()[0];
                const settings = videoTrack.getSettings();
                console.log(`Resolution: ${settings.width}x${settings.height}`);

                setPermissionsGranted(true); // Permissions granted

                // ✅ Set video stream
                if (videoRef.current) {
                  videoRef.current.srcObject = stream;

                  if (videoRef.current.paused && !videoRef.current.ended) {
                    videoRef.current.play().catch((error) => {
                      console.error('Error while trying to play video:', error);
                      // when you move to another tab while the video is playing, it will throw an error
                    });
                  }
                }

                // ✅ Setup audio analyser
                audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
                const audioSource = audioContextRef.current.createMediaStreamSource(stream);
                analyserRef.current = audioContextRef.current.createAnalyser();
                audioSource.connect(analyserRef.current);

                analyserRef.current.fftSize = 256;
                const bufferLength = analyserRef.current.frequencyBinCount;
                dataArrayRef.current = new Uint8Array(bufferLength);

                const getVolume = () => {
                  analyserRef.current.getByteFrequencyData(dataArrayRef.current);
                  const average = dataArrayRef.current.reduce((sum, value) => sum + value, 0) / bufferLength;
                  setVolume(average);
                  if (!snapshotTaken) {
                    requestAnimationFrame(getVolume);
                  }
                };

                getVolume();
              } else {
                const stream = await navigator.mediaDevices.getUserMedia({
                  video: true,
                  audio: true,
                });
                console.log('Device ID:', device.deviceId);

                // ✅ Log resolution
                const videoTrack = stream.getVideoTracks()[0];
                const settings = videoTrack.getSettings();
                console.log(`Resolution: ${settings.width}x${settings.height}`);

                setPermissionsGranted(true); // Permissions granted

                // ✅ Set video stream
                if (videoRef.current) {
                  videoRef.current.srcObject = stream;

                  if (videoRef.current.paused && !videoRef.current.ended) {
                    videoRef.current.play().catch((error) => {
                      console.error('Error while trying to play video:', error);
                      // when you move to another tab while the video is playing, it will throw an error
                    });
                  }
                }

                // ✅ Setup audio analyser
                audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
                const audioSource = audioContextRef.current.createMediaStreamSource(stream);
                analyserRef.current = audioContextRef.current.createAnalyser();
                audioSource.connect(analyserRef.current);

                analyserRef.current.fftSize = 256;
                const bufferLength = analyserRef.current.frequencyBinCount;
                dataArrayRef.current = new Uint8Array(bufferLength);

                const getVolume = () => {
                  analyserRef.current.getByteFrequencyData(dataArrayRef.current);
                  const average = dataArrayRef.current.reduce((sum, value) => sum + value, 0) / bufferLength;
                  setVolume(average);
                  if (!snapshotTaken) {
                    requestAnimationFrame(getVolume);
                  }
                };

                getVolume();
              }
            }
          });
        });
      } catch (err) {
        console.error('Error accessing webcam/microphone:', err);
        setPermissionsGranted(false);
        setError('Error: please allow access to your webcam and microphone');
        navigate('/resourcepermissionerror');
      }
    }

    setupMediaDevices();
  }, [snapshotTaken]);

  const silhouette = useMemo(
    () => (
      <img
        src="src/assets/aignoisiai/sil.png"
        className="pointer-events-none absolute left-1/2 z-20 h-[130%] w-[130%] -translate-x-1/2 translate-y-[20%] scale-150 object-contain opacity-60"
        alt="Silhouette"
      />
    ),
    []
  );

  const handleSnapshot = () => {
    if (videoRef.current && canvasRef.current) {
      // Pause video and audio
      videoRef.current.pause();
      if (audioContextRef.current) {
        audioContextRef.current.suspend();
      }

      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

      // Convert canvas to a data URL (base64 string)
      const imageData = canvasRef.current.toDataURL('image/png');
      setSnapshot(imageData); // Save snapshot data
      setSnapshotTaken(true); // Mark that the snapshot is taken
    }
  };

  return (
    <>
      {!isCalVisible ? (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25]">
          <div className="relative flex h-[650px] w-[900px] flex-col items-center space-y-3 rounded-3xl border border-[#5F1B73] bg-[#FDF9FF] p-8 shadow-lg max-sm:w-[90vw]">
            {/* Ai.gnosis Branding */}
            <div className="relative mb-2 text-4xl font-bold text-[#1A0C25]">
              <span className="z-10 font-montserrat">Ai.gnosis</span>
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="h-[100px] w-[150px] rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-70 blur-2xl"></div>
              </div>
            </div>

            {/* Webcam & Microphone Test Section */}
            <h2 className="font-manrope text-2xl font-semibold text-[#292738] max-sm:text-xl">
              Webcam & Microphone test
            </h2>

            {/* Webcam Preview or Snapshot Display */}
            {/* <div className="w-[500px] max-sm:w-[85vw] h-[300px] bg-[#D9D9D9] rounded-lg flex items-center justify-center overflow-hidden">
              {snapshotTaken ? (
                <img
                  src={snapshot}
                  alt="Snapshot"
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted
                  style={{ maxWidth: "500px", maxHeight: "300px" }}
                ></video>
              )}
            </div> */}

            <div className="relative flex h-[300px] w-[500px] items-center justify-center overflow-hidden rounded-lg bg-[#D9D9D9] max-sm:w-[85vw]">
              {!snapshotTaken && (
                <div className="face-area">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    className="absolute inset-0 z-10 h-full w-full rounded-lg object-cover"
                  />
                </div>
              )}

              {/* Silhouette overlay */}
              {/* {!snapshotTaken && silhouette} */}

              {/* Show snapshot after it’s taken */}
              {snapshotTaken && snapshot && (
                <img
                  src={snapshot}
                  alt="Snapshot"
                  className="absolute inset-0 z-30 h-full w-full rounded-lg object-cover"
                />
              )}
            </div>

            {/* Canvas for snapshot */}
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

            <div className="mt-4 text-center" style={{ color: 'red' }}>
              Please adjust your distance from the camera until your face fills the oval region
            </div>

            {/* Buttons */}
            {!snapshotTaken ? (
              <button
                onClick={handleSnapshot}
                disabled={!permissionsGranted} // Disable if permissions are not granted
                className={`mt-4 rounded-full border-2 border-[#9C00AD] px-6 py-2 font-montserrat font-semibold text-[#292738] transition-colors hover:bg-[#F0A1FF] hover:text-white ${
                  !permissionsGranted ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                Take snapshot
              </button>
            ) : (
              <button
                onClick={handleNextClick}
                className="mt-4 rounded-full border-2 border-[#9C00AD] px-6 py-2 font-montserrat font-semibold text-[#292738] transition-colors hover:bg-[#F0A1FF] hover:text-white"
              >
                Next
              </button>
            )}

            {/* Microphone Test Section */}
            <div className="mt-4 text-center">
              <h3 className="font-montserrat text-lg font-medium text-[#292738]">Microphone test</h3>
              <p className="font-raleway text-[#292738]">
                Speak into the microphone and volume level will be displayed below:
              </p>

              {/* Volume Level Indicator */}
              <div className="mt-2 h-4 w-full rounded-full bg-gray-300">
                <div
                  className="h-full rounded-full bg-[#952981] transition-all"
                  style={{ width: `${Math.min(volume, 100)}%` }}
                ></div>
              </div>

              {/* Error Message */}
              {error && <p className="mt-2 font-raleway text-[#D0161F]">{error}</p>}
            </div>
          </div>
        </div>
      ) : (
        <CalibrationPage />
      )}
    </>
  );
};

export default WebcamMicTest;
