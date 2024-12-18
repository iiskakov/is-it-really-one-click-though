import React from 'react';
import { inter } from '@/app/fonts';
import Link from 'next/link';


export default function FooterNew() {
  return (
    <footer className="bg-black text-white py-8">
      <div className={`${inter.className} mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 mb-[24px]">
            <Link className="hover:underline" href="/">Home</Link>
            <Link className="hover:underline"  href="/projects/all" prefetch={true}>Works</Link>
            <Link className="hover:underline"  href="/about">About</Link >
            <Link className="hover:underline"  href="/contact">Contact us</Link >

          </div>

          {/* Phone Number */}
          <div className="flex flex-col space-y-4 md:self-end">
            <div>
              <p className="font-bold">Phone</p>
              <a href="tel:+77088343020" className="text-gray-400 hover:underline">8 (708) 834 30 20</a>
            </div>
          </div>

          {/* E-mail */}
          <div className="flex flex-col space-y-4 md:self-end">
            <div>
              <p className="font-bold">Email</p>
              <a href="mailto:marketing@2dpro.kz" className="text-gray-400 hover:underline">marketing@2dpro.kz</a>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex flex-col space-y-4 md:self-end">
            <div>
              <p className="font-bold">Instagram</p>
              <a href="https://www.instagram.com/2dprod.kz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">@2dprod.kz</a>
            </div>
          </div>

          {/* Vimeo */}
          <div className="flex flex-col space-y-4 md:self-end">
            <div>
              <p className="font-bold">Vimeo</p>
              <a href="https://vimeo.com/2dprodkz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">2dprodkz</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 lg:text-left">
          <p>2D Production © 2024</p>
        </div>
      </div>
    </footer>
  );
}


const Footer = () => {
    return (
    <section className="h-screen flex flex-col justify-end">
      <div id="contact" className="flex gap-10 md:flex-row flex-col-reverse justify-between items-center text-white m-8">
        <div className="flex flex-col justify-between md:h-[170px] items-start md:w-[170px] mb-10 md:mb-0">
          <img src="/2d-logo.svg" alt="Logo" className="w-[90vw] mb-8 md:mb-0 h-auto md:h-[80px] md:w-auto" />
          <span className={`${inter.className} text-[14px]`} >2D PRODUCTION <span className="opacity-30">© 2024</span></span>
  </div>
  <div className="flex flex-col items-center">
    <div className="h-[80px] w-[90vw] md:w-[720px] p-8 flex items-center justify-center mb-4 bg-gray-800 rounded-lg">
    <img src="/footer1.svg" alt="Enter your email" className="h-full w-[360px]"/>
  </div>
  <div className="h-[80px] w-[90vw] md:w-[720px] p-8 flex items-center justify-center bg-green-500 rounded-lg">
    <img src="/footer2.svg" alt="Send the message" className="h-full w-[360px]"/>
  </div>
</div>


<div className={`${inter.className} flex flex-wrap  justify-between items-start h-[170px] w-full md:flex-col md:h-[170px] md:w-[170px]`}>
  <div className="w-1/2 md:w-full">
    <p className="opacity-30">INSTAGRAM</p>
    <a href="https://www.instagram.com/2dprod.kz" className="mb-2">@2dprod.kz</a>
  </div>
  <div className="w-1/2 md:w-full">
    <p className="opacity-30">E-MAIL</p>
    <a href="mailto:marketing@2dpro.kz" className="mb-2">marketing@2dpro.kz</a>
  </div>
  <div className="w-1/2 md:w-full">
    <p className="opacity-30">PHONE NUMBER</p>
    <span>8 (708) 834 30 20</span>
  </div>
</div>

</div>
      </section>
    );
};

