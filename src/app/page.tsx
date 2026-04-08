import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Technology from '@/components/Technology';
import Marquee from '@/components/Marquee';
import DasScene from '@/components/DasScene';
import Applications from '@/components/Applications';
import WhyUs from '@/components/WhyUs';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Marquee />
        <Technology />
        <DasScene />
        <Applications />
        <WhyUs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
