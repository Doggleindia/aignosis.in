// import React, { useEffect, useRef, useState } from "react";
// import { encryptVideo } from "../aignosisintegration/EncryptionUtils";
// import { Link, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { AppContext } from "../aignosisintegration/AppContext";
// import { useContext } from "react";
// import VideoPlayer from "./VideoPlayer";
// import MoonLoader from "react-spinners/MoonLoader";
// import "../../../src/components/aignosisintegration/Screeningtest.css";

// const VideoPlayback = () => {
//   const [factIndex, setFactIndex] = useState(0);
//   const newFactInterval = 7000;
//   const autismFacts = [
//     {
//       fact:
//         "Early detection of autism opens the door to early intervention — giving children the best chance to develop their potential, strengthen their abilities, and lead fuller, more independent lives.",
//     },
//     {
//       fact:
//         "Accepting autism means recognizing that different ways of thinking are not deficits, but different kinds of strengths — early support helps these strengths shine brighter.",
//     },
//     {
//       fact:
//         "Early detection empowers growth, and acceptance empowers belonging — together, they reveal the unique brilliance each autistic individual brings to the world.",
//     },
//     // ... other facts remain the same
//   ];

//   const location = useLocation();
//   const navigate = useNavigate();
//   const videoRef = useRef(null);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [isVideoEnded, setIsVideoEnded] = useState(false);
//   const [hasStartedOnce, setHasStartedOnce] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // Effect for cycling through autism facts during loading state
//   useEffect(() => {
//     console.log('Video playback entry testData is', testData)
//     if (isLoading) {
//       const factInterval = setInterval(() => {
//         setFactIndex((prevIndex) => (prevIndex + 1) % autismFacts.length);
//       }, newFactInterval);

//       return () => clearInterval(factInterval);
//     }
//   }, [isLoading]);

//   const webcamRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const recordedChunksRef = useRef([]);
//   const videoStreamRef = useRef(null);
//   const fpsIntervalRef = useRef(null);
//   const [fps, setFps] = useState(0);
//   const frameTimes = useRef([]);
//   const { testData, setTestData } = useContext(AppContext);

//   const SERVER_MIDDLEWARE_ENDPOINT = "https://de.aignosismdw.in";

//   const startFpsCalculation = () => {
//     let lastTime = performance.now();
//     let frameCount = 0;

//     fpsIntervalRef.current = setInterval(() => {
//       const currentTime = performance.now();
//       const elapsed = currentTime - lastTime;

//       if (elapsed >= 1000) {
//         const currentFps = Math.round((frameCount * 1000) / elapsed);
//         setFps(currentFps);
//         frameCount = 0;
//         lastTime = currentTime;
//       }
//       frameCount++;
//     }, 1000 / 60);
//   };

//   const stopFpsCalculation = () => {
//     if (fpsIntervalRef.current) {
//       clearInterval(fpsIntervalRef.current);
//       fpsIntervalRef.current = null;
//     }
//   };

//   useEffect(() => {
//     window.history.pushState(null, null, window.location.href);

//     const handleBackButton = () => {
//       navigate("/calibrationpage");
//     };

//     window.addEventListener("popstate", handleBackButton);

//     return () => {
//       window.removeEventListener("popstate", handleBackButton);
//       stopFpsCalculation();
//     };
//   }, [location.search, setTestData, navigate]);

//   useEffect(() => {
//     if (isLoading) {
//       console.log("Loader should be visible now!");
//     }
//   }, [isLoading]);

//   const cleanupMediaStream = () => {
//     stopFpsCalculation();
//     if (webcamRef.current && webcamRef.current.srcObject) {
//       const tracks = webcamRef.current.srcObject.getTracks();
//       tracks.forEach((track) => {
//         track.stop();
//       });
//       webcamRef.current.srcObject = null;
//     }

//     if (videoStreamRef.current) {
//       const tracks = videoStreamRef.current.getTracks();
//       tracks.forEach((track) => {
//         track.stop();
//       });
//       videoStreamRef.current = null;
//     }

//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current = null;
//     }

//     if (recordedChunksRef.current) {
//       recordedChunksRef.current = [];
//     }
//   };

//   const startWebcamRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: {
//           deviceId: testData.deviceId ? { exact: testData.deviceId } : "default",
//           width: { ideal: 1920 },
//           height: { ideal: 1080 },
//           frameRate: { ideal: 60, min: 30 },
//         },
//         audio: true,
//       });

//       videoStreamRef.current = stream;
//       webcamRef.current.srcObject = stream;

//       const mediaRecorder = new MediaRecorder(stream);

//       mediaRecorderRef.current = mediaRecorder;
//       recordedChunksRef.current = [];

//       mediaRecorder.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           recordedChunksRef.current.push(event.data);
//         }
//       };

//       mediaRecorder.start(1000);
//       setIsRecording(true);
//       startFpsCalculation();
//     } catch (error) {
//       console.error("Error accessing webcam:", error);
//       alert(
//         "Error accessing webcam. Please ensure you have granted camera permissions."
//       );
//     }
//   };

//   const uploadRecording = async (blob) => {
//     setIsLoading(true); // Show spinner first
//     stopFpsCalculation();

//     try {
//       setIsUploading(true);

//       const videoAesKey = Array.from(crypto.getRandomValues(new Uint8Array(32)))
//         .map((b) => b.toString(16).padStart(2, "0"))
//         .join("");

//       const videoEncryptedBlob = await encryptVideo(blob, videoAesKey);

//       const jwk = await fetch(
//         SERVER_MIDDLEWARE_ENDPOINT + "/rest/return_rsa_public_key/"
//       ).then((res) => res.json());

//       const publicKey = await window.crypto.subtle.importKey(
//         "jwk",
//         jwk,
//         {
//           name: "RSA-OAEP",
//           hash: "SHA-256",
//         },
//         false,
//         ["encrypt"]
//       );

//       const videoEncryptedAesKey = await window.crypto.subtle.encrypt(
//         {
//           name: "RSA-OAEP",
//         },
//         publicKey,
//         new TextEncoder().encode(videoAesKey)
//       );

//       const formData = new FormData();
//       formData.append("video", videoEncryptedBlob, "encrypted-test.bin");
//       formData.append(
//         "video_encrypted_aes_key",
//         new Blob([videoEncryptedAesKey], { type: "application/octet-stream" }),
//         "encrypted_aes_key.bin"
//       );
//       formData.append("patient_uid", testData.PATIENT_UID);
//       formData.append("transaction_id", testData.TRANSACTION_ID);
//       formData.append("fps", fps.toString());
//       formData.append("videolanguage", testData.videolanguage);

//       await fetch(SERVER_MIDDLEWARE_ENDPOINT + "/rest/test/video_data/", {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => {
//           if (!response.ok) {
//             navigate("/Error");
//           } else {
//             // Keep loading until we navigate
//             setIsLoading(false);
//             navigate("/thankyou");
//           }
//           return response.json();
//         })
//         .catch((err) => {
//           console.error("Error in video save response:", err);
//           navigate("/Error");
//         });

//       cleanupMediaStream();
//       setIsUploading(false);
//     } catch (error) {
//       console.error("Error uploading video:", error);
//       cleanupMediaStream();
//       setIsUploading(false);
//       setIsLoading(false);
//       navigate("/Error");
//     }
//   };

//   const pauseRecording = () => {
//     if (
//       mediaRecorderRef.current &&
//       mediaRecorderRef.current.state === "recording"
//     ) {
//       mediaRecorderRef.current.pause();
//       setIsRecording(false);
//     }
//   };

//   const resumeRecording = () => {
//     if (
//       mediaRecorderRef.current &&
//       mediaRecorderRef.current.state === "paused"
//     ) {
//       mediaRecorderRef.current.resume();
//       setIsRecording(true);
//     }
//   };

//   const stopRecording = () => {
//     if (
//       !mediaRecorderRef.current ||
//       (mediaRecorderRef.current.state !== "recording" &&
//         mediaRecorderRef.current.state !== "paused")
//     ) {
//       return;
//     }

//     // Set loading state immediately when stopping recording
//     setIsLoading(true);

//     mediaRecorderRef.current.stop();
//     setIsRecording(false);

//     mediaRecorderRef.current.onstop = () => {
//       const blob = new Blob(recordedChunksRef.current, {
//         type: "video/webm",
//       });

//       uploadRecording(blob);
//     };
//   };

//   const handleVideoLoadedData = () => {
//     setIsVideoLoaded(true);
//     if (videoRef.current) {
//       videoRef.current
//         .play()
//         .then(() => {
//           videoRef.current.requestFullscreen().catch((err) => {
//             console.error("Failed to enter fullscreen mode:", err);
//           });
//         })
//         .catch((err) => {
//           console.error("Error playing video:", err);
//         });
//     }
//   };

//   const handleVideoPlay = () => {
//     if (!isVideoLoaded) {
//       videoRef.current?.pause();
//       alert("Please wait for the video to load completely before starting.");
//       return;
//     }
//     if (!hasStartedOnce) {
//       startWebcamRecording();
//       setHasStartedOnce(true);
//     } else if (mediaRecorderRef.current) {
//       resumeRecording();
//     }
//     setIsVideoPlaying(true);
//   };

//   const handleVideoPause = () => {
//     pauseRecording();
//     setIsVideoPlaying(false);
//   };

//   const handleVideoEnd = async () => {
//     setIsVideoEnded(true);
//     // Set loading state before stopping recording
//     setIsLoading(true);
//     stopRecording();
//   };

//   return (
//     <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
//       <video ref={webcamRef} autoPlay playsInline muted className="hidden" />

//       <VideoPlayer
//         testData={testData}
//         handleVideoLoadedData={handleVideoLoadedData}
//         handleVideoPlay={handleVideoPlay}
//         handleVideoPause={handleVideoPause}
//         handleVideoEnd={handleVideoEnd}
//       />

//       <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-black bg-opacity-50 px-4 py-2 rounded-full">
//         <div
//           className={`w-3 h-3 rounded-full ${
//             isRecording ? "bg-red-500" : "bg-gray-500"
//           }`}
//         ></div>
//         <span className="text-white text-sm">
//           {isRecording ? "Recording" : "Not Recording"}
//         </span>
//       </div>

//       {isLoading && (
//         <div
//           className="absolute inset-0 flex flex-col justify-center items-center"
//           style={{
//             backgroundColor: "white",
//             zIndex: 50,
//             border: "0px solid blue",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flex: 1.5,
//               border: "0px solid red",
//               alignItems: "end",
//             }}
//           >
//             <MoonLoader color="#9a0ea9" />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flex: 1,
//               border: "0px solid green",
//               fontWeight: 200,
//               color: "#9a0ea9",
//               fontSize: 30,
//               alignItems: "center",
//             }}
//           >
//             Processing your data, please do not close this tab.
//           </div>

//           <div
//             style={{
//               display: "flex",
//               flex: 0.8,
//               alignItems: "center",
//               border: "0px solid green",
//               textAlign: "center",
//               color: "#9a0ea9",
//               maxWidth: "80%",
//             }}
//           >
//             {autismFacts[factIndex].fact}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoPlayback;

import React, { useEffect, useRef, useState } from "react";
import { encryptVideo } from "../aignosisintegration/EncryptionUtils";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppContext } from "../aignosisintegration/AppContext";
import { useContext } from "react";
import VideoPlayer from "./VideoPlayer";
import MoonLoader from "react-spinners/MoonLoader";
import "../../../src/components/aignosisintegration/Screeningtest.css";

const VideoPlayback = () => {
  const [factIndex, setFactIndex] = useState(0);
  const newFactInterval = 7000;
  const autismFacts = [
    {
      fact:
        "Early detection of autism opens the door to early intervention — giving children the best chance to develop their potential, strengthen their abilities, and lead fuller, more independent lives.",
    },
    {
      fact:
        "Accepting autism means recognizing that different ways of thinking are not deficits, but different kinds of strengths — early support helps these strengths shine brighter.",
    },
    {
      fact:
        "Early detection empowers growth, and acceptance empowers belonging — together, they reveal the unique brilliance each autistic individual brings to the world.",
    },
    // ... other facts remain the same
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Effect for cycling through autism facts during loading state
  useEffect(() => {
    console.log('Video playback entry testData is', testData)
    if (isLoading) {
      const factInterval = setInterval(() => {
        setFactIndex((prevIndex) => (prevIndex + 1) % autismFacts.length);
      }, newFactInterval);

      return () => clearInterval(factInterval);
    }
  }, [isLoading]);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const videoStreamRef = useRef(null);
  const fpsIntervalRef = useRef(null);
  const [fps, setFps] = useState(0);
  const frameTimes = useRef([]);
  const { testData, setTestData } = useContext(AppContext);

  const SERVER_MIDDLEWARE_ENDPOINT = "https://de.aignosismdw.in";

  const startFpsCalculation = () => {
    let lastTime = performance.now();
    let frameCount = 0;

    fpsIntervalRef.current = setInterval(() => {
      const currentTime = performance.now();
      const elapsed = currentTime - lastTime;

      if (elapsed >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / elapsed);
        setFps(currentFps);
        frameCount = 0;
        lastTime = currentTime;
      }
      frameCount++;
    }, 1000 / 60);
  };

  const stopFpsCalculation = () => {
    if (fpsIntervalRef.current) {
      clearInterval(fpsIntervalRef.current);
      fpsIntervalRef.current = null;
    }
  };

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);

    const handleBackButton = () => {
      navigate("/calibrationpage");
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
      stopFpsCalculation();
    };
  }, [location.search, setTestData, navigate]);

  useEffect(() => {
    if (isLoading) {
      console.log("Loader should be visible now!");
    }
  }, [isLoading]);

  const cleanupMediaStream = () => {
    stopFpsCalculation();
    if (webcamRef.current && webcamRef.current.srcObject) {
      const tracks = webcamRef.current.srcObject.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      webcamRef.current.srcObject = null;
    }

    if (videoStreamRef.current) {
      const tracks = videoStreamRef.current.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      videoStreamRef.current = null;
    }

    if (mediaRecorderRef.current) {
      mediaRecorderRef.current = null;
    }

    if (recordedChunksRef.current) {
      recordedChunksRef.current = [];
    }
  };

  const startWebcamRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: testData.deviceId ? { exact: testData.deviceId } : "default",
          width: { ideal: 1920 },
          height: { ideal: 1080 },
          frameRate: { ideal: 60, min: 30 },
        },
        audio: true,
      });

      videoStreamRef.current = stream;
      webcamRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorderRef.current = mediaRecorder;
      recordedChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start(1000);
      setIsRecording(true);
      startFpsCalculation();
    } catch (error) {
      console.error("Error accessing webcam:", error);
      alert(
        "Error accessing webcam. Please ensure you have granted camera permissions."
      );
    }
  };

  const uploadRecording = async (blob) => {
    setIsLoading(true); // Show spinner first
    stopFpsCalculation();

    try {
      setIsUploading(true);

      const videoAesKey = Array.from(crypto.getRandomValues(new Uint8Array(32)))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      const videoEncryptedBlob = await encryptVideo(blob, videoAesKey);

      const jwk = await fetch(
        SERVER_MIDDLEWARE_ENDPOINT + "/rest/return_rsa_public_key/"
      ).then((res) => res.json());

      const publicKey = await window.crypto.subtle.importKey(
        "jwk",
        jwk,
        {
          name: "RSA-OAEP",
          hash: "SHA-256",
        },
        false,
        ["encrypt"]
      );

      const videoEncryptedAesKey = await window.crypto.subtle.encrypt(
        {
          name: "RSA-OAEP",
        },
        publicKey,
        new TextEncoder().encode(videoAesKey)
      );

      const formData = new FormData();
      formData.append("video", videoEncryptedBlob, "encrypted-test.bin");
      formData.append(
        "video_encrypted_aes_key",
        new Blob([videoEncryptedAesKey], { type: "application/octet-stream" }),
        "encrypted_aes_key.bin"
      );
      formData.append("patient_uid", testData.PATIENT_UID);
      formData.append("transaction_id", testData.TRANSACTION_ID);
      formData.append("fps", fps.toString());
      formData.append("videolanguage", testData.videolanguage);

      await fetch(SERVER_MIDDLEWARE_ENDPOINT + "/rest/test/video_data/", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            navigate("/Error");
          } else {
            // Keep loading until we navigate
            setIsLoading(false);
            navigate("/thankyou");
          }
          return response.json();
        })
        .catch((err) => {
          console.error("Error in video save response:", err);
          navigate("/Error");
        });

      cleanupMediaStream();
      setIsUploading(false);
    } catch (error) {
      console.error("Error uploading video:", error);
      cleanupMediaStream();
      setIsUploading(false);
      setIsLoading(false);
      navigate("/Error");
    }
  };

  const pauseRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.pause();
      setIsRecording(false);
    }
  };

  const resumeRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "paused"
    ) {
      mediaRecorderRef.current.resume();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (
      !mediaRecorderRef.current ||
      (mediaRecorderRef.current.state !== "recording" &&
        mediaRecorderRef.current.state !== "paused")
    ) {
      return;
    }

    // Set loading state immediately when stopping recording
    setIsLoading(true);

    mediaRecorderRef.current.stop();
    setIsRecording(false);

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, {
        type: "video/webm",
      });

      uploadRecording(blob);
    };
  };

  const handleVideoLoadedData = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          videoRef.current.requestFullscreen().catch((err) => {
            console.error("Failed to enter fullscreen mode:", err);
          });
        })
        .catch((err) => {
          console.error("Error playing video:", err);
        });
    }
  };

  const handleVideoPlay = () => {
    if (!isVideoLoaded) {
      videoRef.current?.pause();
      alert("Please wait for the video to load completely before starting.");
      return;
    }
    if (!hasStartedOnce) {
      startWebcamRecording();
      setHasStartedOnce(true);
    } else if (mediaRecorderRef.current) {
      resumeRecording();
    }
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    pauseRecording();
    setIsVideoPlaying(false);
  };

  const handleVideoEnd = async () => {
    setIsVideoEnded(true);
    // Set loading state before stopping recording
    setIsLoading(true);
    stopRecording();
  };

  return (
    <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
      <video ref={webcamRef} autoPlay playsInline muted className="hidden" />

      <VideoPlayer
        testData={testData}
        handleVideoLoadedData={handleVideoLoadedData}
        handleVideoPlay={handleVideoPlay}
        handleVideoPause={handleVideoPause}
        handleVideoEnd={handleVideoEnd}
      />

      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-black bg-opacity-50 px-4 py-2 rounded-full">
        <div
          className={`w-3 h-3 rounded-full ${
            isRecording ? "bg-red-500" : "bg-gray-500"
          }`}
        ></div>
        <span className="text-white text-sm">
          {isRecording ? "Recording" : "Not Recording"}
        </span>
      </div>

      {isLoading && (
        <div
          className="absolute inset-0 flex flex-col justify-center items-center"
          style={{
            backgroundColor: "white",
            zIndex: 50,
            border: "0px solid blue",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1.5,
              border: "0px solid red",
              alignItems: "end",
            }}
          >
            <MoonLoader color="#9a0ea9" />
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              border: "0px solid green",
              fontWeight: 200,
              color: "#9a0ea9",
              fontSize: 30,
              alignItems: "center",
            }}
          >
            Processing your data, please do not close this tab.
          </div>

          <div
            style={{
              display: "flex",
              flex: 0.8,
              alignItems: "center",
              border: "0px solid green",
              textAlign: "center",
              color: "#9a0ea9",
              maxWidth: "80%",
            }}
          >
            {autismFacts[factIndex].fact}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayback;
