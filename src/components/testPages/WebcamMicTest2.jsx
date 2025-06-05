import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const WebcamMicTest2 = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [micPermission, setMicPermission] = useState(false);
  const [webcamPermission, setWebcamPermission] = useState(false);
  const [snapshotTaken, setSnapshotTaken] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const faceCascadeRef = useRef(null);
  const [isAudioActive, setIsAudioActive] = useState(true);
  const xmlModelUrl =
    'https://raw.githubusercontent.com/opencv/opencv/master/data/haarcascades/haarcascade_frontalface_default.xml';
  const xmlPath = 'haarcascade_frontalface_default.xml';
  const [faceCascadeReady, setFaceCascadeReady] = useState(false);
  const [triggerProcessing, setTriggerProcessing] = useState(false);
  const audioContextRef = useRef(null);
  const [volume, setVolume] = useState(0);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const [error, setError] = useState('');

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

  function startProcessing() {
    let video = videoRef.current;
    let canvas = canvasRef.current;

    if (video.videoWidth !== 0 && video.videoHeight !== 0) {
      video.height = video.videoHeight;
      video.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      const cap = new cv.VideoCapture(video);

      const frame = new cv.Mat(canvas.height, canvas.width, cv.CV_8UC4);
      const dst = new cv.Mat(canvas.height, canvas.width, cv.CV_8UC4);
      const gray = new cv.Mat();

      let frameCount = 0;
      let calibrationObject = {
        frames: [],
      };

      function processVideo() {
        try {
          frameCount++;
          if (calibrationObject.frames.length >= 100) {
            // send to calibration checker function
          }
          cap.read(frame);
          if (frame.empty()) {
            requestAnimationFrame(processVideo);
            return;
          }
          frame.copyTo(dst);
          if (faceCascadeReady && faceCascadeRef.current) {
            if (frame.type() === cv.CV_8UC4) {
              cv.cvtColor(frame, gray, cv.COLOR_RGBA2GRAY);
            } else if (frame.type() === cv.CV_8UC3) {
              cv.cvtColor(frame, gray, cv.COLOR_RGB2GRAY);
            } else {
              console.warn('Unexpected frame type:', frame.type());
              cv.imshow(canvas, dst);
              requestAnimationFrame(processVideo);
              return;
            }

            const faces = new cv.RectVector();
            faceCascadeRef.current.detectMultiScale(gray, faces, 1.1, 3, 0);

            for (let i = 0; i < faces.size(); i++) {
              const face = faces.get(i);
              const pt1 = new cv.Point(face.x, face.y);
              const pt2 = new cv.Point(face.x + face.width, face.y + face.height);
              cv.rectangle(dst, pt1, pt2, [255, 0, 0, 255], 3);
            }

            if (faces.size() === 1) {
              //   let face = faces.get(0);
              //   let faceCenterX = (face.x + face.width) / 2;
              //   let faceCenterY = (face.y + face.width) / 2;
              //   if (
              //     faceCenterX > ((canvas.height / 2) - (canvas.height/4)) &&
              //     faceCenterX < ((canvas.height / 2) + (canvas.height/4)) &&
              //     faceCenterY > ((canvas.width / 2) - (canvas.width/4)) &&
              //     faceCenterY < ((canvas.width / 2) + (canvas.width/4))
              //   ) {
              //     console.log(faceCenterX, faceCenterY);
              //     console.log(canvas.width / 2, canvas.height / 2);
              //     console.log('Face detected and centered');
              //     calibrationObject.frames.push({
              //       frameIdx: frameCount,
              //       faceDetected: faces.size() > 0,
              //       numFacesDetected: faces.size(),
              //     });
              //   } else {
              //     console.warn('Face is not centered, please adjust your position');
              //   }
            } else if (faces.size() > 2) {
              console.warn('Multiple faces detected, expected only one');
              calibrationObject.frames = [];
            } else if (faces.size() === 0) {
              console.warn('No faces detected');
              calibrationObject.frames = [];
            }
            faces.delete();
          }
          cv.imshow(canvas, dst);
        } finally {
          // TODO:
        }
        requestAnimationFrame(processVideo);
      }

      requestAnimationFrame(processVideo);
    } else {
    }
  }

  const getVolume = () => {
    if (!analyserRef.current || !dataArrayRef.current) {
      console.warn('Analyser or data array not initialized');
      return;
    }
    analyserRef.current.getByteFrequencyData(dataArrayRef.current);
    const sum = dataArrayRef.current.reduce((sum, value) => sum + value, 0);
    const average = sum / dataArrayRef.current.length;
    const scaledVolume = (average / 255) * 100; // Scale to 0-100 for percentage
    setVolume(scaledVolume); // Debug log
    requestAnimationFrame(getVolume); // Continue updating
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setWebcamPermission(true);
        setMicPermission(true);
        videoRef.current.addEventListener('loadeddata', () => {
          setTriggerProcessing(true);
        });

        // ✅ Setup audio analyser
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        const audioSource = audioContextRef.current.createMediaStreamSource(stream);
        analyserRef.current = audioContextRef.current.createAnalyser();
        audioSource.connect(analyserRef.current);

        analyserRef.current.fftSize = 256;
        const bufferLength = analyserRef.current.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);

        getVolume();
      })
      .catch(() => {
        setWebcamPermission(false);
        setMicPermission(false);
      });

    if (typeof cv !== 'undefined') {
      createFileFromUrl(xmlPath, xmlModelUrl, () => {
        setFaceCascadeReady(true);
      });
    }
  }, [cv, xmlPath, xmlModelUrl]);

  useEffect(() => {
    if (triggerProcessing && faceCascadeReady && videoRef.current) {
      if (!faceCascadeRef.current) {
        faceCascadeRef.current = new cv.CascadeClassifier();
        faceCascadeRef.current.load(xmlPath);
      }
      try {
        startProcessing();
      } catch (error) {
        console.error('Error in startProcessing:', error);
      }
    }
  }, [triggerProcessing, faceCascadeReady]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25]">
      <div className="relative flex h-[650px] w-[900px] flex-col items-center space-y-3 rounded-3xl border border-[#5F1B73] bg-[#FDF9FF] p-8 shadow-lg max-sm:w-[90vw]">
        <div className="relative mb-2 text-4xl font-bold text-[#1A0C25]">
          <span className="z-10 font-montserrat">Aignosis</span>
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="h-[100px] w-[150px] rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-70 blur-2xl"></div>
          </div>
        </div>

        <div className="relative flex h-[300px] w-[500px] items-center justify-center overflow-hidden rounded-lg bg-[#D9D9D9] max-sm:w-[85vw]">
          <video
            id="videoElement"
            style={{ flex: 1, border: '1px solid green', borderRadius: '10px' }}
            ref={videoRef}
            hidden={true}
            autoPlay
            playsInline
            muted
          ></video>
          <div className="">
            <canvas
              id="canvasElement"
              style={{ flex: 1, border: '1px solid blue', borderRadius: '10px' }}
              ref={canvasRef}
            ></canvas>
          </div>
        </div>

        <h2 className="font-manrope text-2xl font-semibold text-[#292738] max-sm:text-xl">Webcam & Microphone test</h2>

        <div className="mt-4 text-center" style={{ color: 'red' }}>
          Please adjust your distance from the camera until your face fills the oval region
        </div>

        {!snapshotTaken ? (
          <div
            onClick={() => {}}
            className={`mt-4 rounded-full border-0 border-[#9C00AD] px-6 py-2 font-montserrat font-semibold text-[#292738] transition-colors hover:bg-[#F0A1FF] hover:text-white ${
              !micPermission && !webcamPermission ? 'cursor-not-allowed opacity-50' : ''
            }`}
          >
            Please place your face in the oval region to begin calibration
          </div>
        ) : (
          <button
            onClick={() => {}}
            className="mt-4 rounded-full border-2 border-[#9C00AD] px-6 py-2 font-montserrat font-semibold text-[#292738] transition-colors hover:bg-[#F0A1FF] hover:text-white"
          >
            Next
          </button>
        )}
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
  );
};

export default WebcamMicTest2;
