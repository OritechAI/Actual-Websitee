import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  const startBlueprint = () => {
    window.open('/blueprint?utm_source=oritech_landing&utm_medium=cta&utm_campaign=blueprint', '_self');
  };

  const seeCaseStudies = () => {
    window.open('/case-studies?utm_source=oritech_landing&utm_medium=cta&utm_campaign=blueprint', '_self');
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white heading-spacing leading-tight text-shadow-lg">
            We don't sell AI automation. We sell <span className="text-oritech-red text-shadow-lg">outcomes</span>.
          </h1>
          
          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-100 font-medium subheading-spacing max-w-4xl mx-auto text-shadow">
            Start with our Free Blueprint—diagnose the real problems, pick the right AI use cases, 
            then build only what moves your numbers.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.button
              onClick={startBlueprint}
              className="bg-oritech-red hover:bg-red-700 text-white font-bold button-padding rounded-lg text-lg lg:text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Blueprint <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>
            
            <motion.button
              onClick={seeCaseStudies}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold button-padding rounded-lg text-lg lg:text-xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlayCircle className="w-5 h-5 lg:w-6 lg:h-6" />
              See Case Studies
            </motion.button>
          </div>
          
          {/* Trust Line */}
          <p className="text-sm lg:text-base text-gray-300 font-medium text-shadow">
            Used by independents, boutiques, groups, and travel agencies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;