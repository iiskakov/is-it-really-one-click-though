import React from 'react';
import Intro from '@/components/Intro';
import VHS from '@/components/VHS';
import About from '@/components/About';
import Polaroid from '@/components/Polaroid';
import Footer from '@/components/Footer';
import { Suspense } from "react"

const fetcher = (url) => fetch(url).then((res) => res.json());


export default async function Home() {
  const res = await fetch('https://zanzam-fastapi-production.up.railway.app/qara_intro');
  const data = await res.json()

  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Intro data={data}/>
      </Suspense>
      <About />
      <VHS />
      <Polaroid />
      <Footer />
    </div>
  );
}
