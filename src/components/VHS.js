'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { anton } from '@/app/fonts'

import logo from "@/public/logo.svg";
import hq from "@/public/hq.svg";
import oppo from "@/public/oppo_logo.svg";
import hyundai from "@/public/hyundai-logo.svg";
import redbull from "@/public/redbull-logo.svg";
import Image from 'next/image'

const accordionData = [
  {
    title: "HYUNDAI X \u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0 ASTANA MOTORS",
    year: 2021,
    color: "#7861fe",
    directedBy: "AISULTAN",
    client: "HYUNDAI",
    category: "COMMERCIAL",
  },
  {
    title:
      "ALTERNATIVA \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 FILM PROJECT",
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
    color: "#9147AE",
    directedBy: "AISULTAN",
    client: "OPPO",
    category: "CAMPAIGN",
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
  isInView,
}) => {

  return (
    <motion.div
      animate={isInView && {rotate: 0}}
      transition={{ duration: 0.2, delay: 1 + (index * 0.1) }}
      whileHover={{ y: !isOpen ? -15 : 0 }}
      whileTap={{ scale: 0.95 }}
      className="accordion-item  h-[70vh] md:h-[70vh] "
      style={{ backgroundColor: color }}
    >
      <motion.div
        initial={false}
        transition={{ duration: 0.6 }}
        className="accordion-header "
        onClick={onClick}
      >
        <div className="-rotate-90 md:rotate-0">
          <div className="accordion-header-logo">
            {client === 'OPPO' ? (
              <Image src={oppo} alt="oppo logo" className="accordion-oppo" />
            ) : client === 'HYUNDAI' ? (
              <Image src={hyundai} alt="hyundai logo" className="accordion-hyundai" />
            ) : client === 'REDBULL' ? (
              <Image src={redbull} alt="redbull logo" className="accordion-redbull" />
            ) : null}
          </div>
          <motion.div className="accordion-year">{year}</motion.div>
        </div>
        <motion.div className={`${anton.className} accordion-title fixed md:static bottom-10`}>{title}</motion.div>
        <div className="accordion-footer">
          <Image src={logo} alt="2d Production logo" className="scale-150 md:scale-100 accordion-logo opacity-20 md:opacity-100" />
          <Image src={hq} alt="HQ logo" className="accordion-hq hidden md:block" />
        </div>
      </motion.div>
      <AnimatePresence>
        
        {isOpen && (
          <motion.div
            transition={{ duration: 0.4 }}
            initial={{ width: '0px' }}
            animate={{ width: '300px' }}
            exit={{ width: '0px' }}
            className="accordion-content"
          >
            <video
              src="https://samplelib.com/lib/preview/webm/sample-5s.webm"
              autoPlay
              loop
              preload="auto"
              muted
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="h-screen w-screen z-20 relative pointer-events-none"
      style={{
        backgroundColor: openIndex !== null ? 'black' : 'transparent',
        transition: 'background-color 0.5s ease-in-out', // Smooth transition
      }}
    >
      <motion.div id="works" className=" rotate-90 md:rotate-0 absolute bottom-2 left-0 right-0">
        <motion.div
          initial={{ x: '70vw' }} // Start with most of the content off-screen
          animate={openIndex !== null ? { x: 0 } : { x: '70vw' }} // Slide in if an item is open, slide out if no items are open
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
