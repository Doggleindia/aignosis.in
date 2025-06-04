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
  const [xmlPath, _] = useState('haarcascade_frontalface_default.xml');
  const xmlModelUrl =
    'https://raw.githubusercontent.com/opencv/opencv/master/data/haarcascades/haarcascade_frontalface_default.xml';
  const [faceCascadeReady, setFaceCascadeReady] = useState(false);
  const [faceCascade, setFaceCascade] = useState(null);

  const navigate = useNavigate(); // Initialize navigate function

  // Handle the "Next" button click
  const handleNextClick = async () => {
    // Navigate to DogCalibration page
    navigate('/dogcalibration');
  };
  const [permissionsGranted, setPermissionsGranted] = useState(false); // Track permissions

  function createFileFromUrl(path, url, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
      if (request.status === 200) {
        const data = new Uint8Array(request.response);
        cv.FS_createDataFile('/', path, data, true, false, false);
        callback();
      } else {
        console.error('Failed to load ' + url + ' status: ' + request.status);
      }
    };
    request.send();
  }

  useEffect(() => {
    // Check if cv is defined and wait for initialization
    if (typeof cv === 'undefined' || !cv.FS_createDataFile) {
      console.log('OpenCV.js is not loaded yet, waiting...');
      cv['onRuntimeInitialized'] = () => {
        console.log('OpenCV.js initialized');
        createFileFromUrl(xmlPath, xmlModelUrl, () => {
          setFaceCascadeReady(true);
          console.log('Cascade file loaded!');
        });
      };
    } else {
      createFileFromUrl(xmlPath, xmlModelUrl, () => {
        setFaceCascadeReady(true);
        console.log('Cascade file loaded!');
        setFaceCascade(new cv.CascadeClassifier());
      });
    }
  }, [xmlPath, xmlModelUrl]);

  useEffect(() => {
    console.log('Face Cascade state changed:', faceCascade);
  }, [faceCascade])

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

                let video = document.getElementById('videoElement');
                let canvas = document.getElementById('canvasOutput');
                video.addEventListener('loadedmetadata', () => {
                  video.height = video.videoHeight;
                  video.width = video.videoWidth;
                  canvas.height = video.height;
                  canvas.width = video.width;
                  console.log('Started processing...');
                  startProcessing(video, canvas);
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

                let video = document.getElementById('videoElement');
                let canvas = document.getElementById('canvasOutput');
                video.addEventListener('loadedmetadata', () => {
                  video.height = video.videoHeight;
                  video.width = video.videoWidth;
                  canvas.height = video.height;
                  canvas.width = video.width;
                  console.log('Started processing...');
                  startProcessing(video, canvas);
                });

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

  function startProcessing(video, canvas) {
    let cap = new cv.VideoCapture(video);

    console.log('video dims');
    console.log(video.height, video.width);
    console.log('canvas dims');
    console.log(canvas.height, canvas.width);
    const src = new cv.Mat(canvas.height, canvas.width, cv.CV_8UC4);
    const dst = new cv.Mat(canvas.height, canvas.width, cv.CV_8UC4);
    const gray = new cv.Mat();

    function processVideo() {
      cap.read(src);

      if (faceCascadeReady) {
        if (src.empty()) {
          console.log('Empty frame received from webcam.');
          requestAnimationFrame(processVideo);
          return;
        }
        src.copyTo(dst);

        if (src.type() === cv.CV_8UC4) {
          cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
        } else if (src.type() === cv.CV_8UC3) {
          cv.cvtColor(src, gray, cv.COLOR_RGB2GRAY);
        } else {
          console.warn('Unexpected frame type:', src.type());
          cv.imshow(canvas, dst);
          requestAnimationFrame(processVideo);
          return;
        }
        
      }
      cv.imshow(canvas, dst);
      requestAnimationFrame(processVideo);
    }
    requestAnimationFrame(processVideo);
  }

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
            {/* Aignosis Branding */}
            <div className="relative mb-2 text-4xl font-bold text-[#1A0C25]">
              <span className="z-10 font-montserrat">Aignosis</span>
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
                  <canvas id="canvasOutput"></canvas>
                  <video
                    id="videoElement"
                    ref={videoRef}
                    hidden={true}
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
