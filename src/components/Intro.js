'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { anton } from '@/app/fonts';




import Logo from '@/components/Intro/Logo'
import Nav from '@/components/Intro/Nav'
import SeeMore from '@/components/Intro/SeeMore'
import Spline from '@/components/Intro/Spline'
import Videos from '@/components/Intro/Videos'
import VideoSwitcher from '@/components/Intro/VideoSwitcher'




const Intro = (data) => {
  const [activeVideo, setActiveVideo] = useState(1);


  return (
    <div className="relative h-screen flex">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"/>
      <div className="hidden md:flex absolute left-0 top-0 h-screen w-[44px] z-40 border-r-[1px] border-white/30 flex items-center justify-center">
        <span className={`${anton.className} [writing-mode:vertical-lr] rotate-180 uppercase text-[21px]`}>Selected Works</span>
      </div>
      <Logo/>
      <Nav/>
      <Videos videos={data.data.data} activeVideo={activeVideo} />
      <VideoSwitcher videos={data.data.data} activeVideo={activeVideo} setActiveVideo={setActiveVideo}/>
      <Spline project_name={data.data.data[activeVideo - 1]?.project_name} director={data.data.data[activeVideo - 1]?.director} label={data.data.data[activeVideo - 1]?.label} />
      <SeeMore project_name={data.data.data[activeVideo - 1]?.project_name} />

    </div>
  );
}

export default Intro;
