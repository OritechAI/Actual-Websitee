import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Services from './components/Services';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import OurProcess from './components/OurProcess';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import Schema from './components/Schema';
import VideoBackground from './components/VideoBackground';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/" element={
            <>
              <Schema />
              <VideoBackground />
              <div className="relative z-10">
                <Hero />
                <ProblemStatement />
                <Services />
                <WhyWorkWithUs />
                <OurProcess />
                <CaseStudies />
                <FAQ />
                <BookingSection />
                <Footer />
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;