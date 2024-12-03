import Image from 'next/image';
import { anton, lato, inter } from '@/app/fonts';
import Link from 'next/link';
import Nav from '@/components/Intro/Nav';
import Logo from '@/components/Intro/Logo';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { Suspense } from "react"
import { yandexCloudImage } from '@/utils/functions';
import FooterNew from '@/components/Footer';




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





const ProjectCard = ({ project }) => {
  return (
    <Link href={`/projects/${project.category?.title}/${project.id}`} className="relative overflow-hidden group cursor-pointer flex flex-col">
      <Image
        src={yandexCloudImage(project.url)}
        alt={project.title}
        width={633}
        quality={95}
        height={380}
        className="object-cover w-full h-[30vh] md:h-[42vh] transform transition-transform duration-200 group-hover:scale-105 aspect-video"
      />
      <div className="bg-black bg-opacity-50 w-full flex flex-col items-start justify-center py-4 md:mt-4 md:mb-16">
        <h2 className={`text-xl leading-none md:text-[40px] font-bold text-white text-start ${inter.className}`}>
          {project.name}
        </h2>
        <p className={`text-sm text-white opacity-50 text-start mb-2 md:mt-8 md:text-[16px] ${inter.className}`}>
          {project.category?.title}
        </p>
      </div>
    </Link>
  );
};



// const ProjectCard = ({project}) => {
//   return (
//     <Link href={`/projects/${project.category?.title}/${project.id}`} className="relative overflow-hidden group cursor-pointer">
//       <Image
//         src={yandexCloudImage(project.url)}
//         alt={project.title}
//         width={633}
//         height={380}
//         className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110 aspect-video"
//       />
//       <div className="absolute inset-0 flex flex-col md:items-center items-start justify-end md:justify-center bg-black bg-opacity-50">
//         <h2 className={`md:text-4xl text-3xl font-bold text-white text-start md:text-center px-4 ${anton.className}`}>{project.name}</h2>
//     <p className={`text-md md:hidden text-[#F03021] text-start mb-2 px-4 ${inter.className} uppercase`}> {project.name}</p>
//       </div>
//     </Link>
//   );
// };

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


const Filter = async ({ currentCategory }) => {
  const payload = await getPayloadHMR({ config });

  const categories = await payload.find({
    collection: 'categories',
  });

  // Reorder categories to make "Commercials" (id 14) the first item
  const reorderedCategories = categories?.docs?.sort((a, b) => {
    if (a.id === 14) return -1; // Move "Commercials" to the start
    if (b.id === 14) return 1;
    return 0; // Keep the relative order of other items
  });

  return (
    <div className={`flex gap-2 md:mb-16 mb-10 ${inter.className} overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
      {reorderedCategories?.map((category) => (
        <Link scroll={false} key={category.title} href={`/projects/${encodeURIComponent(category.title)}`}>
          <div className={`first:pl-0 px-4 py-2 ${currentCategory === category ? 'text-[#F03021] underline' : 'text-white'}`}>
            {category.title}
          </div>
        </Link>
      ))}
    </div>
  );
};


// const Filter = async ({ currentCategory }) => {
//   const payload = await getPayloadHMR({ config });

//   const categories = await payload.find({
//     collection: 'categories',
//   });

//   return (
//     <div className={`flex gap-2 md:mb-16 mb-10 ${inter.className} overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
//       {categories?.docs?.map((category) => (
//         <Link scroll={false} key={category.title} href={`/projects/${encodeURIComponent(category.title)}`}>
//   <div className={`first:pl-0 px-4 py-2 ${currentCategory === category ? 'text-[#F03021] underline' : 'text-white'}`}>
//     {category.title}
//   </div>
// </Link>

//       ))}
//     </div>
//   );
// };

const Projects = async ({ params }) => {
  const payload = await getPayloadHMR({ config });
  const category = params.category ? decodeURIComponent(params.category) : 'all';

  const query = category === "all" ? {} : {
    where: {
      'category.title': { equals: category },
    }
  };

  const projects = await payload.find({
    collection: 'projects',
    ...query,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      {projects?.docs?.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};


// const Projects = async ({ params }) => {
//   const payload = await getPayloadHMR({ config });

//   const category = params.category ? decodeURIComponent(params.category) : 'all';

//   const query = category === "all" ? {} : {
//     where: {
//       'category.title': { equals: category },
//     }
//   };

//   const projects = await payload.find({
//     collection: 'projects',
//     ...query,
//   });

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
//       {projects?.docs?.map(project => (
//         <ProjectCard key={project.id} project={project} />
//       ))}
//     </div>
//   );
// };



const ProjectsPage = async ({ params }) => {
  const payload = await getPayloadHMR({ config });
  const works = await payload.findGlobal({
    slug: 'works', // required
  })

  const { category } = params;
  const currentCategory = category || 'all';
  return(
      <>
      <div className="h-[120px] mb-14 w-full">
        <Logo />
        <Nav />
      </div>
        <h1 className={`whitespace-nowrap md:text-[96px] text-[48px] font-semibold  text-white md:px-8 px-4 ${inter.className} uppercase`}>
        {works.heading}
      </h1>
      <div className="md:px-8 p-4">
        <Filter  currentCategory={currentCategory} />
        {/* TODO: Skeletons for projects */}
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects params={params}/>
        </Suspense>
      </div>
        <FooterNew/>
    </>

  )
}

// revalidate projects every 5 mins
export const revalidate = 60 * 5;

export default ProjectsPage;
