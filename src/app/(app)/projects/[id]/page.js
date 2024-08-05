import React  from 'react';
import Image from 'next/image';
import { anton, lato } from '@/app/fonts';
import Link from 'next/link';
import VideoPlayer from '@/components/Projects/VideoPlayer'


const allProjects = [
  {
    id: 1,
    title: "ALTERNATIVA FILM PROJECT BY INDRIVE",
    category: "production",
    image: "/project1.png",
    video: "https://vimeo.com/914864510" // Replace with your Vimeo video URL
  },
  {
    id: 2,
    title: "OPPO RENO11 SERIES",
    category: "communication",
    image: "/project2.png",
    video: "https://www.youtube.com/watch?v=co4UH24h8YY"
  },
  {
    id: 3,
    title: "KONTRAK - LIEBE IST EIN DIEB",
    category: "production",
    image: "/project3.png",
    video: "https://vimeo.com/914864510"
  },
];

export default function ProjectPage({ params }) {
  const { id } = params;
  const project = allProjects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className={`p-8 bg-black text-white ${lato.className}`}>
      <Link href="/projects" className="text-lg text-white mb-8 inline-block">
        &lt; BACK
      </Link>
      <div className="h-[70vh] w-autorelative overflow-hidden mb-8">
         <VideoPlayer url={project.video} />
      </div>
      <h1 className={`text-4xl font-bold text-white mb-2 ${anton.className}`}>
        {project.title}
      </h1>
      <h2 className="text-lg text-red-600 mb-4 uppercase">{project.category}</h2>
      <div className="text-sm text-white space-y-1 uppercase">
        <p>DIRECTED BY: ZHANDOS QAHAR</p>
        <p>DOP: YERKEBULAN KUANYSHBAYEV</p>
        <p>1AD: YEVGENIYA MOREVA</p>
        <p>EXECUTIVE PRODUCER: YERKEBULAN KURISHBAYEV</p>
        <p>LINE PRODUCER: KAMILLA AZHIBAYEVA</p>
        <p>PRODUCER ASSISTANT: MADINA TORGAYEVA</p>
        <p>UPM: DMITRIY KASTORSKIY</p>
      </div>
    </div>
  );
}
