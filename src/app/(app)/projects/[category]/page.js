import Image from 'next/image';
import { anton, lato } from '@/app/fonts';
import Link from 'next/link';
import Nav from '@/components/Intro/Nav';
import Logo from '@/components/Intro/Logo';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { Suspense } from "react"


const payload = await getPayloadHMR({ config });

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


const ProjectCard = ({ project, category }) => {
  return (
    <Link href={`/projects/${category}/${project.id}`} className="relative overflow-hidden group cursor-pointer">
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

const ProjectCardSkeleton = () => {
  return (
    <div className="relative overflow-hidden bg-gray-200 animate-pulse " style={{ opacity: Math.random() * 0.9 + 0.05 }}>
      <div className="w-full h-[380px] bg-gray-300"></div>
      <div className="absolute inset-0 flex flex-col justify-end md:justify-center bg-black bg-opacity-50">
        {/* <div className="w-3/4 h-8 md:h-10 bg-gray-400 mb-4 mx-4"></div> */}
        <div className="w-1/2 h-4 bg-gray-500 mb-2 mx-4 md:hidden"></div>
      </div>
    </div>
  );
};

const ProjectsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      {[...Array(4)].map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  );
};

const Filter = ({ categories, currentCategory }) => {
  return (
    <div className={`flex space-x-2 md:mb-16 mb-10 ${lato.className} overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
      {categories.map((category) => (
        <Link key={category} href={`/projects/${category}`}>
          <div
            className={`uppercase px-4 py-2 ${
              currentCategory === category ? ' text-[#F03021] underline' : 'text-white'}`}
          >
            {category}
          </div>
        </Link>
      ))}
    </div>
  );
};

const Projects = async ({ params }) => {
  const { category } = params;
  const currentCategory = category || 'all';

  const projects = await payload.find({
    collection: 'projects',
  });
  console.log(projects);

  const filteredProjects = currentCategory === "all" ? allProjects : allProjects.filter(project => project.category === currentCategory);

  return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} category={category}/>
          ))}
        </div>
  );
};


const ProjectsPage = ({ params }) => {
  const { category } = params;
  const currentCategory = category || 'all';
  return(
      <>
      <div className="h-[120px] mb-20">
        <Logo />
        <Nav />
      </div>
      <h1 className={`text-[96px] font-bold  text-white px-8 ${lato.className} uppercase`}>
        Our works
      </h1>
      <div className="md:px-8 p-4">
        <Filter categories={categories} currentCategory={currentCategory} />
        {/* TODO: Skeletons for projects */}
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects params={params}/>
        </Suspense>
      </div>
    </>

  )
}

export default ProjectsPage;
