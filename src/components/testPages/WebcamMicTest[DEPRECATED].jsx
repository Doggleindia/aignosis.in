import React, { useEffect, useRef, useState, useMemo, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import CalibrationPage from './CalibrationPage';
import './facearea.css';
import { AppContext } from '../aignosisintegration/AppContext.jsx'; // Import AppContext
import { vi } from 'date-fns/locale';

const WebcamMicTest = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [navigateAfterCleaningTrigger, setNavigateAfterCleaningTrigger] = useState(false);
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
  const [triggerProcessing, setTriggerProcessing] = useState(false);
  const [snapshotButtonEnabled, setSnapshotButtonEnabled] = useState(false);

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
    let isMounted = true;

    const loadCascade = () => {
      createFileFromUrl(xmlPath, xmlModelUrl, () => {
        if (!isMounted) return;
        const cascade = new cv.CascadeClassifier();
        cascade.load(xmlPath);
        setFaceCascade(cascade);
        setFaceCascadeReady(true);
      });
    };

    if (typeof cv === 'undefined' || !cv.FS_createDataFile) {
      cv['onRuntimeInitialized'] = loadCascade;
    } else {
      loadCascade();
    }

    return () => {
      isMounted = false;
    };
  }, [xmlPath, xmlModelUrl]);

  const getVolume = (bufferLength) => {
    analyserRef.current.getByteFrequencyData(dataArrayRef.current);
    const average = dataArrayRef.current.reduce((sum, value) => sum + value, 0) / bufferLength;
    setVolume(average);
    if (!snapshotTaken) {
      requestAnimationFrame(getVolume);
    }
  };

  useEffect(() => {
    async function setupMediaDevices() {
      try {
        navigator.mediaDevices.enumerateDevices().then((devices) => {
          devices.forEach(async (device) => {
            if (device.kind === 'videoinput') {
              if (device.label.startsWith('Kreo')) {
                setDevicedId(device.deviceId);
                setTestData({
                  ...testData,
                  deviceId: device.deviceId,
                });
              }
            }
          });
        });

        const stream = await navigator.mediaDevices.getUserMedia({
          video: deviceId ? { deviceId: { exact: deviceId } } : true,
          audio: true,
        });

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

        // ✅ Log resolution
        const videoTrack = stream.getVideoTracks()[0];
        const settings = videoTrack.getSettings();

        setPermissionsGranted(true); // Permissions granted

        let video = document.getElementById('videoElement');
        let canvas = document.getElementById('canvasOutput');
        video.addEventListener('loadedmetadata', () => {
          setTriggerProcessing(true);
        });

        getVolume(bufferLength);
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

  useEffect(() => {
    let video = document.getElementById('videoElement');
    let canvas = document.getElementById('canvasOutput');

    video.height = video.videoHeight;
    video.width = video.videoWidth;
    canvas.height = video.height;
    canvas.width = video.width;

    if (video.videoHeight !== 0 || video.videoWidth !== 0) {
      let cap = new cv.VideoCapture(video);

      const src = new cv.Mat(canvas.height, canvas.width, cv.CV_8UC4);
      const dst = new cv.Mat(canvas.height, canvas.width, cv.CV_8UC4);
      const gray = new cv.Mat();

      function processVideo() {
        
        cap.read(src);

        if (faceCascadeReady) {
          if (src.empty()) {
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

          if (faceCascade && !gray.empty()) {
            const faces = new cv.RectVector();
            // let mean = cv.mean(gray);
            faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0);

            for (let i = 0; i < faces.size(); i++) {
              const face = faces.get(0);
              const pt1 = new cv.Point(face.x, face.y);
              const pt2 = new cv.Point(face.x + face.width, face.y + face.height);
              cv.rectangle(dst, pt1, pt2, [255, 0, 0, 255], 3);
            }

            faces.delete();
          } else {
            console.warn('Face cascade is not loaded or gray frame is empty.');
          }
        }
        cv.imshow(canvas, dst);
        requestAnimationFrame(processVideo);
      }
      requestAnimationFrame(processVideo);
    }
  }, [faceCascadeReady, triggerProcessing, faceCascade]);
  // function startProcessing(video, canvas) {}

  const handleSnapshot = () => {
    if (videoRef.current && canvasRef.current) {
      // Pause video and audio
      videoRef.current.pause();
      if (audioContextRef.current) {
        audioContextRef.current.suspend();
      }

      let canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      // Convert canvas to a data URL (base64 string)
      const imageData = canvas.toDataURL('image/png');
      setSnapshot(imageData); // Save snapshot data
      setSnapshotTaken(true); // Mark that the snapshot is taken
    }
  };

  useEffect(() => {
    if (navigateAfterCleaningTrigger) {
      console.log('Cleaning up resources and navigating...');
      // Stop media tracks
      const video = videoRef.current;
      if (video && video.srcObject) {
        video.srcObject.getTracks().forEach((track) => track.stop());
        video.srcObject = null;
      }

      // Close audio context
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch((err) => console.warn('AudioContext close error:', err));
      }

      // Cancel all requestAnimationFrames
      if (typeof cancelAnimationFrame !== 'undefined') {
        // This is a rough way to ensure we don't keep looping
        let id = requestAnimationFrame(() => {});
        while (id--) {
          cancelAnimationFrame(id);
        }
      }

      // Remove video event listeners
      const videoEl = document.getElementById('videoElement');
      if (videoEl) {
        videoEl.removeEventListener('loadedmetadata', () => setTriggerProcessing(true));
      }

      // Release OpenCV Mats
      try {
        cv.Mat &&
          ['src', 'dst', 'gray'].forEach((name) => {
            if (window[name] instanceof cv.Mat) {
              window[name].delete();
            }
          });
      } catch (e) {
        console.warn('Error cleaning OpenCV mats:', e);
      }

      // Face Cascade release (optional, depends on OpenCV version)
      if (faceCascade && typeof faceCascade.delete === 'function') {
        faceCascade.delete();
      }
    }
    // navigate('/dogcalibration'); // Navigate to DogCalibration page
  }, [navigateAfterCleaningTrigger]);

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

            <div className="relative flex h-[300px] w-[500px] items-center justify-center overflow-hidden rounded-lg bg-[#D9D9D9] max-sm:w-[85vw]">
              {!snapshotTaken && (
                <div className="face-area">
                  <canvas id="canvasOutput" ref={canvasRef}></canvas>
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
              {/* Show snapshot after it’s taken */}
              {snapshotTaken && snapshot && (
                <img
                  src={snapshot}
                  alt="Snapshot"
                  className="absolute inset-0 z-30 h-full w-full rounded-lg object-cover"
                />
              )}
            </div>

            <div className="mt-4 text-center" style={{ color: 'red' }}>
              Please adjust your distance from the camera until your face fills the oval region
            </div>

            {/* Buttons */}
            {!snapshotTaken ? (
              <button
                onClick={handleSnapshot}
                disabled={!permissionsGranted && snapshotButtonEnabled} // Disable if permissions are not granted
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
