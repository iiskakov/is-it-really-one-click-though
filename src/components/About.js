'use client'

import React from "react";
import { motion } from "framer-motion";
import { anton } from '@/app/fonts';


const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Adjust this value for the desired delay between children
    },
  },
};

const textVariants = {
  hidden: {  y: '100%' },
  visible: {  y: 0, transition: { duration: 0.5 } },
};

const MobileText = () => {
    return(
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textContainerVariants}
      style={{ overflow: "hidden" }}
      className={`${anton.className} md:hidden text-[56px]  uppercase text-justify`}
    >
      <div  style={{ overflow: "hidden", height: "1.2em", marginBottom: '0.1em' }}>
        <motion.div variants={textVariants}>
           we are <span style={{ color: '#FFC634' }}>a team</span> of
        </motion.div>
      </div>
      <div  style={{ overflow: "hidden", height: "1.2em", marginBottom: '0.1em' }}>
        <motion.div variants={textVariants}>
            enthusiasts who
        </motion.div>
      </div>
      <div style={{ overflow: "hidden", height: "1.2em", marginBottom: '0.1em' }}>
        <motion.div variants={textVariants}>
          have <span style={{ color: '#FD511C' }}>one big idea </span>
        </motion.div>
      </div>
      <div style={{ overflow: "hidden", height: "1.2em", marginBottom: '0.1em' }}>
        <motion.div variants={textVariants}>
        —  to create high
        </motion.div>
      </div>
      <div style={{ overflow: "hidden", height: "1.2em", marginBottom: '0.1em' }}>
        <motion.div variants={textVariants}>
         <span style={{ color: '#F1015D' }}>impact projects</span>
        </motion.div>
      </div>
    </motion.div>

    )
}


const DesktopText = () => {
    return(
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textContainerVariants}
      style={{ overflow: "hidden" }}
      className={`${anton.className} hidden md:block md:text-8xl uppercase text-center`}
    >
      <div  style={{ overflow: "hidden", height: "1em", marginBottom: '0.3em' }}>
        <motion.div variants={textVariants}>
           we are <span style={{ color: '#FFC634' }}>a team</span> of enthusiasts
        </motion.div>
      </div>
      <div style={{ overflow: "hidden", height: "1em", marginBottom: '0.3em' }}>
        <motion.div variants={textVariants}>
          who have <span style={{ color: '#FD511C' }}>one big idea —</span>
        </motion.div>
      </div>
      <div style={{ overflow: "hidden", height: "1em" }}>
        <motion.div variants={textVariants}>
          to create <span style={{ color: '#F1015D' }}>high impact</span> projects
        </motion.div>
      </div>
    </motion.div>

    )
}

const StaggeredText = () => {
  return (
       <div className="flex justify-center items-center align-center h-screen">
         <DesktopText/>
         <MobileText/>
      </div>
  );
};

export default StaggeredText;
