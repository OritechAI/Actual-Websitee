import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      hotel: "Le Canton Hotel",
      category: "(Direct)",
      result: "AI assistant → +40% direct bookings",
      link: "#"
    },
    {
      hotel: "Lake District Hotels", 
      category: "(Service)",
      result: "AI for guest messaging → –70% calls",
      link: "#"
    },
    {
      hotel: "RIMC Hotels & Resorts",
      category: "(Revenue)", 
      result: "Dynamic pricing → +28% RevPAR",
      link: "#"
    },
    {
      hotel: "Samuel Braun Hotels",
      category: "(Reputation)",
      result: "Review ops → +2.7% GRI", 
      link: "#"
    },
    {
      hotel: "Lore Group",
      category: "(Upsell)",
      result: "Automated pre-arrival offers → +400% upsell revenue",
      link: "#"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="text-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-black text-white heading-spacing text-shadow-lg">
            Case Studies <span className="text-oritech-red">(teasers)</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black bg-opacity-80 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-oritech-red transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {study.hotel} <span className="text-oritech-red">{study.category}</span>
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-200 font-medium mt-2">{study.result}</p>
                </div>
                <a 
                  href={study.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-oritech-red hover:text-red-300 transition-colors flex-shrink-0"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-600">
                <a 
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-xs text-oritech-red font-semibold hover:text-red-300 transition-colors"
                >
                  Read full article →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;