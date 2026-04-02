import './index.css';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActionBar from './components/FloatingActionBar';
import QuoteModal from './components/QuoteModal';
import Notification from './components/Notification';
import Chatbot from './components/Chatbot';
import PortfolioModal from './components/PortfolioModal';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import QuotePage from './pages/QuotePage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <AppProvider>
      <ScrollToTop />
      {/* Persistent UI */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>
      <Navbar />
      <FloatingActionBar />
      <Chatbot />
      <QuoteModal />
      <PortfolioModal />
      <Notification />

      {/* Routed Pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </AppProvider>
  );
}
