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
        <TeamSection/>
        </div>

  )
}

export default AboutPage;
