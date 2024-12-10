'use client'
import React, { useEffect, useRef } from 'react';

export default function Videos({ videoUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch((err) => {
        console.error("Failed to autoplay video:", err);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      className="absolute top-0 left-0 w-full h-svh md:h-full object-cover transition-opacity duration-50 ease opacity-100 pointer-events-auto"
      autoPlay
      playsInline
      muted
      loop
      style={{ scale: 1.2 }}
    />
  );
}
