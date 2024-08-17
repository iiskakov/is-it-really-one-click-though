'use client'
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';
import { anton, lato } from '@/app/fonts';

import Logo from '@/components/Intro/Logo'
import Nav from '@/components/Intro/Nav'
import SeeMore from '@/components/Intro/SeeMore'
import Spline from '@/components/Intro/Spline'
import Videos from '@/components/Intro/Videos'
import VideoSwitcher from '@/components/Intro/VideoSwitcher'
import VHS from '@/components/VHS';
import TeamSection from '@/components/TeamSection';






const Intro = (data) => {
  const [activeVideo, setActiveVideo] = useState(1);


  return (
    <div className="relative h-screen flex overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"/> */}
      <Logo/>
      <Nav/>
      <Videos videos={data.data.data} activeVideo={activeVideo} />
      {/* <VHS /> */}
      {/* {/\* <VideoSwitcher videos={data.data.data} activeVideo={activeVideo} setActiveVideo={setActiveVideo}/> *\/} */}
      {/* <Spline project_name={data.data.data[activeVideo - 1]?.project_name} director={data.data.data[activeVideo - 1]?.director} label={data.data.data[activeVideo - 1]?.label} /> */}

       {/* New Text Block */}
      <div className={`${lato.className} absolute right-[10vw] top-[50vh] w-[170px] text-right text-white text-sm`}>
        <p>
          We are full-cycle
production studio from
Almaty, Kazakhstan
        </p>
      </div>


      <div className="absolute bottom-0 right-0 leading-tight pr-[10vw] w-[70vw]">
        <h1 className="text-white text-[46px] md:text-[136px] leading-none text-right font-bold">
          WE CREATE HIGH IMPACT
        </h1>
      </div>
      <VHS/>


      {/* <TeamSection/> */}
      

    </div>
  );
}

export default Intro;
