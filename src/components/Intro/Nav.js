'use client'
import { lato } from '@/app/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  const getLinkClasses = (path) => {
    return `${lato.className} hover:border-b-[1px] hover:border-white ${pathname === path ? 'text-[#F03021] border-b-[1px] border-[#F03021]' : ''}`;
  };

  return (
    <>
      {/* mobile */}
      <div className={`${lato.className} font-medium md:hidden absolute right-5 z-20 text-[16px] uppercase mt-4 gap-8 flex h-[46px] justify-center align-center items-center`}>
        <a className={`${getLinkClasses('#contact')} text-[14px]`} href="#contact">Contact us</a>
        <img src="/menu.svg" alt="Menu" className="h-[24px] w-auto" />
      </div>

      {/* desktop */}
      <div className={`${lato.className} hidden md:flex font-medium gap-14 absolute right-8 z-[22] text-[15px] uppercase mt-8`}>
        <Link className={getLinkClasses('/')} href="/">Home</Link>
        <Link className={getLinkClasses('/projects/all')} href="/projects/all" prefetch={true}>Works</Link>
        <a className={getLinkClasses('/about')} href="/about">About</a>
        <a className={getLinkClasses('/contact')} href="/contact">Contact us</a>
      </div>
    </>
  );
};

export default Nav;
