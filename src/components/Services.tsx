import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Search, FileText, Target, BarChart, ArrowRight } from 'lucide-react';

const Services = () => {
  const bookBlueprint = () => {
    window.open('https://calendly.com/selenica3/15min', '_blank');
  };

  const blueprintSteps = [
    {
      icon: <Search className="w-8 h-8 text-oritech-red" />,
      title: "Discover",
      description: "Goals, current KPIs, workflows, quick-win map."
    },
    {
      icon: <Target className="w-8 h-8 text-oritech-red" />,
      title: "Diagnose", 
      description: "Highest-leverage AI use cases across service, revenue, reviews, upsell, and ops."
    },
    {
      icon: <FileText className="w-8 h-8 text-oritech-red" />,
      title: "Design & Pilot",
      description: "Guarded pilots with owners, guardrails, and daily metrics."
    },
    {
      icon: <BarChart className="w-8 h-8 text-oritech-red" />,
      title: "Decision",
      description: "If lift shows, we implement the right product. If not, we stop."
    }
  ];

  const deliverables = [
    "KPI baseline",
    "Use-case shortlist", 
    "Pilot plan",
    "Stack diagram",
    "Guardrails",
    "30-day scoreboard"
  ];

  return (
    <section id="services" className="section-spacing">
      <div className="text-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
            What You Get <span className="text-oritech-red">Free</span>
          </h2>
          <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 lg:p-12 rounded-xl border border-gray-600 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-black text-white mb-6">
              The OriTech Blueprint <span className="text-oritech-red">(Free, 2–4 weeks)</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {blueprintSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-200 font-medium">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="border-t border-gray-600 pt-8">
              <h4 className="text-lg font-bold text-white mb-6">Deliverables you keep:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-oritech-red flex-shrink-0" />
                    <span className="text-sm text-gray-200 font-medium">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.button
              onClick={bookBlueprint}
              className="bg-oritech-red hover:bg-red-700 text-white font-bold button-padding rounded-lg text-lg lg:text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 mx-auto mt-8"
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

export default Services;