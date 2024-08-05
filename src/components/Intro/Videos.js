import React from 'react';

export default function Videos({ videos, activeVideo }) {
  return (
    <>
      {videos.map((video) => (
        <video
          key={video.id}
          src={video.video_url}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-50 ease ${activeVideo === video.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          autoPlay
          muted
          loop
          preload="auto"
        />
      ))}
    </>
  );
};

