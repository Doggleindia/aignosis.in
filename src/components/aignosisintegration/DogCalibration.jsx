import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import BeatLoader from "react-spinners/BeatLoader";
import {
  encryptCalibrationData,
  encryptPassword,
} from "../config/EncryptionUtils";
import { AppContext } from "../aignosisintegration/AppContext.jsx";
import Circle from "./Circle";
import dogpng from "../../assets/aignoisiai/dog_face.png";

const DogCalibration = () => {
  const [startTime, setStartTime] = useState();
  const [frameCaptureInterval, setFrameCaptureInterval] = useState();
  const [frames, setFrames] = useState([]);
  const [isCircleVisible, setIsCircleVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // State for managing loading spinner
  const [isTestCompleted, setIsTestCompleted] = useState(false); // State to track if the test is completed

  const [currentCircleIndex, setCurrentCircleIndex] = useState(0);
  const [parentDimensions, setParentDimensions] = useState([0, 0]);
  const [clickTimes, setClickTimes] = useState([]);
  const [screenDimensions, setScreenDimensions] = useState([0, 0]);

  const [videoResolution, setVideoResolution] = useState([640, 480]); // Static resolution for sample images

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const parentRef = useRef(null);
  const audioRef = useRef(null);

  const { testData, setTestData } = useContext(AppContext);

  const navigate = useNavigate(); // Initialize navigate from useNavigate

  // Calculate safe coordinates that account for dog size (radius = 50, so dog width/height = 100)
  const dogSize = 100; // radius * 2
  const margin = dogSize / 2 + 20; // Add some extra margin

  const [circleCoordinates, setCircleCoordinates] = useState([]);

  // Calculate screen dimensions and coordinates
  useEffect(() => {
    const updateDimensions = () => {
      // Use document.documentElement for actual viewport size
      const screenWidth = document.documentElement.clientWidth;
      const screenHeight = document.documentElement.clientHeight;

      setScreenDimensions([screenWidth, screenHeight]);

      // Calculate coordinates with proper margins
      const newCoordinates = [
        [screenWidth / 2, screenHeight / 2], // center
        [margin, margin], // left top
        [margin, screenHeight / 2], // left mid
        [margin, screenHeight - margin], // left bottom
        [screenWidth - margin, margin], // right top
        [screenWidth - margin, screenHeight / 2], // right mid
        [screenWidth - margin, screenHeight - margin], // right bottom
        [screenWidth / 2, margin], // mid top
        [screenWidth / 2, screenHeight - margin], // mid bottom
      ];

      setCircleCoordinates(newCoordinates);
    };

    // Initial calculation
    updateDimensions();

    // Update on window resize
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Effect for cycling through autism facts during loading state
  useEffect(() => {
    if (isLoading) {
      const factInterval = setInterval(() => {
        setFactIndex((prevIndex) => (prevIndex + 1) % autismFacts.length);
      }, newFactInterval); // Change fact every 7 seconds

      return () => clearInterval(factInterval); // Cleanup on unmount
    }
  }, [isLoading, autismFacts.length]);

  useEffect(() => {
    // if (testData === null || testData === undefined) navigate('/test/fillup');
    // else if (!testData.PATIENT_UID || testData.PATIENT_UID === '') navigate('/test/fillup');

    if (isTestCompleted) {
      console.log('Test completed, stopping audio and clearing interval');
      return;
    }
    console.log('Screen resolution is ' + screenDimensions[0] + ' x ' + screenDimensions[1]);

    console.log('DOG CALIBRATION TEST DATA', testData);
    // Get the webcam stream and metadata on mount
    if (parentRef.current) {
      const { clientWidth, clientHeight } = parentRef.current;
      setParentDimensions([clientWidth, clientHeight]);
    }

    const startWebcam = async () => {
      if (!navigator.mediaDevices.getUserMedia) {
        console.error('getUserMedia not supported');
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: testData.deviceId ? { exact: testData.deviceId } : true },
        });
        videoRef.current.srcObject = stream;

        const handleMetadata = () => {
          const width = videoRef.current.videoWidth;
          const height = videoRef.current.videoHeight;
          setVideoResolution([width, height]);
        };

        videoRef.current.onloadedmetadata = handleMetadata;
      } catch (error) {
        console.error('Webcam start error:', error);
      }
    };

    startWebcam();

    audioRef.current = new Audio(`dog_bark.wav?timestamp=${Date.now()}`);

    const audio = audioRef.current;
    console.log(typeof audio);
    console.log(audio);
    const handleAudioPlay = () => {
      audio.loop = true;
      audio.play().catch((error) => console.error('Audio play error:', error));
    };

    audio.addEventListener('canplaythrough', handleAudioPlay);

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio position
      audio.removeEventListener('canplaythrough', handleAudioPlay);
    };
  }, [testData]);

  const handleNextButtonClick = () => {
    navigate("/video"); // Navigate to the video page
  };

  const captureFrame = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      const frameData = canvas.toDataURL('image/jpeg');
      return frameData;
    } else {
      console.warn('Frame capture failed: canvasRef or videoRef is null');
      // TODO: send back to take assignment page, with alert saying some error occurred
    }
  };

  const handleCircleClick = async () => {
    if (currentCircleIndex === 0) {

      setStartTime(Date.now());
      
      setClickTimes((clicktimes) => [...clicktimes, 0.0]);
      
      setFrameCaptureInterval(
        setInterval(() => {
          const frameData = captureFrame();
          setFrames((prevFrames) => [...prevFrames, frameData]);
        }, 33) // Adjusted to 33ms for ~30 fps
      );
      setCurrentCircleIndex(currentCircleIndex + 1);
    } else if (currentCircleIndex < circleCoordinates.length - 1 && currentCircleIndex > 0) {
      setClickTimes((clicktimes) => [...clicktimes, (Date.now() - startTime) / 1000]);
      setCurrentCircleIndex(currentCircleIndex + 1);
    } else {
      // THIS IS THE LAST CLICK ON THE DOG / CAT
      try {
        setIsTestCompleted(true);
        console.log('Stopping audio...');
        audioRef.current.loop = false;
        audioRef.current.currentTime = 0;
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current.removeEventListener('canplaythrough', () => {});
        console.log('Audio stopped successfully');
      } catch (err) {
        console.error('Error stopping audio:', err);
      }

      setClickTimes((clicktimes) => [...clicktimes, (Date.now() - startTime) / 1000]);
      var finalClickTimes = [...clickTimes, (Date.now() - startTime) / 1000];
      setIsCircleVisible(false);

      const timeElapsed = (Date.now() - startTime) / 1000;
      let fps = parseInt((frames.length / parseInt(timeElapsed.toString())).toString());


      var calibration_points = [];
      for (let i = 0; i < finalClickTimes.length; i++) {
        let currentClickFramesList = [];
        let frameRangeStartIndex = Math.floor(fps * finalClickTimes[i]);
        currentClickFramesList.push({
          timestamp: finalClickTimes[i],
          frame: frames[frameRangeStartIndex],
          // frame: "/DancingDog.png",
        });
        currentClickFramesList.push({
          timestamp: finalClickTimes[i] + 1 / fps,
          frame: frames[frameRangeStartIndex + 1],
          // frame: "/DancingDog.png",
        });
        calibration_points.push({
          point: {
            x: circleCoordinates[i][0],
            y: circleCoordinates[i][1],
            final: i === finalClickTimes.length - 1,
          },
          frames: currentClickFramesList,
        });
      }

      // ENCRYPTION STARTS HERE

      async function processAndSendData() {
        setIsLoading(true); // Show spinner

        try {
          const calibrationAesKey = Array.from(
            crypto.getRandomValues(new Uint8Array(32))
          )
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");

          // encrypting personal information
          // this data includes: guardianPno, patientName, patientDob, clinic name or referrer name
          const patientInfo = {
            patientName: testData.patientName,
            patientDOB: testData.patientDOB,
            guardianPno: testData.guardianPno,
            clinicOrReferrerName: testData.clinicOrReferrerName
          }
          const encryptedPatientInfo = await encryptCalibrationData(
            patientInfo,
            calibrationAesKey
          ).catch(error => {
            console.error("Failed to encrypt patient info:", error);
            throw error;
          });

          const encryptedCalibrationPoints = await encryptCalibrationData(
            calibration_points,
            calibrationAesKey
          ).catch((error) => {
            console.error("Failed to encrypt calibration points:", error);
            throw error;
          });

          const encryptedCalibrationAesKey = await encryptPassword(
            calibrationAesKey
          ).catch((error) => {
            console.error("Failed to encrypt password:", error);
            throw error;
          });

          const calibrationData = {
            patient_uid: testData.PATIENT_UID,
            transaction_id: testData.TRANSACTION_ID,
            camera_resolution: {
              width: videoResolution[0],
              height: videoResolution[1],
            },
            screen_resolution: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
            debug: true,
          };

          setTestData({
            ...testData,
            calibration_data: calibrationData,
            encrypted_calibration_points: encryptedCalibrationPoints.toString(),
            calibration_encrypted_key: encryptedCalibrationAesKey,
            encrypted_patient_info: encryptedPatientInfo.toString(),
          });
        } catch (error) {
          console.error('Processing error:', error);
          navigate('/Error');
          console.log(error);
        }
      }

      processAndSendData()
        .then((_) => {
          clearInterval(frameCaptureInterval);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error:", err);
          navigate("/Error");
        });
    }
  };

  return (
    <div
      id="parent-container"
      ref={parentRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        backgroundColor: !isCircleVisible && isLoading ? '#1b0c26' : 'white',
      }}
    >
      {isCircleVisible && parentDimensions[0] > 0 && parentDimensions[1] > 0 && circleCoordinates.length > 0 && (
        <Circle
          onClickHandler={handleCircleClick}
          x={circleCoordinates[currentCircleIndex][0]}
          y={circleCoordinates[currentCircleIndex][1]}
          radius={50}
          imageUrl={dogpng}
        />
      )}

      {/* Conditionally render spinner or button */}
      {!isCircleVisible &&
        (isLoading ? (
          <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              border: '0px solid red',
              justifyContent: 'center',
              height: '100%',
              backgroundColor: 'white',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'end',
                flex: 1,
                border: '0px solid green',
                marginTop: 200,
              }}
            >
              <MoonLoader color="#9a0ea9" />
            </div>
            <div
              style={{
                display: 'flex',
                border: '0px solid green',
                marginTop: 20,
                marginBottom: 100,
                fontWeight: 200,
                color: '#9a0ea9',
                fontSize: 30,
              }}
            >
              Please wait calibrating...
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'end',
                flex: 1,
                border: '0px solid green',
                textAlign: 'center',
                marginBottom: 100,
                color: '#9a0ea9',
                maxWidth: '80%',
              }}
            >
              {autismFacts[factIndex].fact}
            </div>
          </div>
        ) : (
          <button className="calibration-next-btn mt-4" onClick={handleNextButtonClick}>
            Next
          </button>
        ))}

      <div style={{ display: 'none', flex: 1 }}>
        <video ref={videoRef} autoPlay playsInline muted></video>
      </div>
      <canvas ref={canvasRef} style={{ flex: 1, display: 'none' }} />
    </div>
  );
};

export default DogCalibration;
