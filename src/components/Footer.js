import React from 'react';
import { lato } from '@/app/fonts';


const Footer = () => {
    return (
      <section className="h-screen flex flex-col justify-end">
      <div id="contact" className="flex gap-10 md:flex-row flex-col-reverse justify-between items-center text-white m-8">
        <div className="flex flex-col justify-between md:h-[170px] items-start md:w-[170px] mb-10 md:mb-0">
          <img src="/2d-logo.svg" alt="Logo" className="w-[90vw] mb-8 md:mb-0 h-auto md:h-[80px] md:w-auto" />
          <span className={`${lato.className} text-[14px]`} >2D PRODUCTION <span className="opacity-30">© 2024</span></span>
  </div>
  <div className="flex flex-col items-center">
    <div className="h-[80px] w-[90vw] md:w-[720px] p-8 flex items-center justify-center mb-4 bg-gray-800 rounded-lg">
    <img src="/footer1.svg" alt="Enter your email" className="h-full w-[360px]"/>
  </div>
  <div className="h-[80px] w-[90vw] md:w-[720px] p-8 flex items-center justify-center bg-green-500 rounded-lg">
    <img src="/footer2.svg" alt="Send the message" className="h-full w-[360px]"/>
  </div>
</div>


<div className={`${lato.className} flex flex-wrap  justify-between items-start h-[170px] w-full md:flex-col md:h-[170px] md:w-[170px]`}>
  <div className="w-1/2 md:w-full">
    <p className="opacity-30">INSTAGRAM</p>
    <a href="https://www.instagram.com/DVA.D.PROD" className="mb-2">@DVA.D.PROD</a>
  </div>
  <div className="w-1/2 md:w-full">
    <p className="opacity-30">E-MAIL</p>
    <a href="mailto:SALES@2D.PRO" className="mb-2">SALES@2D.PRO</a>
  </div>
  <div className="w-1/2 md:w-full">
    <p className="opacity-30">PHONE NUMBER</p>
    <span>+7 705 495 93 40</span>
  </div>
</div>

</div>
      </section>
    );
};

export default Footer;
