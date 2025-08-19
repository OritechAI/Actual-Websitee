import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Target, Clock, DollarSign, Star, TrendingUp } from 'lucide-react';

const ProblemStatement = () => {
  const kpis = [
    "Direct bookings ↑",
    "Response time ↓", 
    "RevPAR ↑",
    "Review volume ↑",
    "Upsell attach ↑"
  ];

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
    <>
      {/* Proof Strip */}
      <section className="py-8 lg:py-12 bg-black bg-opacity-50">
        <div className="text-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 text-white font-medium">
              {kpis.map((kpi, index) => (
                <span key={index} className="text-sm lg:text-base text-gray-100 text-shadow">
                  {kpi}
                </span>
              ))}
            </div>
            <p className="text-xs lg:text-sm text-gray-300 mt-4 text-shadow-sm">
              (We track these five KPIs daily.)
            </p>
          </motion.div>
        </div>
      </section>

      {/* The 5 Pain Points We Fix */}
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
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-sm lg:text-base text-gray-200 font-medium">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemStatement;