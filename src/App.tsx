import React from 'react';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Services from './components/Services';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import OurProcess from './components/OurProcess';
import CaseStudies from './components/CaseStudies';
import PopularPlaybooks from './components/PopularPlaybooks';
import FAQ from './components/FAQ';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import Schema from './components/Schema';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <div className="min-h-screen relative">
      <Schema />
      <VideoBackground />
      <div className="relative z-10">
        <Hero />
        <ProblemStatement />
        <Services />
        <WhyWorkWithUs />
        <OurProcess />
        <CaseStudies />
        <PopularPlaybooks />
        <FAQ />
        <BookingSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;