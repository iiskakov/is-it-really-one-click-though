'use client'

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';

import Image from 'next/image';
import { anton } from '@/app/fonts';
import { marker } from '@/app/fonts';


const PolaroidCard2 = ({ imageSrc, videoSrc, name, title, dragConstraints, initial }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const x = useMotionValue(initial.x || 0);
  const y = useMotionValue(initial.y || 0);
  const [position, setPosition] = useState({ x: initial.x || 0, y: initial.y || 0 });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [isHovered]);

  useEffect(() => {
    const unsubscribeX = x.onChange((latestX) => setPosition((pos) => ({ ...pos, x: latestX })));
    const unsubscribeY = y.onChange((latestY) => setPosition((pos) => ({ ...pos, y: latestY })));

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [x, y]);

  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      whileDrag={{ scale: 1.2 }}
      whileHover={{ rotate: initial.rotate + 3 }}
      initial={initial}
      dragMomentum={false}
      style={{
        width: "285px",
        height: "350px",
        backgroundColor: "white",
        padding: "15px",
        paddingTop: "20px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 20,
        x,
        y,
      }}
      className="draggable cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        width: "100%",
        height: "0",
        paddingBottom: "100%",
        position: "relative",
        marginBottom: "10px",
      }}>
        <video
          ref={videoRef}
          src={videoSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            display: isHovered ? 'block' : 'none'
          }}
          autoPlay
          loop
          muted
        />
        <Image
          src={imageSrc}
          width={264}
          height={264}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            pointerEvents: "none",
            display: isHovered ? 'none' : 'block'
          }}
          alt={name}
        />
      </div>
      <h1
        className={`${marker.className}`}
        style={{
          fontSize: "18px",
          textAlign: "center",
          marginTop: "5px",
          background: `url(${"https://storage.yandexcloud.kz/qarabucket/marker_texture.jpg"})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent"
        }}>{name} /<br /> {title}</h1>
      <p style={{ fontSize: "12px", textAlign: "center" }}>Position: ({Math.round(position.x)}, {Math.round(position.y)})</p>
    </motion.div>
  );
};



const PolaroidCard = ({ imageSrc, videoSrc, name, title, dragConstraints, initial }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [isHovered]);

  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      whileDrag={{ scale: 1.2 }}
      whileHover={{ rotate: initial.rotate + 3 }}
      initial={initial}
      dragMomentum={false}
      style={{
        width: "285px",
        height: "350px",
        backgroundColor: "white",
        padding: "15px",
        paddingTop: "20px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 20,
      }}
      className="draggable cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        width: "100%",
        height: "0",
        paddingBottom: "100%",
        position: "relative",
        marginBottom: "10px",
      }}>
        <video
          ref={videoRef}
          src={videoSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            display: isHovered ? 'block' : 'none'
          }}
          autoPlay
          loop
          muted
        />
        <Image
          width={264}
          height={264}
          src={imageSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            pointerEvents: "none",
            display: isHovered ? 'none' : 'block'
          }}
          alt={name}
        />
      </div>
      <h1
        className={`${marker.className}`}
        style={{
          fontSize: "18px",
          textAlign: "center",
          marginTop: "5px",
          background: `url(${"https://storage.yandexcloud.kz/qarabucket/marker_texture.jpg"})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent"
        }}>{name} /<br /> {title}</h1>
    </motion.div>
  );
};

const polaroidData = {
  polaroidCards: [
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/yerkebulan.png",
      name: "Yerkebulan",
      title: "General Producer",
      initial: { x: -175, y: -29, rotate: -2 },
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/sardor.png",
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
      name: "Sardor",
      title: "Director of Photography",
      initial: { x: 506, y: -357, rotate: 5 }
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/zhandos.png",
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
      name: "Zhandos",
      title: "Director",
      initial: { x: 282, y: -833, rotate: 2 }
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/milana.png",
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
      name: "Milana",
      title: "Chief Marketing Officer",
      initial: { x: -551, y: -1137, rotate: -5 }
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/aisultan.png",
      videoSrc: 'https://storage.yandexcloud.kz/qarabucket/team/ais.webm',
      name: "Aisultan",
      title: "Director",
      initial: { x: 335, y: -1068, rotate: -9 }
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/kamilla.png",
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
      name: "Kamilla",
      title: "Project Manager",
      initial: { x: -413, y: -1427, rotate: 14 }
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/ratmir.png",
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
      name: "Ratmir",
      title: "Commercial Director",
      initial: { x: -182, y: -1717, rotate: 4 }
    }
  ]
};



const Polaroid = () => {

  return (
      <div className="w-full h-screen relative flex flex-col items-center justify-start pt-24">
        <h1 className={`drop-shadow-sm md:drop-shadow-md select-none pointer-events-none text-[56px] md:text-[144px] z-50 mb-8 uppercase ${anton.className}`} >Team Behind</h1>
    {polaroidData.polaroidCards.map((card, index) => (
      <PolaroidCard
        key={index}
        imageSrc={card.imageSrc}
        videoSrc={card.videoSrc}
        name={card.name}
        title={card.title}
        initial={card.initial}
      />
    ))}
</div>

  );
};

export default Polaroid;
