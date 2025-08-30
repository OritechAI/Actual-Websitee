import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WorkshopSchema from './WorkshopSchema';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  Calendar,
  BarChart3,
  MessageSquare,
  Award,
  ChevronDown,
  Phone,
  Mail
} from 'lucide-react';

const WorkshopLanding = () => {
  const [showAgenda, setShowAgenda] = useState(false);

  const reserveSeat = () => {
    window.open('https://calendly.com/selenica3/45min', '_blank');
  };

  const toggleAgenda = () => {
    setShowAgenda(!showAgenda);
  };

  const painPoints = [
    "Staff drowning in repetitive guest queries",
    "OTA commissions eating 15-25% of revenue", 
    "Reviews trickling in too slowly",
    "Manual pricing missing revenue opportunities",
    "Upsells forgotten in the rush"
  ];

  const learningPoints = [
    {
      icon: <Clock className="w-6 h-6 text-oritech-red" />,
      title: "Save 200+ Staff Hours Monthly",
      description: "Automate guest messaging, reduce call volume by 60-80%"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-oritech-red" />,
      title: "Reduce OTA Dependency",
      description: "Boost direct bookings by 8-15% with AI-powered strategies"
    },
    {
      icon: <Star className="w-6 h-6 text-oritech-red" />,
      title: "Improve Guest Reviews",
      description: "Systematic review collection for +0.2-0.4★ score lift"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-oritech-red" />,
      title: "Direct Bookings Growth",
      description: "AI tools that convert website visitors to direct bookings"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-oritech-red" />,
      title: "Hotel Automation Systems",
      description: "Smart workflows that reduce manual tasks by 40-70%"
    },
    {
      icon: <Award className="w-6 h-6 text-oritech-red" />,
      title: "AI for Hotels ROI",
      description: "Proven strategies with measurable revenue impact"
    }
  ];

  const caseStudyKPIs = [
    {
      metric: "+14% Direct Bookings",
      description: "Lake District Hotels cut OTA dependency",
      period: "90 days"
    },
    {
      metric: "–220 Staff Hours",
      description: "RIMC Hotels automated guest messaging",
      period: "Monthly savings"
    },
    {
      metric: "+0.3★ Review Lift",
      description: "Samuel Braun Hotels review automation",
      period: "6 months"
    }
  ];

  const agenda = [
    {
      time: "5 min",
      title: "Hotel AI Diagnostic",
      description: "Quick assessment of your current pain points"
    },
    {
      time: "25 min", 
      title: "3 Live Case Studies",
      description: "Real results from hotels like yours"
    },
    {
      time: "10 min",
      title: "Your Custom 90-Day Plan",
      description: "Personalized roadmap for your property"
    },
    {
      time: "5 min",
      title: "Q&A + Next Steps",
      description: "Get your specific questions answered"
    }
  ];

  const testimonials = [
    {
      quote: "The workshop opened our eyes to AI opportunities we never considered. Implemented their guest messaging system and saved 15 hours a week.",
      author: "Sarah M.",
      hotel: "Boutique Hotel Group",
      rating: 5
    },
    {
      quote: "Practical, actionable insights. No fluff. Within 30 days we increased direct bookings by 12% using their strategies.",
      author: "Marco R.", 
      hotel: "Lake Resort Hotel",
      rating: 5
    },
    {
      quote: "Best 45 minutes I've spent on our business. The personalized 90-day plan gave us a clear roadmap to implement AI successfully.",
      author: "Lisa K.",
      hotel: "City Center Inn",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is this workshop really free?",
      answer: "Yes, completely free. No hidden costs, no credit card required. We believe in providing value first."
    },
    {
      question: "Who is this workshop for?",
      answer: "Hotel owners, managers, and revenue teams looking to implement AI automation without replacing staff."
    },
    {
      question: "What tools do I need for the workshop?",
      answer: "Just your computer or phone. We'll provide everything else, including a personalized 90-day implementation plan."
    },
    {
      question: "What deliverables will I receive?",
      answer: "Custom 90-day AI roadmap, case study templates, and priority use-case list for your hotel."
    },
    {
      question: "How is this different from other AI workshops?",
      answer: "We focus on practical implementation with real hotel case studies and measurable KPIs, not theoretical AI concepts."
    }
  ];

  return (
    <div className="min-h-screen bg-oritech-black">
      <WorkshopSchema />
      {/* Hero Section */}
      <section className="section-spacing pt-16 lg:pt-24">
        <div className="text-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white heading-spacing leading-tight text-shadow-lg">
              Free <span className="text-oritech-red">AI Blueprint Workshop</span> for Hotels
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-medium subheading-spacing max-w-4xl mx-auto text-shadow">
              Discover how hotels save 200+ staff hours, boost direct bookings, and improve guest reviews—without cutting staff.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                onClick={reserveSeat}
                className="bg-oritech-red hover:bg-red-700 text-white font-bold px-8 py-4 lg:px-10 lg:py-5 rounded-lg text-lg lg:text-xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve Your Free Seat <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                onClick={toggleAgenda}
                className="border-2 border-oritech-red text-oritech-red hover:bg-oritech-red hover:text-white font-bold px-8 py-4 lg:px-10 lg:py-5 rounded-lg text-lg lg:text-xl transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Agenda <ChevronDown className={`w-6 h-6 transition-transform ${showAgenda ? 'rotate-180' : ''}`} />
              </motion.button>
            </div>
            
            <p className="text-sm lg:text-base text-gray-300 font-medium text-shadow">
              ⏰ Next session: This Friday at 2 PM EST • 🎯 Limited to 20 hotels • 💯 100% Free
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agenda Dropdown */}
      {showAgenda && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-black bg-opacity-80 border-t border-b border-gray-600"
        >
          <div className="text-container py-8">
            <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-8">
              45-Minute Workshop Agenda
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {agenda.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-oritech-red text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {item.time}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-200 font-medium">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Why This Workshop Matters */}
      <section className="section-spacing">
        <div className="text-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
              Why This <span className="text-oritech-red">AI Workshop</span> Matters
            </h2>
            <p className="text-lg text-gray-100 font-medium max-w-3xl mx-auto">
              Most hotels struggle with the same 5 problems. We show you exactly how AI fixes them.
            </p>
          </motion.div>
          
          <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 lg:p-12 rounded-xl border border-gray-600 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Sound familiar? You're not alone.
            </h3>
            <div className="space-y-4">
              {painPoints.map((pain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-oritech-red rounded-full flex-shrink-0"></div>
                  <p className="text-gray-200 font-medium">{pain}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="section-spacing bg-black bg-opacity-70">
        <div className="text-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
              What You'll <span className="text-oritech-red">Learn</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {learningPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black bg-opacity-80 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-gray-600"
              >
                <div className="flex items-center gap-3 mb-4">
                  {point.icon}
                  <h3 className="text-lg font-bold text-white">{point.title}</h3>
                </div>
                <p className="text-sm text-gray-200 font-medium">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study KPIs */}
      <section className="section-spacing">
        <div className="text-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
              Real <span className="text-oritech-red">Results</span> from Hotels Like Yours
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {caseStudyKPIs.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-oritech-red to-red-700 p-8 rounded-xl text-center text-white"
              >
                <h3 className="text-3xl lg:text-4xl font-black mb-3">{kpi.metric}</h3>
                <p className="text-lg font-semibold mb-2">{kpi.description}</p>
                <p className="text-sm opacity-90">{kpi.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Agenda */}
      <section className="section-spacing bg-black bg-opacity-70">
        <div className="text-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
              Workshop <span className="text-oritech-red">Agenda</span> (45 Minutes)
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {agenda.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start gap-6 mb-8 last:mb-0"
              >
                <div className="bg-oritech-red text-white w-16 h-16 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.time}
                </div>
                <div className="bg-black bg-opacity-80 backdrop-blur-sm p-6 rounded-xl border border-gray-600 flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200 font-medium">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing">
        <div className="text-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
              What <span className="text-oritech-red">Hotel Owners</span> Say
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black bg-opacity-80 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-gray-600"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-200 font-medium mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-300">{testimonial.hotel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="section-spacing bg-gradient-to-r from-oritech-red to-red-700">
        <div className="text-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing">
              Ready to Transform Your Hotel with AI?
            </h2>
            <p className="text-lg lg:text-xl text-white font-medium mb-8 max-w-3xl mx-auto">
              Join 200+ hotel owners who've already discovered how AI automation saves time and increases revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                onClick={reserveSeat}
                className="bg-white text-oritech-red hover:bg-gray-100 font-bold px-10 py-5 rounded-lg text-xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-6 h-6" />
                Reserve Your Free Seat
              </motion.button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>45 minutes of pure value</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Custom 90-day roadmap included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing">
        <div className="text-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
              Frequently Asked <span className="text-oritech-red">Questions</span>
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black bg-opacity-80 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-gray-600"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-200 font-medium">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-black bg-opacity-70">
        <div className="text-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
              Don't Let Another Month Go By
            </h2>
            <p className="text-lg lg:text-xl text-gray-100 font-medium mb-8 max-w-3xl mx-auto">
              Every day without AI automation is lost revenue and wasted staff time. 
              Get your personalized roadmap in the next 45 minutes.
            </p>
            
            <motion.button
              onClick={reserveSeat}
              className="bg-oritech-red hover:bg-red-700 text-white font-bold px-12 py-6 rounded-lg text-xl lg:text-2xl transition-all duration-300 flex items-center gap-4 shadow-xl hover:shadow-2xl transform hover:scale-105 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-7 h-7" />
              Reserve Your Free Seat Now
              <ArrowRight className="w-7 h-7" />
            </motion.button>
            
            <p className="text-sm text-gray-300 font-medium mt-6">
              🔥 Only 3 seats left for this Friday's session
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-oritech-black border-t border-gray-700 py-8">
        <div className="text-container text-center">
          <div className="flex justify-center items-center gap-8 mb-6">
            <a href="mailto:selenica3@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-oritech-red transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">selenica3@gmail.com</span>
            </a>
            <a href="tel:+14074069101" className="flex items-center gap-2 text-gray-300 hover:text-oritech-red transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">+1 (407) 406-9101</span>
            </a>
          </div>
          <p className="text-xs text-gray-400">
            © 2025 OriTech AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WorkshopLanding;