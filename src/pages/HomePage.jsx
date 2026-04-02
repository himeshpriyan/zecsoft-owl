import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesModule from '../components/ServicesModule';
import BuildYourProject from '../components/BuildYourProject';
import WhyChooseUs from '../components/WhyChooseUs';
import LeadMagnet from '../components/LeadMagnet';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <ServicesModule />
      <BuildYourProject />
      <WhyChooseUs />
      <LeadMagnet />
    </main>
  );
}
