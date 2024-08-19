import React from 'react';
import { lato, tthoves } from '@/app/fonts';
import Nav from '@/components/Intro/Nav';
import Logo from '@/components/Intro/Logo';
import TeamSection from '@/components/TeamSection';



const AboutPage = () => {

  return(
      <div className="h-screen overflow-x-hidden w-screen">
      <div className="h-[120px] overflow-hidden w-[100vw]">

        <Logo />
        <Nav />
        </div>
                <h1 className={`md:text-[96px] text-[48px] font-semibold  text-white mt-14 px-8 ${tthoves.className} uppercase`}>
                  About us
        </h1>
    <div className={`${lato.className}`}>
        <p className="text-[16px] px-8 mb-[20px] opacity-50">
          {/* 2D */}
        </p>
      <p className="px-8 text-[24px] md:text-[40px] leading-tight md:max-w-[65vw]">
        We operate in two dimensions.  First: full-scale video production—creating videos, podcasts, documentaries, and more. Second: events.
        </p>
    </div>

        <TeamSection/>
        </div>

  )
}

export default AboutPage;
