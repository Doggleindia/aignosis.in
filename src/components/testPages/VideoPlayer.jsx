import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ testData, handleVideoLoadedData, handleVideoPlay, handleVideoPause, handleVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const videoSrc =
      testData.videolanguage === "English"
        ? "https://storage.googleapis.com/aignosis_static_assets/Test_Videos/ast%20eng%20vid%20hls%20format/playlist.m3u8"
        : "https://storage.googleapis.com/aignosis_static_assets/Test_Videos/ast%20hindi%20vid%20hls%20format/playlist.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // video.play(); // Uncomment if you want to autoplay
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
    }
  }, [testData.videolanguage]);

  return (
    <video
      ref={videoRef}
      autoPlay
      controls
      className="w-full h-full object-cover"
      onLoadedData={handleVideoLoadedData}
      onPlay={handleVideoPlay}
      onPause={handleVideoPause}
      onEnded={handleVideoEnd}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }}
    />
  );
};

export default VideoPlayer;
