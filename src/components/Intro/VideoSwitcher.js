import React from 'react';
import { lato } from '@/app/fonts';

const generateGradientColors = (startColor, endColor, steps) => {
  const start = parseInt(startColor.slice(1), 16);
  const end = parseInt(endColor.slice(1), 16);

  const r1 = (start >> 16) & 255;
  const g1 = (start >> 8) & 255;
  const b1 = start & 255;

  const r2 = (end >> 16) & 255;
  const g2 = (end >> 8) & 255;
  const b2 = end & 255;

  const colors = [];
  for (let i = 0; i < steps; i++) {
    const r = Math.round(r1 + ((r2 - r1) * i) / (steps - 1));
    const g = Math.round(g1 + ((g2 - g1) * i) / (steps - 1));
    const b = Math.round(b1 + ((b2 - b1) * i) / (steps - 1));
    colors.push(`#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`);
  }
  return colors;
};

const VideoSwitcher = ({ videos, activeVideo, setActiveVideo, data }) => {
  const colors = generateGradientColors('#F4A804', '#E93949', videos.length);

  return (
    <div className="absolute bottom-[200px] md:bottom-8 left-5 md:left-16 z-20 font-sans text-sm">
      <span className={`${lato.className} md:hidden text-base uppercase opacity-30 leading-10`}>selected works</span>
      {videos.map((video, index) => (
        <div
          key={video.id}
          onClick={() => setActiveVideo(video.id)}
          className="flex items-center cursor-pointer mb-2.5"
        >
          <svg
            className={`mr-2 h-2.5 w-2.5 ${activeVideo === video.id ? '' : 'opacity-50'}`}
            viewBox="0 0 24 24"
            fill={activeVideo === video.id ? colors[index] : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke={colors[index]} strokeWidth="4" />
          </svg>
          <span className={`${lato.className} text-base`}>{video.label}</span>
        </div>
      ))}
    </div>
  );
};

export default VideoSwitcher;
