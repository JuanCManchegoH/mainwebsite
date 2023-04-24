import AboutPrisma from '@/components/AboutPrisma';
import Herosection from '../components/HeroSection';
import Head from 'next/head';
import AboutUS from '@/components/AboutUs';
import TeamSection from '@/components/TeamSection';
import Contact from '@/components/Contact';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>MAIN - Incio</title>
      </Head>
      <Header />
      <main>
        <Herosection />
        <AboutPrisma />
        <AboutUS />
        <TeamSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
