'use client'

import React from "react";
import { useRef, useEffect, useState } from "react";
import { inter } from '@/app/fonts';
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
      <div className={`${inter.className} mt-6 w-[360px] flex justify-end flex-col`}>
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
  const isMobile = useClientMediaQuery("(max-width: 800px)");

  if (isMobile) {
    return (
      <div className="w-full py-16 bg-black">
        <div className="flex flex-col space-y-16 px-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full pt-1">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-32 bg-black">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-32">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
