import Herosection from '../components/HeroSection';
import Head from 'next/head';
import AboutUS from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { AboutPrisma } from '@/components/AboutPrisma';

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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
