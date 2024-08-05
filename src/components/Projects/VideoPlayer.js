'use client'

import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className="h-[70vh] w-auto relative overflow-hidden mb-8">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        className="react-player"
        controls={true}
      />
    </div>
  );
};

export default VideoPlayer;
