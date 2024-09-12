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


const accordionData2 = [
  {
    title: "HYUNDAI X ASTANA MOTORS",
    year: 2021,
    color: "#7861fe",
    directedBy: "AISULTAN",
    client: "HYUNDAI",
    category: "COMMERCIAL",
  },
  {
    title: "ALTERNATIVA FILM PROJECT",
    year: 2023,
    color: "#63c278",
    directedBy: "AISULTAN",
    client: "OPPO",
    category: "FILM",
  },
  {
    title: "DIMASH X OPPO",
    year: 2023,
    color: "#ffde6d",
    directedBy: "AISULTAN",
    client: "OPPO",
    category: "COMMERCIAL",
  },
  {
    title: "REDBULL SOUNDCLASH",
    year: 2023,
    color: "#fe2c52",
    directedBy: "AISULTAN",
    client: "REDBULL",
    category: "COMMERCIAL",
  },
  {
    title: "AITPA SHOW",
    year: 2022,
    color: "#fd7a00",
    directedBy: "AISULTAN",
    client: "HYUNDAI",
    category: "SHOW",
  },
  {
    title: "VISIT ALMATY",
    year: 2023,
    color: "#fda4b5",
    directedBy: "AISULTAN",
    client: "OPPO",
    category: "CAMPAIGN",
  },
  {
    title: "BCC BUSINESS",
    year: 2023,
    color: "#9046ab",
    directedBy: "AISULTAN",
    client: "OPPO",
    category: "COMMERCIAL",
  },
];


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
  video,
  isInView,
  isAnyOpen
}) => {
  // Use the provided color if available, otherwise fallback to default color logic
  const backgroundColor = color || colors[index % colors.length];

  return (
    <motion.div
      whileHover={{ y: !isOpen ? -15 : 0 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="mob-accordion-item w-full"
      style={{ backgroundColor }}
    >
      <motion.div
        initial={false}
        transition={{ duration: 0.2 }}
        className="mob-accordion-header flex flex-row w-full h-[64px] items-center justify-between px-4"
        onClick={onClick}
      >
        <motion.div className={`${tthoves.className} text-[20px] font-bold`}>
                    {(!isAnyOpen && index === 0) ? "SELECTED WORKS" : title}

        </motion.div>

        <motion.div className="mob-accordion-year">{year}</motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            transition={{ duration: 0.2 }}
            initial={{ height: 0 }}
            animate={{ height: "240px" }}
            exit={{ height: "0px" }}
            className="mob-accordion-content"
          >
            <video
              playsInline
              src={yandexCloudImage(video.url)}
              autoPlay
              loop
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
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
              style={{
        backgroundColor: openIndex !== null ? 'black' : 'transparent',
        zIndex: openIndex !== null? '21' : '20',
        transition: 'background-color 0.5s ease-in-out', // Smooth transition
      }}
                className="h-screen"
        >
      <motion.div
        className="w-screen md:hidden z-[100] "
          initial={{ y: '85vh' }} // Start with most of the content off-screen
          animate={openIndex !== null ? { y: '10vh' } : { y: '85vh' }} // Slide in if an item is open, slide out if no items are open
          transition={{ duration: 0.5 }}
        >

      <div className="mob-accordion-container gap-4 w-auto px-4">
        {accordionData.slice(0, 5).map((item, index) => (
          <AccordionItem
            key={index}
            {...item}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
            isAnyOpen={isAnyOpen}
            index={index}
          />
        ))}
      </div>
      </motion.div>
      </div>

  );
};

export default App;
