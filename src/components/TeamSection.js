'use client'

import React from "react";
import { useRef, useEffect, useState } from "react";
import { lato } from '@/app/fonts';
import { motion } from "framer-motion";
import Image from 'next/image';
import { yandexCloudImage } from '@/utils/functions';
import ReactMarkdown from 'react-markdown';



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
        <Image
          src={yandexCloudImage(member.image.url)}
          width={member.image.width}
          height={member.image.height}
          alt={member.name}
          className="w-[400px] h-auto object-cover"
        />
      </div>
      <div className={`${lato.className} mt-6 w-[360px] flex justify-end flex-col`}>
        <ReactMarkdown
          className="mt-2 mb-8 text-[16px] text-gray-300 leading-relaxed"
          components={{
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#F03021] underline">
                {children}
              </a>
            ),
            p: 'p', // Optional: ensure paragraphs are rendered as expected
          }}
        >
          {member.description}
        </ReactMarkdown>
        <h3 className="text-[20px] font-bold text-white">{member.name}</h3>
        <p className="text-[16px] text-white opacity-50 mt-1">{member.title}</p>
      </div>
    </div>
  );
};

const TeamSection = ({ teamMembers }) => {
  const containerRef = useRef(null);
  const isMobile = useClientMediaQuery("(max-width: 800px)");
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  const firstRow = teamMembers.filter((_, index) => index % 2 === 0);
  const secondRow = teamMembers.filter((_, index) => index % 2 !== 0);
  const combinedRows = [...firstRow, ...secondRow];

  // Calculate movement distance based on the number of team members
  const calculateMovementDistance = (row) => {
    const baseDistance = 400; // base distance to be multiplied by number of members
    return row.length * baseDistance;
  };

  const firstRowMovementDistance = calculateMovementDistance(firstRow);
  const secondRowMovementDistance = calculateMovementDistance(secondRow);

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
          animate={{ x: [0, -firstRowMovementDistance, 0] }} // passive animation
          transition={{
            repeat: Infinity, // repeat the animation indefinitely
            repeatType: "mirror", // alternate the direction
            duration: firstRow.length * 10, // dynamically calculate duration
            ease: "easeInOut", // smooth easing function
          }}
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
          animate={{ x: [0, -secondRowMovementDistance, 0] }} // passive animation
          transition={{
            repeat: Infinity, // repeat the animation indefinitely
            repeatType: "mirror", // alternate the direction
            duration: secondRow.length * 10, // dynamically calculate duration
            ease: "easeInOut", // smooth easing function
          }}
        >
          {secondRow.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};


// const TeamSection = ({teamMembers}) => {
//   const containerRef = useRef(null);
//   const isMobile = useClientMediaQuery('(max-width: 800px)')
//   const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

//   const firstRow = teamMembers.filter((_, index) => index % 2 === 0);
//   const secondRow = teamMembers.filter((_, index) => index % 2 !== 0);
//   const combinedRows = [...firstRow, ...secondRow]




//   useEffect(() => {
//     const updateConstraints = () => {
//       if (containerRef.current) {
//         const containerWidth = containerRef.current.offsetWidth;
//         const rowContentWidth = containerRef.current.scrollWidth;

//         setDragConstraints({
//           left: -(rowContentWidth - containerWidth) - 100,
//           right: 100,
//         });
//       }
//     };

//     updateConstraints();
//     window.addEventListener("resize", updateConstraints);

//     return () => {
//       window.removeEventListener("resize", updateConstraints);
//     };
//   }, [firstRow.length]);

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

//   return (
//     <div className="w-full py-32 bg-black overflow-hidden">
//       <div className="flex flex-col space-y-32 px-16" ref={containerRef}>
//         <motion.div
//           className="flex space-x-[400px] cursor-grab"
//           drag="x"
//           dragConstraints={dragConstraints}
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
//           dragConstraints={dragConstraints}
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



export default TeamSection;
