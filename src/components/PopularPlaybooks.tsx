import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookTemplate as Template, ArrowRight } from 'lucide-react';

const PopularPlaybooks = () => {
  const playbooks = [
    "Pain Points",
    "How to Fix", 
    "AI Strategy",
    "KPI Targets"
  ];

  const templates = [
    "Guest Messaging Openers",
    "Abandoned-Cart Nudges",
    "Review Requests",
    "Detractor Recovery", 
    "Pre-Arrival Upgrades",
    "In-Stay Offers"
  ];

  const browseDocs = () => {
    window.open('/docs', '_self');
  };

  const browseTemplates = () => {
    window.open('/templates', '_self');
  };

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
            Popular <span className="text-oritech-red">Playbooks & Templates</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Playbooks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black bg-opacity-80 backdrop-blur-sm card-padding rounded-xl border border-gray-600"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-oritech-red" />
              <h3 className="text-xl lg:text-2xl font-bold text-white">Playbooks</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {playbooks.map((playbook, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-50 p-3 rounded-lg border border-gray-600">
                  <span className="text-sm lg:text-base text-gray-200 font-medium">{playbook}</span>
                </div>
              ))}
            </div>
            <button
              onClick={browseDocs}
              className="w-full mt-6 bg-transparent border-2 border-oritech-red text-oritech-red hover:bg-oritech-red hover:text-white font-bold py-3 rounded-lg text-base transition-all duration-300 flex items-center justify-center gap-2"
            >
              Browse Docs <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Templates */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black bg-opacity-80 backdrop-blur-sm card-padding rounded-xl border border-gray-600"
          >
            <div className="flex items-center gap-3 mb-6">
              <Template className="w-8 h-8 text-oritech-red" />
              <h3 className="text-xl lg:text-2xl font-bold text-white">Templates</h3>
            </div>
            <div className="space-y-3">
              {templates.map((template, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-50 p-3 rounded-lg border border-gray-600">
                  <span className="text-sm lg:text-base text-gray-200 font-medium">{template}</span>
                </div>
              ))}
            </div>
            <button
              onClick={browseTemplates}
              className="w-full mt-6 bg-transparent border-2 border-oritech-red text-oritech-red hover:bg-oritech-red hover:text-white font-bold py-3 rounded-lg text-base transition-all duration-300 flex items-center justify-center gap-2"
            >
              Browse Templates <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaybooks;