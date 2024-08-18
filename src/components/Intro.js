import React from 'react';
import { anton, lato } from '@/app/fonts';

import Logo from '@/components/Intro/Logo'
import Nav from '@/components/Intro/Nav'
import Video from '@/components/Intro/Video'
import VHS from '@/components/VHS';

import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';






const payload = await getPayloadHMR({ config });


const Intro = async () => {

  const vhs = await payload.find({
    collection: 'vhs',
  });

  console.log(vhs.docs)


  return (
    <div className="relative h-screen flex overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-[7]"/>
      <Logo/>
      <Nav/>
      <Video  videoUrl="https://storage.yandexcloud.kz/qarabucket/output.webm"/>

       {/* New Text Block */}
      <div className={`${lato.className} z-10 absolute right-[10vw] top-[50vh] w-[170px] text-right text-white text-sm`}>
        <p>
          2D is about unconventional ideas, new formats, and projects with meaning.
        </p>
      </div>


      <div className="z-10 absolute bottom-0 right-0 leading-tight pr-[10vw] w-[75vw]">
        <h1 className="text-white text-[46px] md:text-[136px] leading-none text-right font-bold">
          WE CREATE HIGH IMPACT
        </h1>
      </div>
    <VHS accordionData={vhs.docs}/>



    </div>
  );
}

export default Intro;
