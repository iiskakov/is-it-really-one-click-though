import React from 'react';
import { anton, lato, inter } from '@/app/fonts';
import Link from 'next/link';

import Logo from '@/components/Intro/Logo'
import Nav from '@/components/Intro/Nav'
import Video from '@/components/Intro/Video'
import VHSMobile from '@/components/VHSMobile';
import VHS from '@/components/VHS';
import ShowreelModal from '@/components/ShowreelModal';

import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { yandexCloudImage } from '@/utils/functions';







const payload = await getPayloadHMR({ config });


const Intro = async ({home}) => {

  const vhs = await payload.find({
    collection: 'vhs',
  });

  return (
    <div className="relative h-screen flex overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-[7]"/>
      <Logo/>
      <Nav/>
      <Video  videoUrl={yandexCloudImage(home.video.url)}/>

       <div className={`${inter.className} hidden md:flex absolute md:left-8 left-4 bottom-[15vh] md:bottom-4 gap-2 uppercase w-[170px] font-medium text-left text-white text-[14px] z-[21]  flex-col`}>



         <ShowreelModal url={yandexCloudImage(home.showreel.url)} />
     </div>







       {/* New Text Block */}
      {/* <div className={`${inter.className} z-10 absolute right-4 md:right-[10vw] top-[30vh] md:top-[50vh] w-[170px] text-right text-white text-sm`}> */}
      {/*   {/\* <p> {home.text} </p> *\/} */}
      {/*   Full-Cycle Production Service in Kazakhstan and Central Asia */}
      {/* </div> */}



      <div className="z-10 absolute bottom-[4vh] md:bottom-4 md:right-0 leading-tight pl-4 tracking-tighter  md:pr-8 md:w-[60vw]">
        <h1 className={`${inter.className} text-white text-[40px] md:text-5xl leading-none md:text-right font-bold`}>
          <div className="md:hidden"> {home.heading} </div>
          <div className="hidden md:block">Full-Cycle Production Service in <br/> Kazakhstan and Central Asia</div>
        </h1>
      </div>
      {/* Временно отлючаем кассеты */}
    {/* <VHSMobile accordionData={vhs.docs}/> */}
    {/* <VHS accordionData={vhs.docs}/> */}



    </div>
  );
}

export default Intro;
