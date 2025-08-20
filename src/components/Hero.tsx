import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const bookBlueprint = () => {
    window.open('https://calendly.com/selenica3/15min', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 overlay-dark"></div>
      <div className="relative z-10 text-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white heading-spacing leading-tight text-shadow-lg">
            We don't sell AI automation. We sell <span className="text-oritech-red text-shadow-lg">outcomes</span>.
          </h1>
          
          {/* Subheadline */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-100 font-medium subheading-spacing max-w-4xl mx-auto text-shadow">
            Start with our Free Blueprint—diagnose the real problems, pick the right AI use cases, 
            then build only what moves your numbers.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center mb-8">
            <motion.button
              onClick={bookBlueprint}
              className="bg-oritech-red hover:bg-red-700 text-white font-bold button-padding rounded-lg text-base lg:text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free Blueprint <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>
          </div>
          
          {/* Trust Line */}
          <p className="text-xs lg:text-sm text-gray-300 font-medium text-shadow">
            Used by independents, hotels, groups, and travel agencies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;