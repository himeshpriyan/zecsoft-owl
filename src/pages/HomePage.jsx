import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import SmartServiceSelector from '../components/SmartServiceSelector';
import BuildYourProject from '../components/BuildYourProject';
import WhyChooseUs from '../components/WhyChooseUs';
import LeadMagnet from '../components/LeadMagnet';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <SmartServiceSelector />
      <BuildYourProject />
      <WhyChooseUs />
      <LeadMagnet />
    </main>
  );
}
