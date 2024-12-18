'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { anton, inter, lato } from '@/app/fonts'

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
  color, // color from the backend
  client,
  category,
  index,
  logo,
  directedBy,
  video,
  isInView,
  isAnyOpen
}) => {

  // Use the provided color if present, otherwise use the current logic
  const backgroundColor = color || colors[index % colors.length];

  return (
    <motion.div
      animate={isInView && { rotate: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ y: !isOpen ? -15 : 0 }}
      whileTap={{ scale: 0.95 }}
      className="accordion-item h-[83vh] md:h-[83vh]"
      style={{ backgroundColor }}
    >
      <motion.div
        initial={false}
        transition={{ duration: 0.6 }}
        className="accordion-header"
        onClick={onClick}
      >
        <div className="-rotate-90 md:rotate-0">
          <div className="accordion-header-logo">
            <img src={yandexCloudImage(logo.url)} alt="Client logo" className="filter brightness-0" />
          </div>
          <motion.div className={`${inter.className} text-[14px] accordion-year`}>{year}</motion.div>
        </div>
        <motion.div className={`${inter.className} transition-opacity duration-500 uppercase accordion-title fixed md:static bottom-10`}>
          {(!isAnyOpen && index === 0) ? "SELECTED WORKS" : title}
        </motion.div>
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
            <div className="relative w-full h-full">
              <video
                src={yandexCloudImage(video.url)}
                autoPlay
                loop
                preload="auto"
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};



const App = ({accordionData}) => {
  const [openIndex, setOpenIndex] = useState(null);
   const isAnyOpen = openIndex !== null;

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
                isAnyOpen={isAnyOpen}
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
