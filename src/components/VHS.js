'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { anton, tthoves, lato } from '@/app/fonts'

import tdlogo from "@/public/logo.svg";
import hq from "@/public/hq.svg";
import oppo from "@/public/oppo_logo.svg";
import hyundai from "@/public/hyundai-logo.svg";
import redbull from "@/public/redbull-logo.svg";
import Image from 'next/image'
import { yandexCloudImage } from '@/utils/functions';



const colors = ["#fe2c52", "#7861fe", "#63c278", "#ffde6d", "#fd7a00", "#fda4b5", "#9147AE"];


const AccordionItem = ({
  title,
  isOpen,
  onClick,
  year,
  color,
  client,
  category,
  index,
  logo,
  directedBy,
  video,
  isInView,
}) => {

  const backgroundColor = colors[index % colors.length];
  return (
    <motion.div
      animate={isInView && {rotate: 0}}
      transition={{ duration: 0.2 }}
      whileHover={{ y: !isOpen ? -15 : 0 }}
      whileTap={{ scale: 0.95 }}
      className="accordion-item  h-[83vh] md:h-[83vh] "
      style={{ backgroundColor }}
    >
      <motion.div
        initial={false}
        transition={{ duration: 0.6 }}
        className="accordion-header "
        onClick={onClick}
      >
        <div className="-rotate-90 md:rotate-0">
          
          <div className="accordion-header-logo">
            <img src={yandexCloudImage(logo.url)} alt="Client logo" className="filter brightness-0" />
          </div>
          <motion.div className={`${lato.className} text-[14px] accordion-year`}>{year}</motion.div>
        </div>
              <motion.div className={`${tthoves.className} transition-opacity duration-500 uppercase accordion-title fixed md:static bottom-10`}>
  {(!isOpen && index === 0) ? "SELECTED WORKS" : title}
</motion.div>

        {/* <motion.div className={`${tthoves.className} uppercase accordion-title fixed md:static bottom-10`}>{title}</motion.div> */}
        <div className="accordion-footer">
          <Image src={tdlogo} alt="2d Production logo" className="scale-150 md:scale-100 accordion-logo opacity-20 md:opacity-100" />
          <Image src={hq} alt="HQ logo" className="accordion-hq hidden md:block" />
        </div>
      </motion.div>
      <AnimatePresence>
        
        {isOpen && (
          <motion.div
            transition={{ duration: 0.4 }}
            initial={{ width: '0px' }}
            animate={{ width: '430px' }}
            exit={{ width: '0px' }}
            className="accordion-content"
          >

            <div class="relative w-full h-full ">
            <video
              src={yandexCloudImage(video.url)}
              autoPlay
              loop
              preload="auto"
              muted
              class="w-full h-full object-cover"
            />

              
              

              {/* Lines text */}
                {/* <div class={`${lato.className} overflow-hidden absolute bottom-0 gap-2 inset-0 flex flex-col items-end justify-end font-medium text-[15px] uppercase transition-opacity duration-500`}> */}
                {/*   <div class="flex h-[40px] font-medium px-2 items-center bg-[#ECEAD3] w-full"> */}
                {/*     <div class="">Directed by</div> */}
                {/*     <div class="flex-grow border-b border-black mx-2"></div> */}
                {/*     <div class="">{directedBy} </div> */}
                {/*   </div> */}
                {/*   <div class="flex h-[40px] px-2 items-center bg-[#ECEAD3] w-full"> */}
                {/*     <div class="">{category}</div> */}
                {/*     <div class="flex-grow border-b border-black mx-2"></div> */}
                {/*     <div class="">{year}</div> */}
                {/*   </div> */}
                {/* </div> */}
          </div>

            {/* <video */}
            {/*   src="https://samplelib.com/lib/preview/webm/sample-5s.webm" */}
            {/*   autoPlay */}
            {/*   loop */}
            {/*   preload="auto" */}
            {/*   muted */}
            {/*   style={{ width: '100%', height: '100%', objectFit: 'cover' }} */}
            {/* /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const App = ({accordionData}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="h-screen w-screen relative hidden md:block"
      style={{
        backgroundColor: openIndex !== null ? 'black' : 'transparent',
        zIndex: openIndex !== null? '21' : '20',
        transition: 'background-color 0.5s ease-in-out', // Smooth transition
      }}
    >
      <motion.div id="works" className=" rotate-90 md:rotate-0 absolute bottom-4 left-0 right-0">
        <motion.div
          initial={{ x: '70vw' }} // Start with most of the content off-screen
          animate={openIndex !== null ? { x: -200 } : { x: '70vw' }} // Slide in if an item is open, slide out if no items are open
          transition={{ duration: 0.5 }}
        >
          <div className="accordion-container">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                {...item}
                onClick={() => handleItemClick(index)}
                isOpen={openIndex === index}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};



export default App;
