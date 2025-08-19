import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, DollarSign, Star, TrendingUp, ArrowRight } from 'lucide-react';

const WhyWorkWithUs = () => {
  const startBlueprint = () => {
    window.open('/blueprint?utm_source=oritech_landing&utm_medium=cta&utm_campaign=blueprint', '_self');
  };

  const targets = [
    {
      icon: <ExternalLink className="w-8 h-8 text-oritech-red" />,
      title: "Direct bookings ↑",
      subtitle: "Cut OTA dependency",
      target: "Target (30–90d): +4–10 pp direct share, –3–7 pp OTA share, CPA ≤ 5–8%"
    },
    {
      icon: <Clock className="w-8 h-8 text-oritech-red" />,
      title: "Response time ↓", 
      subtitle: "Automate guest queries",
      target: "Target: < 60s first response, 40–70% auto-resolution, –30–60% ticket volume"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-oritech-red" />,
      title: "RevPAR ↑",
      subtitle: "Dynamic pricing wins",
      target: "Target: +3–8% RevPAR, +2–6% ADR, +1–3 pts occupancy (event weeks)"
    },
    {
      icon: <Star className="w-8 h-8 text-oritech-red" />,
      title: "Review volume ↑",
      subtitle: "Systematic collection", 
      target: "Target: +40–100% volume, < 24h response, +0.1–0.3 score lift"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-oritech-red" />,
      title: "Upsell attach ↑",
      subtitle: "Automated offers",
      target: "Target: 3–8% upgrades, $2–$6 APOR, 8–20% CTR / 3–7% conversion"
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
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
            Where We Move <span className="text-oritech-red">Numbers</span> (targets)
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {targets.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black bg-opacity-80 backdrop-blur-sm card-padding rounded-xl border border-gray-600"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <div>
                  <h3 className="text-lg lg:text-xl font-black text-white">{item.title}</h3>
                  <p className="text-sm lg:text-base text-oritech-red font-semibold">{item.subtitle}</p>
                </div>
              </div>
              <p className="text-sm lg:text-base text-gray-200 font-medium">{item.target}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.button
            onClick={startBlueprint}
            className="bg-oritech-red hover:bg-red-700 text-white font-bold button-padding rounded-lg text-lg lg:text-xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Blueprint <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;