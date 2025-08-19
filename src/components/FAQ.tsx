import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "What's included in the Free Blueprint?",
      answer: "Complete KPI analysis, use-case prioritization, pilot design, and 30-day scoreboard. You keep everything even if you don't move forward."
    },
    {
      question: "How long does the Blueprint take?",
      answer: "2–4 weeks depending on property size and complexity. We work around your schedule with minimal disruption to operations."
    },
    {
      question: "What if the pilot doesn't show results?",
      answer: "We stop and you owe nothing. Our reputation depends on measurable outcomes, not selling you something that doesn't work."
    },
    {
      question: "Do you work with independent hotels?",
      answer: "Yes—independents, boutiques, groups, and travel agencies. We scale our approach to fit your size and budget."
    },
    {
      question: "What AI solutions do you implement?",
      answer: "Whatever moves your numbers: guest messaging automation, dynamic pricing, review management, upsell systems, and operational workflows. We implement AI wherever it drives measurable results."
    },
    {
      question: "How do you measure success?",
      answer: "Five core KPIs: direct booking share, response time, RevPAR, review volume, and upsell attach rate. We track daily and report weekly."
    },
    {
      question: "What's your implementation timeline?",
      answer: "Pilots launch in 1–2 weeks, full implementations in 4–8 weeks. We prioritize quick wins while building long-term capabilities."
    },
    {
      question: "Do you integrate with our existing systems?",
      answer: "Yes—PMS, channel manager, CRM, and booking engine integrations are standard. We work with your current tech stack."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "24/7 monitoring, weekly performance reports, monthly optimization reviews, and dedicated account management. Success is a partnership."
    },
    {
      question: "How much does implementation cost?",
      answer: "Depends on scope and complexity. We provide transparent pricing after the Blueprint identifies your specific needs and expected ROI."
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
            Frequently Asked <span className="text-oritech-red">Questions</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black bg-opacity-80 backdrop-blur-sm p-6 rounded-xl border border-gray-600"
            >
              <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
              <p className="text-sm lg:text-base text-gray-200 font-medium">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;