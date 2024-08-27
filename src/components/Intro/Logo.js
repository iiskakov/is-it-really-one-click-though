import Link from 'next/link';

export default function Logo() {
  return (
    <div className="absolute top-8 left-5 md:left-8 z-[22]">
      <Link href="/">
        <img
          src="/2d-logo.svg"
          alt="Logo"
          className="md:h-[5em] h-[42px] w-auto"
        />
    </Link>
      </div>

  )
};
