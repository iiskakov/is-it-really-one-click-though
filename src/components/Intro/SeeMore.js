import { anton, lato } from '@/app/fonts';
import { motion } from 'framer-motion';
import Link from 'next/link'

const SeeMore = ({ project_name }) => {
  return (
    <>
    <button className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 z-50">
        <img
        src="/seemore.svg"
        alt="see more button"
        />
      </button>

      <motion.div
  className="flex justify-center align-center md:hidden absolute bottom-[80px] left-0 w-full h-20 z-20"
  animate={{
    backgroundPosition: ['0% 50%', '200% 50%'], // Change to '200%' to match the backgroundSize
  }}
  transition={{
    duration: 10,
    ease: 'linear',
    repeat: Infinity,
  }}
  style={{
    background: `linear-gradient(90deg,
      #E93B5D, #E37106, #E4651A, #E65631, #E74A46,
      #E77D09, #ED8813, #F2921B, #F79D24, #FCA62D,
      #FCE0C3, #FDC273, #FDD29D, #FEB44D, #5D2678,
      #662776, #852C71, #A9316B, #CD3665, #FCE7D4,
      #CD3665, #A9316B, #852C71, #662776, #5D2678,
      #FEB44D, #FDD29D, #FDC273, #FCE0C3, #FCA62D,
      #F79D24, #F2921B, #ED8813, #E77D09, #E74A46,
      #E65631, #E4651A, #E37106, #E93B5D)`,
    backgroundSize: '200% 100%', // Ensure the background size matches the animation
  }}
>
        <div className={`${anton.className} text-black self-center uppercase font-extrabold text-3xl text-left leading-9 break-words  whitespace-normal overflow-wrap-break-word select-none`}>
          {project_name}
        </div>
      </motion.div>






      <button
        className={`${lato.className} font-bold text-[14px] absolute bottom-0 md:hidden w-full h-20 bg-black text-white text-center uppercase z-50 active:bg-[#F03021]`}>
        See more

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block w-6 h-6 ml-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.5 18L6.5 12L7.9 10.6L11.5 14.2V5H13.5V14.2L17.1 10.6L18.5 12L12.5 18Z" fill="white"/>
        </svg>
      </button>

    </>
  )
}

export default SeeMore;
