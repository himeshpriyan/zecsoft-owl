import './index.css';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import SmartServiceSelector from './components/SmartServiceSelector';
import ServicesModule from './components/ServicesModule';
import PortfolioModule from './components/PortfolioModule';
import BeforeAfterModule from './components/BeforeAfterModule';
import QuoteCalculator from './components/QuoteCalculator';
import BuildYourProject from './components/BuildYourProject';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import LeadMagnet from './components/LeadMagnet';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActionBar from './components/FloatingActionBar';
import QuoteModal from './components/QuoteModal';
import Notification from './components/Notification';
import Chatbot from './components/Chatbot';
import PortfolioModal from './components/PortfolioModal';

export default function App() {
  return (
    <AppProvider>
      {/* Persistent UI */}
      <Navbar />
      <FloatingActionBar />
      <Chatbot />
      <QuoteModal />
      <PortfolioModal />
      <Notification />

      {/* Page Sections */}
      <main>
        <Hero />
        <TrustStrip />
        <SmartServiceSelector />
        <ServicesModule />
        <PortfolioModule />
        <BeforeAfterModule />
        <QuoteCalculator />
        <BuildYourProject />
        <WhyChooseUs />
        <Testimonials />
        <LeadMagnet />
        <About />
        <Contact />
      </main>

      <Footer />
    </AppProvider>
  );
}
