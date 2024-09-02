import React from 'react';
import { lato, tthoves } from '@/app/fonts';
import Nav from '@/components/Intro/Nav';
import ContactForm from '@/components/ContactForm';
import Logo from '@/components/Intro/Logo';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { Suspense } from "react"
import FooterNew from '@/components/Footer';



const ContactPage = async () => {
  const payload = await getPayloadHMR({ config });
  const contact = await payload.findGlobal({ slug: 'contact' });

  return(
      <>
      <div className="h-[120px]">
        <Logo />
        <Nav />
        </div>
        <Suspense fallback={<></>}>
        <ContactForm contact={contact}/>
    </Suspense>
                      <FooterNew/>

    </>

  )
}

export default ContactPage;
