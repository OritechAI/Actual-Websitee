import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BookingSection = () => {
  const bookBlueprint = () => {
    window.open('https://calendly.com/selenica3/15min', '_blank');
  };

  return (
    <section id="booking" className="section-spacing bg-black bg-opacity-70">
      <div className="text-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
            Book a Free <span className="text-oritech-red">Blueprint</span>.
          </h2>
          <p className="text-base lg:text-lg text-gray-100 font-medium max-w-2xl mx-auto subheading-spacing text-shadow">
            Bring your numbers. Leave with a 30-day plan.
          </p>
          
          <div className="flex justify-center">
            <motion.button
              onClick={bookBlueprint}
              className="bg-oritech-red hover:bg-red-700 text-white font-bold button-padding rounded-lg text-lg lg:text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free Blueprint <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;