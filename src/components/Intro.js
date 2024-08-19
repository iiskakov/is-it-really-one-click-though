import React from 'react';
import { anton, lato, tthoves } from '@/app/fonts';

import Logo from '@/components/Intro/Logo'
import Nav from '@/components/Intro/Nav'
import Video from '@/components/Intro/Video'
import VHSMobile from '@/components/VHSMobile';
import VHS from '@/components/VHS';

import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { yandexCloudImage } from '@/utils/functions';







const payload = await getPayloadHMR({ config });


const Intro = async ({data, home}) => {

  const vhs = await payload.find({
    collection: 'vhs',
  });

  return (
    <div className="relative h-screen flex overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-[7]"/>
      <Logo/>
      <Nav/>
      <Video  videoUrl={yandexCloudImage(home.video.url)}/>

       {/* New Text Block */}
      <div className={`${lato.className} z-10 absolute right-[10vw] top-[35vh] md:top-[50vh] w-[170px] text-right text-white text-sm`}>
        <p>
      {home.Text}

        </p>
      </div>


      <div className="z-10 absolute bottom-[40vh] md:bottom-0 md:right-0 leading-tight pl-4 md:pr-[10vw] md:w-[75vw]">
        <h1 className={`${tthoves.className} uppercase text-white text-[54px] md:text-[136px] leading-none md:text-right font-bold`}>
    {home.heading}
        </h1>
      </div>
    <VHSMobile accordionData={vhs.docs}/>
    <VHS accordionData={vhs.docs}/>



    </div>
  );
}

export default Intro;
