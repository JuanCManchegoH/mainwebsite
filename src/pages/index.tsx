import AboutPrisma from '@/components/AboutPrisma';
import Herosection from '../components/HeroSection';
import Head from 'next/head';
import AboutUS from '@/components/AboutUs';
import TeamSection from '@/components/TeamSection';
import Contact from '@/components/Contact';
import SlideOver from '@/common/modals/SlideOver';

import { useState } from 'react';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export default function Home() {
  const [open,setOpen] =useState(false);
  return (
    <>
      <Head>
        <title>MAIN - Incio</title>
      </Head>
      <main>
        <Herosection />
        <AboutPrisma />
        <AboutUS />
        <TeamSection />
        <Contact />
      </main>

      <SlideOver open={open} setOpen={setOpen} title="">
        < PrivacyPolicy setOpen={setOpen} open={open} /> 
      </SlideOver>
    </>
  );
}
