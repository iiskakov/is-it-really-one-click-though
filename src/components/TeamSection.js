import React from "react";
import { lato } from '@/app/fonts';


const teamMembers = [
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


const TeamMemberCard = ({ member }) => {
  return (
    <div className="flex-shrink-0 flex gap-8 flex-row ">
      <div className="relative h-auto overflow-hidden shadow-lg">
        <img
          src={member.image}
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

const TeamSection = () => {
  // Assuming the total width of each item (image + text portions) is 760px
  const firstRow = teamMembers.filter((_, index) => index % 2 === 0);
  const secondRow = teamMembers.filter((_, index) => index % 2 !== 0);

  return (
    <div className="w-full py-32 bg-black">
      <div className="flex flex-col space-y-32 px-16">
        <div className="flex space-x-[400px]">
          {firstRow.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
        <div className="flex space-x-[400px] ml-[350px]">
          {secondRow.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default TeamSection;
