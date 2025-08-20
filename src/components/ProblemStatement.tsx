import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Target, Clock, DollarSign, Star, TrendingUp } from 'lucide-react';

const ProblemStatement = () => {
  const painPoints = [
    {
      icon: <ExternalLink className="w-8 h-8 text-oritech-red" />,
      title: "OTA dependence",
      description: "Commissions eat margin; brand control weak."
    },
    {
      icon: <Clock className="w-8 h-8 text-oritech-red" />,
      title: "Slow responses", 
      description: "Queues, repeat questions, after-hours drop-off."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-oritech-red" />,
      title: "Pricing leakage",
      description: "Static rates miss demand & events."
    },
    {
      icon: <Star className="w-8 h-8 text-oritech-red" />,
      title: "Reputation drag",
      description: "Few fresh reviews; slow replies."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-oritech-red" />,
      title: "Missed upsell",
      description: "Upgrades and add-ons left idle."
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
              The <span className="text-oritech-red">5 Pain Points</span> We Fix
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mt-12">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black bg-opacity-80 backdrop-blur-sm card-padding rounded-xl border border-gray-600 text-center"
              >
                <div className="flex justify-center mb-4">
                  {point.icon}
                </div>
                <h3 className="text-base lg:text-lg font-bold text-white mb-3">{point.title}</h3>
                <p className="text-xs lg:text-sm text-gray-200 font-medium">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default ProblemStatement;