'use client'

import { useState } from 'react';
import Image from 'next/image';
import { anton, lato } from '@/app/fonts';
import Link from 'next/link';
import Nav from '@/components/Intro/Nav'
import Logo from '@/components/Intro/Logo'


const allProjects = [
  {
    id: 1,
    title: "ALTERNATIVA FILM PROJECT BY INDRIVE",
    category: "production",
    image: "/project1.png"
  },
  {
    id: 2,
    title: "OPPO RENO11 SERIES",
    category: "communication",
    image: "/project2.png"
  },
  {
    id: 3,
    title: "KONTRAK - LIEBE IST EIN DIEB",
    category: "production",
    image: "/project3.png"
  },
  // Add more dummy projects
];

const categories = ["all", "production", "events", "communication"];

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`} className="relative overflow-hidden group cursor-pointer">
      <Image
        src={project.image}
        alt={project.title}
        width={633}
        height={380}
        className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col md:items-center items-start justify-end md:justify-center bg-black bg-opacity-50">
        <h2 className={`md:text-4xl text-3xl font-bold text-white text-start md:text-center px-4 ${anton.className}`}>{project.title}</h2>
    <p className={`text-md md:hidden text-[#F03021] text-start mb-2 px-4 ${lato.className} uppercase`}> {project.category}</p>
      </div>
    </Link>
  );
};

const Filter = ({ categories, currentCategory, setCategory }) => {
  return (
    <div className={`flex space-x-2 md:mb-4 mb-10 ${lato.className} overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setCategory(category)}
          className={`uppercase px-4 py-2 ${
            currentCategory === category ? 'bg-[#F03021] text-white underline' : 'bg-white bg-opacity-10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};


const Projects = () => {
  const [category, setCategory] = useState("all");

  const filteredProjects = category === "all" ? allProjects : allProjects.filter(project => project.category === category);


  return (
    <>
      <div className="h-[80px]">
    <Logo/>
    <Nav/>
      </div>
    <div className="md:p-16 p-4">
      <Filter categories={categories} currentCategory={category} setCategory={setCategory} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;
