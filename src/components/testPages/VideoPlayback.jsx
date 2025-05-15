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

//     {
//       fact:
//         "Autistic brains are wired differently, not incorrectly. Studies show autistic people often have stronger connections in some brain regions and weaker ones in others.",
//     },
//     {
//       fact:
//         "Many autistic individuals have exceptional abilities in areas like mathematics, music, art, or memory — called 'savant skills.'",
//     },
//     {
//       fact:
//         "Autism is a spectrum — no two autistic people are the same. Some need a lot of support, while others live completely independent lives.",
//     },
//     {
//       fact:
//         "Early signs of autism can appear as early as 12 to 18 months of age, often noticed through differences in eye contact, gestures, or speech.",
//     },
//     {
//       fact:
//         "Early detection of autism is crucial. Identifying autism early allows for the implementation of early interventions, which can significantly improve a child's development in language, social skills, and behavior.",
//     },
//     {
//       fact:
//         "Research has shown that **early intervention** can help children with autism develop better cognitive, social, and communication skills compared to those who receive support later.",
//     },
//     {
//       fact:
//         "Screening for autism is important because it can help identify children who might be at risk. This allows for timely access to support and resources, reducing the potential for developmental delays.",
//     },
//     {
//       fact:
//         "Autistic people can experience sensory input differently — for example, lights might seem painfully bright, or soft sounds might feel overwhelming.",
//     },
//     {
//       fact:
//         "The rate of autism diagnosis has increased, not because more people are becoming autistic, but because awareness and diagnostic methods have improved.",
//     },
//     {
//       fact:
//         "Girls with autism are often underdiagnosed because they can be better at 'masking' or copying social behaviors.",
//     },
//     {
//       fact:
//         "Many autistic adults were never diagnosed as children and only discover their autism later in life.",
//     },
//     {
//       fact:
//         "Autism has a strong genetic link — if one identical twin is autistic, the other twin has a very high chance (up to 90%) of being autistic too.",
//     },
//     {
//       fact:
//         "Routine and predictability often help autistic people feel safe — sudden changes can cause intense stress or anxiety.",
//     },
//     {
//       fact:
//         "Many autistic people have very intense 'special interests' — areas they are deeply passionate about, often leading to expertise in that field.",
//     },
//     {
//       fact:
//         "Autistic individuals can communicate in many ways, not just through speech — gestures, writing, typing, or even pictures can be powerful communication tools.",
//     },
//     {
//       fact:
//         "Self-stimulatory behaviors ('stimming') like hand-flapping, rocking, or repeating words help autistic people regulate their emotions and sensory input.",
//     },
//     {
//       fact:
//         "Autism is not caused by bad parenting, vaccines, or external factors — these are myths. Scientific studies consistently show autism is neurological and developmental.",
//     },
//     {
//       fact:
//         "The Neurodiversity movement views autism as a natural variation of the human mind — not a disease to be 'cured,' but a different way of experiencing the world.",
//     },
//     {
//       fact:
//         "Detecting autism early can improve the quality of life for children and families, as early treatment may reduce the need for extensive support later in life.",
//     },
//     {
//       fact:
//         "There is growing support for universal autism screening during pediatric checkups, as this can lead to earlier diagnoses and better long-term outcomes.",
//     },
//   ];

//   const location = useLocation();
//   const navigate = useNavigate();
//   const videoRef = useRef(null);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const [, setIsVideoPlaying] = useState(false);
//   const [isVideoEnded, setIsVideoEnded] = useState(false);
//   const [hasStartedOnce, setHasStartedOnce] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [, setIsUploading] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // State for managing loading spinner

//   // Effect for cycling through autism facts during loading state
//   useEffect(() => {
//     if (isLoading) {
//       const factInterval = setInterval(() => {
//         setFactIndex((prevIndex) => (prevIndex + 1) % autismFacts.length);
//       }, newFactInterval); // Change fact every 7 seconds

//       return () => clearInterval(factInterval); // Cleanup on unmount
//     }
//   }, [isLoading]);

//   const webcamRef = useRef(null);
//   // const calibrationVideoRef = useRef(null);
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
//         // Calculate every second
//         const currentFps = Math.round((frameCount * 1000) / elapsed);
//         setFps(currentFps);
//         frameCount = 0;
//         lastTime = currentTime;
//       }
//       frameCount++;
//     }, 1000 / 60); // Run at 60Hz
//   };

//   // Stop FPS calculation
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
//   // const calculateFps = () => {
//   //   const now = performance.now();
//   //   frameTimes.current.push(now);

//   //   if (frameTimes.current.length > 10) {
//   //     frameTimes.current.shift();
//   //   }

//   //   if (frameTimes.current.length > 1) {
//   //     const first = frameTimes.current[0];
//   //     const last = frameTimes.current[frameTimes.current.length - 1];
//   //     const fpsValue = (frameTimes.current.length - 1) / ((last - first) / 1000);
//   //     setFps(Math.round(fpsValue));
//   //   }

//   //   requestAnimationFrame(calculateFps);
//   // };
//   const startWebcamRecording = async () => {
//     try {
//       // const stream = await navigator.mediaDevices.getUserMedia({
//       //   video: true,
//       //   audio: false,
//       // });

//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: {
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
//       startFpsCalculation(); // Start FPS calculation when recording begins
//     } catch (error) {
//       console.error("Error accessing webcam:", error);
//       alert(
//         "Error accessing webcam. Please ensure you have granted camera permissions."
//       );
//     }
//   };

//   const uploadRecording = async (blob) => {
//     setIsLoading(true); // Show spinner
//     stopFpsCalculation(); // Stop FPS calculation before upload

//     try {
//       setIsLoading(true); // Show spinner
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
//       formData.append("fps", fps.toString()); // Convert fps to string
//       formData.append("videolanguage", testData.videolanguage);

//       // for (let pair of formData.entries()) {
//       //   console.log(pair[0] + ": " + pair[1]);
//       // }

//       await fetch(SERVER_MIDDLEWARE_ENDPOINT + "/rest/test/video_data/", {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => {
//           setIsLoading(false);
//           if (!response.ok) {
//             navigate("/Error");
//             // throw new Error("Network response was not ok");
//           } else {
//             setIsLoading(false); // Show spinner
//             // navigate("/thankyou");
//           }
//           return response.json();
//         })
//         .catch((err) => {
//           navigate("/Error");
//           // throw new Error("Video save response was not ok" + err);
//         });

//       cleanupMediaStream();
//       setIsUploading(false);
//     } catch (error) {
//       console.error("Error uploading video:", error);

//       cleanupMediaStream();
//       setIsUploading(false);
//       setIsLoading(false); // Show spinner
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
//       mediaRecorderRef.current &&
//       (mediaRecorderRef.current.state === "recording" ||
//         mediaRecorderRef.current.state === "paused")
//     ) {
//       mediaRecorderRef.current.stop();
//       setIsRecording(false);

//       mediaRecorderRef.current.onstop = () => {
//         const blob = new Blob(recordedChunksRef.current, {
//           type: "video/webm",
//         });

//         uploadRecording(blob);
//       };
//     }
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
//     stopRecording();
//   };

//   return (
//     <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
//       {/* <video ref={webcamRef} autoPlay playsInline muted className="hidden" />
//       <video
//         ref={videoRef}
//         src={
//           testData.videolanguage === "English"
//             ? "https://d228sadnexesrp.cloudfront.net/Test_Videos/Aignosis_Test_vid_Eng_V7.mp4"
//             : testData.videolanguage === "Hindi"
//             ? "https://d228sadnexesrp.cloudfront.net/Test_Videos/Aignosis_Test_vid_Hindi_V7.mp4"
//             : "https://d228sadnexesrp.cloudfront.net/Test_Videos/Aignosis_Test_vid_Hindi_V7.mp4"
//         }
//         controls
//         autoPlay={false}
//         className="w-full h-full object-cover"
//         onLoadedData={handleVideoLoadedData}
//         onPlay={handleVideoPlay}
//         onPause={handleVideoPause}
//         onEnded={handleVideoEnd}
//         style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }}
//       /> */}
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
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             zIndex: 50,
//           }}
//         >
//           <MoonLoader color="#ffffff" size={15} />
//           <p
//             className="mt-4"
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               backgroundColor: "rgba(138, 0, 194, 0.6)",
//               color: "white",
//               padding: "12px 24px",
//               borderRadius: "25px",
//               fontSize: "32px",
//               fontWeight: "bold",
//             }}
//           >
//             Loading
//           </p>
//         </div>
//         // <div
//         //   style={{
//         //     display: "flex",
//         //     flex: 1,
//         //     flexDirection: "column",
//         //     alignItems: "center",
//         //     border: "2px solid red",
//         //     justifyContent: "center",
//         //     height: "100%",
//         //     backgroundColor: "white",
//         //   }}
//         // >
//         //   <div
//         //     style={{
//         //       display: "flex",
//         //       alignItems: "end",
//         //       flex: 1,
//         //       border: "0px solid green",
//         //       marginTop: 200,
//         //     }}
//         //   >
//         //     <MoonLoader color="#9a0ea9" />
//         //   </div>
//         //   <div
//         //     style={{
//         //       display: "flex",
//         //       border: "0px solid green",
//         //       marginTop: 20,
//         //       marginBottom: 100,
//         //       fontWeight: 200,
//         //       color: "#9a0ea9",
//         //       fontSize: 30,
//         //     }}
//         //   >
//         //     Please wait calibrating...
//         //   </div>
//         //   <div
//         //     style={{
//         //       display: "flex",
//         //       alignItems: "end",
//         //       flex: 1,
//         //       border: "0px solid green",
//         //       textAlign: "center",
//         //       marginBottom: 100,
//         //       color: "#9a0ea9",
//         //       maxWidth: "80%",
//         //     }}
//         //   >
//         //     {autismFacts[factIndex].fact}
//         //   </div>
//         // </div>
//       )}

//       {/* <div className="absolute bottom-10">
//         {isVideoEnded ? (
//           <button
//             onClick={() => {
//               window.location.replace("/thankyou");
//             }}
//             className="px-6 py-3 bg-[#9C00AD] text-white rounded-full font-semibold hover:bg-[#F0A1FF] transition-colors"
//           >
//             Next
//           </button>
//         ) : (
//           <p className="text-white text-3xl">Please watch the video</p>
//         )}
//       </div> */}
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
