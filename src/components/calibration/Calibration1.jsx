import { useState, useEffect, useRef } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Calibration1 = () => {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [devices, setDevices] = useState([]);
  const [resolution, setResolution] = useState('');
  const [availableResolutions, setAvailableResolutions] = useState([]);
  const [capabilities, setCapabilities] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get available cameras
    navigator.mediaDevices
      .enumerateDevices()
      .then((deviceList) => {
        const cameras = deviceList.filter((device) => device.kind === 'videoinput');
        setDevices(cameras);
        if (cameras.length > 0) {
          setSelectedDevice(cameras[0].deviceId);
        }
      })
      .catch((err) => console.error('Error getting devices:', err));
  }, []);

  useEffect(() => {
    // Start camera and get capabilities when device is selected
    if (selectedDevice && videoRef.current) {
      // Stop previous stream if exists
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      navigator.mediaDevices
        .getUserMedia({
          video: { deviceId: selectedDevice },
        })
        .then((stream) => {
          streamRef.current = stream;
          videoRef.current.srcObject = stream;

          // Get camera capabilities
          const videoTrack = stream.getVideoTracks()[0];
          if (videoTrack && videoTrack.getCapabilities) {
            const caps = videoTrack.getCapabilities();
            setCapabilities(caps);

            // Generate available resolution options
            const resolutions = generateResolutionOptions(caps);
            setAvailableResolutions(resolutions);

            // Set default resolution
            if (resolutions.length > 0) {
              setResolution(resolutions[0].value);
            }
          }
        })
        .catch((err) => {
          console.error('Error accessing camera:', err);
          // Fallback resolutions if capabilities API fails
          const fallbackResolutions = [
            { label: '1920x1080@30.0', value: '1920x1080@30.0' },
            { label: '1280x720@30.0', value: '1280x720@30.0' },
            { label: '640x480@30.0', value: '640x480@30.0' },
          ];
          setAvailableResolutions(fallbackResolutions);
          setResolution(fallbackResolutions[1].value);
        });
    }
  }, [selectedDevice]);

  // Clean up stream on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const generateResolutionOptions = (capabilities) => {
    const resolutions = [];

    // Common resolution presets to check against camera capabilities
    const commonResolutions = [
      { width: 1920, height: 1080, label: '1080p' },
      { width: 1280, height: 720, label: '720p' },
      { width: 640, height: 480, label: '480p' },
      { width: 320, height: 240, label: '240p' },
    ];

    commonResolutions.forEach((res) => {
      // Check if this resolution is supported
      const widthSupported =
        capabilities.width && res.width >= capabilities.width.min && res.width <= capabilities.width.max;

      const heightSupported =
        capabilities.height && res.height >= capabilities.height.min && res.height <= capabilities.height.max;

      if (widthSupported && heightSupported) {
        // Get framerate info
        const maxFrameRate = capabilities.frameRate ? capabilities.frameRate.max : 30;
        const frameRate = Math.min(30, maxFrameRate);

        resolutions.push({
          label: `${res.width}x${res.height}@${frameRate.toFixed(1)}`,
          value: `${res.width}x${res.height}@${frameRate.toFixed(1)}`,
          width: res.width,
          height: res.height,
          frameRate: frameRate,
        });
      }
    });

    // If no standard resolutions work, create from actual capabilities
    if (resolutions.length === 0 && capabilities.width && capabilities.height) {
      const maxFrameRate = capabilities.frameRate ? capabilities.frameRate.max : 30;
      const frameRate = Math.min(30, maxFrameRate);

      resolutions.push({
        label: `${capabilities.width.max}x${capabilities.height.max}@${frameRate.toFixed(1)}`,
        value: `${capabilities.width.max}x${capabilities.height.max}@${frameRate.toFixed(1)}`,
        width: capabilities.width.max,
        height: capabilities.height.max,
        frameRate: frameRate,
      });
    }

    return resolutions;
  };

  const handleResolutionChange = async (newResolution) => {
    setResolution(newResolution);

    // Parse resolution string to extract width, height, frameRate
    const match = newResolution.match(/(\d+)x(\d+)@([\d.]+)/);
    if (match && selectedDevice && videoRef.current) {
      const [, width, height, frameRate] = match;

      try {
        // Stop current stream
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }

        // Start new stream with specific constraints
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            deviceId: selectedDevice,
            width: { ideal: parseInt(width) },
            height: { ideal: parseInt(height) },
            frameRate: { ideal: parseFloat(frameRate) },
          },
        });

        streamRef.current = stream;
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error('Error changing resolution:', err);
      }
    }
  };

  const handleNext = () => {
    console.log('Next clicked with device:', selectedDevice);
    // Save camera device to calibration data
    navigate('/calibration/2');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
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
        {/* Progress Indicator */}
        <div className="mb-2 text-center">
          <h2 className="text-lg font-medium text-[#B740A1]">Quick Setup - Step 1 of 3</h2>
        </div>

        {/* Title */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#F6E8FB]">Choose Your Camera</h1>
          <p className="text-lg text-[#CACED9]">Select the camera you want to use for tracking.</p>
        </div>

        {/* Camera Selection Section */}
        <div className="mb-8 w-full max-w-2xl rounded-lg bg-[#2A2A3A] p-6">
          {/* Device Dropdown */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-white">Device</label>
            <select
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
              className="w-full rounded-md bg-[#3A3A4A] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#B740A1]"
            >
              {devices.map((device) => (
                <option key={device.deviceId} value={device.deviceId}>
                  {device.label || `Camera ${device.deviceId.slice(0, 8)}`}
                </option>
              ))}
            </select>
          </div>

          {/* Camera Preview */}
          <div className="mb-4 aspect-video w-full overflow-hidden rounded-md bg-[#1A1A1A]">
            <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover" />
          </div>

          {/* Resolution & Framerate */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Resolution & Framerate
              {capabilities && (
                <span className="ml-2 text-xs text-[#CACED9]">
                  (Max: {capabilities.width?.max}x{capabilities.height?.max})
                </span>
              )}
            </label>
            <select
              value={resolution}
              onChange={(e) => handleResolutionChange(e.target.value)}
              className="w-full rounded-md bg-[#3A3A4A] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#B740A1]"
            >
              {availableResolutions.length > 0 ? (
                availableResolutions.map((res) => (
                  <option key={res.value} value={res.value}>
                    {res.label}
                  </option>
                ))
              ) : (
                <option value="">Loading capabilities...</option>
              )}
            </select>
          </div>

          {/* Debug Info (optional - can be removed in production) */}
          {capabilities && (
            <div className="mt-4 rounded-md bg-[#1A1A1A] p-3">
              <p className="text-xs text-[#CACED9]">
                Camera Capabilities:
                {capabilities.width && ` Width: ${capabilities.width.min}-${capabilities.width.max}`}
                {capabilities.height && ` Height: ${capabilities.height.min}-${capabilities.height.max}`}
                {capabilities.frameRate && ` FPS: ${capabilities.frameRate.min}-${capabilities.frameRate.max}`}
              </p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex w-full max-w-md items-center justify-between">
          {/* Skip This Button */}
          <button onClick={handleCancel} className="text-[#B740A1] underline hover:text-[#9C2A8A]">
            Cancel
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={!selectedDevice}
            className={`flex items-center justify-center rounded-lg px-8 py-3 text-white transition-all duration-200 ${
              selectedDevice
                ? 'bg-gradient-to-r from-[#B740A1] to-[#9C00AD] hover:from-[#9C00AD] hover:to-[#8A0096]'
                : 'cursor-not-allowed bg-[#564A59] opacity-50'
            }`}
          >
            Next
            <FaArrowRightLong className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calibration1;
