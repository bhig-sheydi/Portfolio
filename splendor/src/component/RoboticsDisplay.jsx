import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaArrowLeft,
  FaVolumeMute,
  FaVolumeUp,
  FaPlay,
} from "react-icons/fa";
import jada1 from "../assets/jadavid1.mp4";
import jada2 from "../assets/jadavid2.mp4";

const JadaSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [isMuted, setIsMuted] = useState(false); // start muted
  const [isPlaying, setIsPlaying] = useState(false); // for play button

  const videoRef = useRef(null);
  const videos = [jada1, jada2];

  const nextVideo = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
    setIsPlaying(false); // reset play button for new video
  };

  const prevVideo = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-[#0e0e1c]">
      <AnimatePresence mode="wait">
        <motion.video
          key={current}
          ref={videoRef}
          src={videos[current]}
          className="w-auto h-full rounded-2xl shadow-2xl object-contain"
          autoPlay={false}
          muted={isMuted}
          onEnded={nextVideo}
          controls={false}
          playsInline
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e1c] via-transparent to-[#0e0e1c]/70 pointer-events-none"></div>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute z-20 flex items-center justify-center w-24 h-24 rounded-full bg-black/70 hover:scale-110 transition shadow-lg"
        >
          <FaPlay size={40} className="text-orange-500 ml-1" />
        </button>
      )}

      {/* Navigation Buttons */}
      <button
        onClick={prevVideo}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-4 rounded-full text-yellow-400 hover:scale-110 transition shadow-lg"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        onClick={nextVideo}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-4 rounded-full text-pink-400 hover:scale-110 transition shadow-lg"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Mute / Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-full text-amber-400 hover:scale-110 transition shadow-lg"
      >
        {isMuted ? <FaVolumeMute size={22} /> : <FaVolumeUp size={22} />}
      </button>
    </div>
  );
};

export default JadaSlideshow;
