'use client'
import { inter } from '@/app/fonts';
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
    return `${inter.className} hover:border-b-[1px] hover:border-white ${pathname === path ? 'text-[#F03021] border-b-[1px] border-[#F03021]' : ''}`;
  };

  return (
    <>
      {/* mobile */}
      <div className={`${inter.className} font-medium md:hidden absolute right-5 z-30 text-[16px] uppercase mt-4 gap-8 flex h-[46px] justify-center align-center items-center`}>
        <Link className={`${getLinkClasses('/contact')} text-[14px]`} href="/contact">Contact us</Link>
        <div onClick={toggleMenu} className="cursor-pointer">
      {!isMenuOpen && (<img src="/menu.svg" alt="Menu" className="h-[24px] w-auto "  />)}
        </div>
      </div>

      {isMenuOpen && (
        <div className={`${inter.className} fixed inset-0 z-30 bg-black uppercase bg-opacity-100 flex flex-col items-center justify-center text-white text-[16px] font-medium`}>
          <div className="absolute top-5 right-5 cursor-pointer" onClick={toggleMenu}>
             <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
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
            <p>8 (708) 834 30 20</p>
            <p>marketing@2dpro.kz</p>
        <p><a href="https://www.instagram.com/2dprod.kz" className="mb-2">@2dprod.kz</a></p>
          </div>
        </div>
      )}

      {/* desktop */}
      <div className={`${inter.className} hidden md:flex font-medium gap-14 absolute right-8 z-[22] text-[15px] uppercase mt-8`}>
        <Link className={getLinkClasses('/')} href="/">Home</Link>
        <Link className={getLinkClasses('/projects/all')} href="/projects/all" prefetch={true}>Works</Link>
        <Link  className={getLinkClasses('/about')} href="/about">About</Link >
        <Link  className={getLinkClasses('/contact')} href="/contact">Contact us</Link >
      </div>
    </>
  );
};

export default Nav;
