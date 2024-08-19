import React from 'react';
import { anton, lato, tthoves } from '@/app/fonts';
import Link from 'next/link';

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

      <div className={`${lato.className} absolute md:left-8 left-4 bottom-[15vh] md:bottom-4 gap-2 uppercase w-[170px] font-medium text-left text-white text-[14px] z-[19] flex flex-col`}>
        <Link className="hover:underline" href="/projects/Ads">Ads</Link>
        <Link className="hover:underline" href="/projects/Communication">Communication</Link>
        <Link className="hover:underline" href="/projects/Production">Production</Link>
        <div className="text-[#F03021] cursor-pointer underline">Watch showreel</div>
      </div>







       {/* New Text Block */}
      <div className={`${lato.className} z-10 absolute right-4 md:right-[10vw] top-[40vh] md:top-[50vh] w-[170px] text-right text-white text-sm`}>
        <p> {home.text} </p>
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
