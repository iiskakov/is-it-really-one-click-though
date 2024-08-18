'use client'
import { lato } from '@/app/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Nav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClasses = (path) => {
    return `${lato.className} hover:border-b-[1px] hover:border-white ${pathname === path ? 'text-[#F03021] border-b-[1px] border-[#F03021]' : ''}`;
  };

  return (
    <>
      {/* mobile */}
      <div className={`${lato.className} font-medium md:hidden absolute right-5 z-30 text-[16px] uppercase mt-4 gap-8 flex h-[46px] justify-center align-center items-center`}>
        <Link className={`${getLinkClasses('/contact')} text-[14px]`} href="/contact">Contact us</Link>
        <div onClick={toggleMenu} className="cursor-pointer">
      {!isMenuOpen && (<img src="/menu.svg" alt="Menu" className="h-[24px] w-auto "  />)}
        </div>
      </div>

      {isMenuOpen && (
        <div className={`${lato.className} fixed inset-0 z-30 bg-black uppercase bg-opacity-100 flex flex-col items-center justify-center text-white text-[16px] font-medium`}>
          <div className="absolute top-5 right-5 cursor-pointer" onClick={toggleMenu}>
            <img src="/close.svg" alt="X" className="h-[32px] w-auto"/>
          </div>
          <div className="h-[70px] border-b-[1px] border-white/20 w-[90vw] items-center flex justify-center">
            <Link className={`${getLinkClasses('/')} mx-4 `} href="/" onClick={toggleMenu}>Home</Link>
          </div>
          <div className="h-[70px] border-b-[1px] border-white/20 w-[90vw] items-center flex justify-center">
            <Link className={`${getLinkClasses('/projects/all')} mj-4`} href="/projects/all" prefetch={true} onClick={toggleMenu}>Works</Link>
          </div>
          <div className="h-[70px] border-b-[1px] border-white/20 w-[90vw] items-center flex justify-center">
            <Link className={`${getLinkClasses('/about')} mx-4`} href="/about" onClick={toggleMenu}>About</Link>
          </div>
          <div className="h-[70px] border-b-[1px] border-white/20 w-[90vw] items-center flex justify-center">
            <Link className={getLinkClasses('/contact')} href="/contact" onClick={toggleMenu}>Contact</Link>
          </div>
          <div className="absolute flex gap-4 flex-col bottom-20 text-center text-[14px] text-white opacity-40">
            <p>+7 705 495 93 40</p>
            <p>SALES@2D.PRO</p>
            <p>@DVA.D.PROD</p>
          </div>
        </div>
      )}

      {/* desktop */}
      <div className={`${lato.className} hidden md:flex font-medium gap-14 absolute right-8 z-[22] text-[15px] uppercase mt-8`}>
        <Link className={getLinkClasses('/')} href="/">Home</Link>
        <Link className={getLinkClasses('/projects/all')} href="/projects/all" prefetch={true}>Works</Link>
        <Link  className={getLinkClasses('/about')} href="/about">About</Link >
        <Link  className={getLinkClasses('/contact')} href="/contact">Contact us</Link >
      </div>
    </>
  );
};

export default Nav;
