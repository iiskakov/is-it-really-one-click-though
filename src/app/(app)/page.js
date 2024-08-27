import React from 'react';
import Intro from '@/components/Intro';
import VHS from '@/components/VHS';
import About from '@/components/About';
import Polaroid from '@/components/Polaroid';
import Footer from '@/components/Footer';
import { Suspense } from "react"
import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';




export default async function Home() {
  const payload = await getPayloadHMR({ config });
  const home = await payload.findGlobal({
    slug: 'home', // required
  })

  return (
    <div className="h-dvh">
        <Intro  home={home}/>
      {/* <About /> */}
      {/* <VHS /> */}
      {/* <Polaroid /> */}
      {/* <Footer /> */}
    </div>
  );
}
