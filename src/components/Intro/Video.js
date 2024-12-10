import React from 'react';

export default function Videos({ videoUrl }) {
  return (
    
        <video
          src={videoUrl}
          className={`  absolute top-0 left-0 w-full h-svh md:h-full object-cover transition-opacity duration-50 ease opacity-100 pointer-events-auto`}
          autoPlay
          playsInline
          style={{ scale: 1.2}}
          muted
          loop
        />
  );
};

