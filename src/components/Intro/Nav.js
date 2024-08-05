import { lato } from '@/app/fonts';
import Link from 'next/link'

const Nav = () => {
  return (
    <>
      {/* mobile */}
    <div className={`${lato.className} font-medium md:hidden absolute right-5 z-20 text-[16px] uppercase mt-4 gap-8 flex h-[46px] justify-center align-center items-center`}>
        <a className="hover:border-b-[1px] hover:border-white text-[14px]" href="#contact">Contact us</a>
            <img src="/menu.svg" alt="Menu" className="h-[24px] w-auto" />

    </div>



      {/* desktop */}
    <div className={`${lato.className} hidden md:flex font-medium  gap-14  absolute right-[25vw] z-20 text-[16px] uppercase mt-4`}>
      {/* IMPORTANT TODO */}
      {/* if will use external page here (such as for all projects - use nextjs link. as it will prerender the page) */}
        <a className="hover:border-b-[1px] hover:border-white" href="/">Home</a>
        <a className="hover:border-b-[1px] hover:border-white" href="/projects">Works</a>
        <a className="hover:border-b-[1px] hover:border-white" href="#about">About</a>
        <a className="hover:border-b-[1px] hover:border-white" href="#contact">Contact</a>
    </div>
    </>
  )
}

export default Nav;
