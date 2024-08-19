import React from 'react';
import Intro from '@/components/Intro';
import VHS from '@/components/VHS';
import About from '@/components/About';
import Polaroid from '@/components/Polaroid';
import Footer from '@/components/Footer';
import { Suspense } from "react"
import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';

const fetcher = (url) => fetch(url).then((res) => res.json());



export default async function Home() {
  const payload = await getPayloadHMR({ config });
  const res = await fetch('https://zanzam-fastapi-production.up.railway.app/qara_intro');
  const home = await payload.findGlobal({
    slug: 'home', // required
  })
  const data = await res.json()
  console.log(home)

  return (
    <div>
        <Intro data={data} home={home}/>
      {/* <About /> */}
      {/* <VHS /> */}
      {/* <Polaroid /> */}
      {/* <Footer /> */}
    </div>
  );
}
