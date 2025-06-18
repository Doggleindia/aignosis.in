import { useEffect, useRef, useState, useContext } from 'react';
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
  const [selectedDevice, setSelectedDevice] = useState('');
  const [devices, setDevices] = useState([]);
  const streamRef = useRef(null);
  const { testData, setTestData } = useContext(AppContext);

  const navigate = useNavigate();

  const handleNextClick = async () => {
    navigate('/instructions');
  };
  const [permissionsGranted, setPermissionsGranted] = useState(false); // Track permissions

  useEffect(() => {
    // Get available cameras
    navigator.mediaDevices
      .enumerateDevices()
      .then((deviceList) => {
        const cameras = deviceList.filter((device) => device.kind === 'videoinput');
        setDevices(cameras);
        if (cameras.length > 0) {
          const kreoDevice = cameras.find((device) => device.label.startsWith('Kreo'));
          const defaultDevice = kreoDevice || cameras[0];
          setSelectedDevice(defaultDevice.deviceId);
        }
      })
      .catch((err) => console.error('Error getting devices:', err));
  }, []);

  useEffect(() => {
    async function setupMediaDevices() {
      if (!selectedDevice) return;

      try {
        // Stop previous stream if exists
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: { exact: selectedDevice } },
          audio: true,
        });

        streamRef.current = stream;
        setTestData({
          ...testData,
          deviceId: selectedDevice,
        });

        console.log('Device ID:', selectedDevice);

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
      } catch (err) {
        console.error('Error accessing webcam/microphone:', err);
        setPermissionsGranted(false);
        setError('Error: please allow access to your webcam and microphone');
        navigate('/resourcepermissionerror');
      }
    }

    setupMediaDevices();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDevice, snapshotTaken]);

  // Clean up stream on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

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
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25] py-10 text-white">
          {/* Header with Logo */}
          <div className="absolute left-6 top-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
              <h1 className="relative z-10 font-montserrat text-2xl font-semibold text-[#E3E2E5]">Aignosis</h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex w-full max-w-4xl flex-col items-center px-6">
            {/* Title */}
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold text-[#F6E8FB]">Webcam & Microphone Test</h1>
              <p className="text-lg text-[#CACED9]">Test your camera and microphone before proceeding.</p>
            </div>

            {/* Camera Selection & Test Section */}
            <div className="mb-8 flex w-full max-w-2xl flex-col items-center rounded-xl border border-[#4A3458] bg-gradient-to-b from-[#3D2A4F] to-[#2D1F39] p-8 shadow-2xl">
              {/* Device Dropdown */}
              <div className="mb-6 w-full">
                <label className="mb-3 block text-base font-semibold text-[#E3E2E5]">Camera Device</label>
                <div className="relative">
                  <select
                    value={selectedDevice}
                    onChange={(e) => setSelectedDevice(e.target.value)}
                    className="w-full cursor-pointer appearance-none rounded-lg border border-[#5D4A6B] bg-gradient-to-r from-[#4A3458] to-[#3D2A4F] px-4 py-3 pr-10 text-white transition-all duration-200 hover:border-[#B740A1] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#B740A1]"
                  >
                    {devices.map((device) => (
                      <option key={device.deviceId} value={device.deviceId} className="bg-[#3D2A4F] text-white">
                        {device.label || `Camera ${device.deviceId.slice(0, 8)}`}
                      </option>
                    ))}
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Webcam Preview or Snapshot Display */}
              <div className="relative mb-6 flex h-[300px] w-[500px] items-center justify-center overflow-hidden rounded-lg bg-[#d9d9d9] shadow-inner">
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

                {/* Show snapshot after it's taken */}
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

              <div className="mb-6 text-center">
                <p className="rounded-lg border border-[#F4A261]/30 bg-[#2A1F35] px-4 py-2 text-sm font-medium text-[#F4A261]">
                  Please adjust your distance from the camera until your face fills the oval region
                </p>
              </div>

              {/* Snapshot Button */}
              {!snapshotTaken ? (
                <button
                  onClick={handleSnapshot}
                  disabled={!permissionsGranted}
                  className={`mb-6 rounded-lg px-6 py-3 font-montserrat font-semibold transition-all duration-200 ${
                    permissionsGranted
                      ? 'transform bg-gradient-to-r from-[#B740A1] to-[#9C00AD] text-white shadow-lg hover:from-[#9C00AD] hover:to-[#8A0096]'
                      : 'cursor-not-allowed bg-[#564A59] text-gray-400 opacity-50'
                  }`}
                >
                  Take Snapshot
                </button>
              ) : (
                <button
                  onClick={handleNextClick}
                  className="mb-6 transform rounded-lg bg-gradient-to-r from-[#B740A1] to-[#9C00AD] px-6 py-3 font-montserrat font-semibold text-white shadow-lg transition-colors duration-200 hover:from-[#9C00AD] hover:to-[#8A0096]"
                >
                  Next
                </button>
              )}

              {/* Microphone Test Section */}
              <div className="w-full text-center">
                <h3 className="mb-3 text-xl font-semibold text-[#E3E2E5]">Microphone Test</h3>
                <p className="mb-6 leading-relaxed text-[#CACED9]">
                  Speak into the microphone and the volume level will be displayed below:
                </p>

                {/* Volume Level Indicator */}
                <div className="relative h-6 w-full overflow-hidden rounded-full border border-[#4A3458] bg-[#2A1F35]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#B740A1] to-[#9C00AD] shadow-sm"
                    style={{ width: `${Math.min(volume, 100)}%` }}
                  ></div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                    <p className="text-sm font-medium text-red-300">{error}</p>
                  </div>
                )}
              </div>
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
