import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesModule from '../components/ServicesModule';
import PortfolioModule from '../components/PortfolioModule';
import WhyChooseUs from '../components/WhyChooseUs';
import AISolutions from '../components/AISolutions';
import TrustStrip from '../components/TrustStrip';
import Testimonials from '../components/Testimonials';

import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <ServicesModule />
      <AISolutions />
      <PortfolioModule />
      <TrustStrip />
      <Testimonials />

      <Contact />
    </main>
  );
}
