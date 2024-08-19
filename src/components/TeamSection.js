'use client'

import React from "react";
import { useRef, useEffect, useState } from "react";
import { lato } from '@/app/fonts';
import { motion } from "framer-motion";


const teamMembers2 = [
  {
    name: 'Yerkebulan',
    title: 'General Producer',
    description: 'As the General Producer, he orchestrates the flibber-flabber of our creative chaos, ensuring every project sizzles with snazzy splendor. He leads our team through the marshmallow meadows of imagination.',
    image: 'https://via.placeholder.com/300x400.png?text=Yerkebulan',
  },
  {
    name: 'Sardor',
    title: 'Director of Photography',
    description: 'His eye for the whimsical transforms every scene into a dazzling daydream. His talent for visual storytelling fills each frame with snazzy splendor and fizzy fun, bringing our imaginative stories to life.',
    image: 'https://via.placeholder.com/300x400.png?text=Sardor',
  },
  {
    name: 'Aizada',
    title: 'Chief Marketing Officer',
    description: 'As the Chief Marketing Officer, she brings a fizz of creativity and a splash of ingenuity to our promotion. Her expertise in storytelling and audience engagement ensures that our projects reach and resonate with a wide audience.',
    image: 'https://via.placeholder.com/300x400.png?text=Aizada',
  },
  {
    name: 'Daniyar',
    title: 'Creative Director',
    description: 'His creative direction is the backbone of our projects. With an eye for detail and a passion for innovation, Daniyar ensures every project is not only a success but also a work of art.',
    image: 'https://via.placeholder.com/300x400.png?text=Daniyar',
  },
  {
    name: 'Alina',
    title: 'Head of Design',
    description: 'Alina’s design leadership crafts the visual language that brings our concepts to life. She blends aesthetics with functionality to create designs that are as effective as they are beautiful.',
    image: 'https://via.placeholder.com/300x400.png?text=Alina',
  },
];


export function useClientMediaQuery(query) {
  const [matches, setMatches] = useState(null)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    const handleMatchChange = (e) => {
      setMatches(e.matches)
    }

    mediaQueryList.addEventListener('change', handleMatchChange)
    setMatches(mediaQueryList.matches)

    return () => {
      mediaQueryList.removeEventListener('change', handleMatchChange)
    }
  }, [query])

  return matches
}


const TeamMemberCard = ({ member }) => {

  return (
    <div className="flex-shrink-0 flex gap-8 flex-row ">
      <div className="relative h-auto overflow-hidden shadow-lg">
        <img
          src={member.image.url}
          alt={member.name}
          className="w-[400px] h-auto object-cover"
        />
      </div>
    <div className={`${lato.className} mt-6 w-[360px] flex justify-end flex-col`}>
        <p className="mt-2 mb-8 text-[16px] text-gray-300 leading-relaxed">{member.description}</p>
        <h3 className="text-[20px] font-bold text-white">{member.name}</h3>
        <p className="text-[16px] text-white opacity-50 mt-1">{member.title}</p>
      </div>
    </div>
  );
};

// const TeamSection = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   const firstRow = teamMembers.filter((_, index) => index % 2 === 0);
//   const secondRow = teamMembers.filter((_, index) => index % 2 !== 0);
//   const combinedRows = [...firstRow, ...secondRow]; // For the mobile version

//   useEffect(() => {
//     const updateScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768); // Assuming mobile view for screens <= 768px
//     };

//     updateScreenSize();
//     window.addEventListener("resize", updateScreenSize);

//     return () => {
//       window.removeEventListener("resize", updateScreenSize);
//     };
//   }, []);

//   if (isMobile) {
//     return (
//       <div className="w-full py-16 bg-black">
//         <div className="flex flex-col space-y-16 px-4">
//           {combinedRows.map((member, index) => (
//             <div key={index} className="w-full pt-1">
//               <TeamMemberCard member={member} />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // Desktop version
//   return (
//     <div className="w-full py-32 bg-black overflow-hidden">
//       <div className="flex flex-col space-y-32 px-16">
//         <motion.div
//           className="flex space-x-[400px] cursor-grab"
//           drag="x"
//           dragConstraints={{ left: -500, right: 100 }}
//           dragElastic={0.2}
//           dragTransition={{
//             power: 0.2,
//             timeConstant: 200,
//             modifyTarget: (target) => Math.round(target / 100) * 100,
//           }}
//           whileTap={{ cursor: "grabbing" }}
//         >
//           {firstRow.map((member, index) => (
//             <TeamMemberCard key={index} member={member} />
//           ))}
//         </motion.div>
//         <motion.div
//           className="flex space-x-[400px] ml-[350px] cursor-grab"
//           drag="x"
//           dragConstraints={{ left: -500, right: 100 }}
//           dragElastic={0.2}
//           dragTransition={{
//             power: 0.2,
//             timeConstant: 200,
//             modifyTarget: (target) => Math.round(target / 100) * 100,
//           }}
//           whileTap={{ cursor: "grabbing" }}
//         >
//           {secondRow.map((member, index) => (
//             <TeamMemberCard key={index} member={member} />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

const TeamSection = ({teamMembers}) => {
  const containerRef = useRef(null);
  const isMobile = useClientMediaQuery('(max-width: 800px)')
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  const firstRow = teamMembers.filter((_, index) => index % 2 === 0);
  const secondRow = teamMembers.filter((_, index) => index % 2 !== 0);
  const combinedRows = [...firstRow, ...secondRow]




  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const rowContentWidth = containerRef.current.scrollWidth;

        setDragConstraints({
          left: -(rowContentWidth - containerWidth) - 100,
          right: 100,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, [firstRow.length]);

  if (isMobile) {
    return (
      <div className="w-full py-16 bg-black">
        <div className="flex flex-col space-y-16 px-4">
          {combinedRows.map((member, index) => (
            <div key={index} className="w-full pt-1">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-32 bg-black overflow-hidden">
      <div className="flex flex-col space-y-32 px-16" ref={containerRef}>
        <motion.div
          className="flex space-x-[400px] cursor-grab"
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.2}
          dragTransition={{
            power: 0.2,
            timeConstant: 200,
            modifyTarget: (target) => Math.round(target / 100) * 100,
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          {firstRow.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </motion.div>
        <motion.div
          className="flex space-x-[400px] ml-[350px] cursor-grab"
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.2}
          dragTransition={{
            power: 0.2,
            timeConstant: 200,
            modifyTarget: (target) => Math.round(target / 100) * 100,
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          {secondRow.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};



export default TeamSection;
