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
  Mail,
  ExternalLink,
  DollarSign,
  Target
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
    "Staff drowning in repetitive guest queries and check-in processes",
    "OTA commissions eating 15-25% of revenue with no alternative strategy", 
    "Reviews trickling in too slowly, hurting online reputation",
    "Manual pricing missing revenue opportunities during high-demand periods",
    "Upsells and room upgrades forgotten in the daily operational rush"
  ];

  const learningPoints = [
    {
      icon: <Clock className="w-8 h-8 text-oritech-red" />,
      title: "Save Staff Hours",
      description: "Learn how AI automation reduces manual tasks by 200+ hours monthly",
      keyword: "save staff hours"
    },
    {
      icon: <ExternalLink className="w-8 h-8 text-oritech-red" />,
      title: "Reduce OTA Dependency", 
      description: "Proven strategies to boost direct bookings and cut commission costs",
      keyword: "reduce OTA dependency"
    },
    {
      icon: <Star className="w-8 h-8 text-oritech-red" />,
      title: "Improve Guest Reviews",
      description: "Systematic review collection for consistent 5-star experiences",
      keyword: "improve guest reviews"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-oritech-red" />,
      title: "Direct Bookings Growth",
      description: "AI tools that convert website visitors to direct reservations",
      keyword: "direct bookings"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-oritech-red" />,
      title: "Hotel Automation Systems",
      description: "Smart workflows that eliminate repetitive operational tasks",
      keyword: "hotel automation"
    },
    {
      icon: <Award className="w-8 h-8 text-oritech-red" />,
      title: "AI for Hotels ROI",
      description: "Measurable returns from AI implementations in hospitality",
      keyword: "AI for hotels"
    }
  ];

  const caseStudyKPIs = [
    {
      metric: "+14% Direct Bookings",
      description: "Lake District Hotels reduced OTA dependency",
      period: "90 days",
      detail: "From 32% to 46% direct booking share"
    },
    {
      metric: "–220 Staff Hours",
      description: "RIMC Hotels automated guest messaging",
      period: "Monthly savings",
      detail: "60% reduction in manual guest communications"
    },
    {
      metric: "+0.3★ Review Lift",
      description: "Samuel Braun Hotels review automation",
      period: "6 months",
      detail: "From 4.2 to 4.5 stars across all platforms"
    }
  ];

  const agenda = [
    {
      time: "5 min",
      title: "Hotel AI Diagnostic",
      description: "Quick assessment of your current operational pain points and AI readiness"
    },
    {
      time: "25 min", 
      title: "3 Live Case Studies",
      description: "Real results from hotels: staff time savings, booking increases, review improvements"
    },
    {
      time: "10 min",
      title: "Your Custom 90-Day Plan",
      description: "Personalized AI implementation roadmap for your specific property type"
    },
    {
      time: "5 min",
      title: "Q&A + Next Steps",
      description: "Get your specific questions answered and optional Blueprint consultation"
    }
  ];

  const testimonials = [
    {
      quote: "This AI workshop for hotels opened our eyes to automation opportunities we never considered. Implemented their guest messaging system and saved 15 hours a week instantly.",
      author: "Sarah Martinez",
      hotel: "Boutique Hotel Group",
      rating: 5,
      result: "15 hours saved weekly"
    },
    {
      quote: "Practical, actionable insights with zero fluff. Within 30 days we increased direct bookings by 12% using their proven strategies.",
      author: "Marco Rodriguez", 
      hotel: "Lake Resort Hotel",
      rating: 5,
      result: "+12% direct bookings"
    },
    {
      quote: "Best 45 minutes I've spent on our business this year. The personalized 90-day plan gave us a clear roadmap to implement hotel automation successfully.",
      author: "Lisa Kim",
      hotel: "City Center Inn",
      rating: 5,
      result: "Clear 90-day roadmap"
    }
  ];

  const faqs = [
    {
      question: "Is this AI workshop for hotels really free?",
      answer: "Yes, completely free. No hidden costs, no credit card required, no sales pitch. We believe in providing value first and building relationships through results."
    },
    {
      question: "Who is this hotel automation workshop for?",
      answer: "Hotel owners, general managers, revenue managers, and operations teams looking to save staff hours and reduce OTA dependency through AI automation."
    },
    {
      question: "What tools do I need for the workshop?",
      answer: "Just your computer or phone with internet access. We'll provide everything else, including a personalized 90-day AI implementation plan."
    },
    {
      question: "What deliverables will I receive from this AI for hotels workshop?",
      answer: "Custom 90-day AI roadmap, hotel automation case study templates, priority use-case list, and staff time savings calculator—all personalized for your property."
    },
    {
      question: "How is this different from other AI workshops?",
      answer: "We focus exclusively on practical hotel automation with real case studies, measurable KPIs, and immediate implementation steps—not theoretical AI concepts."
    },
    {
      question: "Can I attend if I'm not tech-savvy?",
      answer: "Absolutely. This workshop is designed for hotel professionals, not tech experts. We explain everything in simple terms with practical examples."
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
              Why This <span className="text-oritech-red">AI Workshop for Hotels</span> Matters
            </h2>
            <p className="text-lg text-gray-100 font-medium max-w-3xl mx-auto">
              Most hotels struggle with the same operational challenges. This workshop shows you exactly how hotel automation solves them.
            </p>
          </motion.div>
          
          <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-gray-600 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-8 text-center">
              Sound familiar? You're not alone.
            </h3>
            <div className="space-y-6">
              {painPoints.map((pain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gray-900 bg-opacity-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-oritech-red rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-gray-200 font-medium text-lg">{pain}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-oritech-red font-bold text-lg">
                ⬇️ Here's how successful hotels are solving these problems with AI
              </p>
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
              What You'll <span className="text-oritech-red">Learn</span> in 45 Minutes
            </h2>
            <p className="text-lg text-gray-100 font-medium max-w-3xl mx-auto">
              Practical AI for hotels strategies that you can start implementing immediately.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {learningPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black bg-opacity-80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-600 shadow-xl hover:border-oritech-red transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {point.icon}
                  <h3 className="text-lg font-bold text-white">{point.title}</h3>
                </div>
                <p className="text-sm text-gray-200 font-medium leading-relaxed">{point.description}</p>
                <div className="mt-3">
                  <span className="text-xs text-oritech-red font-semibold px-2 py-1 bg-red-900 bg-opacity-30 rounded">
                    {point.keyword}
                  </span>
                </div>
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
            <p className="text-lg text-gray-100 font-medium max-w-3xl mx-auto">
              These numbers come from actual hotel automation implementations, not theoretical projections.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {caseStudyKPIs.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-oritech-red to-red-700 p-8 lg:p-10 rounded-2xl text-center text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black mb-4">{kpi.metric}</h3>
                <p className="text-lg font-semibold mb-3">{kpi.description}</p>
                <p className="text-sm opacity-90 mb-2">{kpi.period}</p>
                <p className="text-xs opacity-80 border-t border-white border-opacity-30 pt-3">{kpi.detail}</p>
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
            <p className="text-lg text-gray-100 font-medium max-w-3xl mx-auto">
              Every minute is designed to give you actionable insights for your hotel.
            </p>
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
                <div className="bg-oritech-red text-white w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">
                  {item.time}
                </div>
                <div className="bg-black bg-opacity-80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-600 flex-1 shadow-xl">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-200 font-medium text-lg leading-relaxed">{item.description}</p>
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
            <p className="text-lg text-gray-100 font-medium max-w-3xl mx-auto">
              Real feedback from hotel professionals who attended our AI workshops.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black bg-opacity-80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-600 shadow-xl hover:border-oritech-red transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-200 font-medium mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-600 pt-4">
                  <p className="text-white font-semibold mb-1">{testimonial.author}</p>
                  <p className="text-gray-300 text-sm mb-2">{testimonial.hotel}</p>
                  <p className="text-oritech-red font-bold text-sm">{testimonial.result}</p>
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
              Ready to Transform Your Hotel with AI Automation?
            </h2>
            <p className="text-lg lg:text-xl text-white font-medium mb-8 max-w-3xl mx-auto">
              Join 200+ hotel owners who've discovered how AI automation saves time and increases revenue without replacing staff.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                onClick={reserveSeat}
                className="bg-white text-oritech-red hover:bg-gray-100 font-bold px-10 py-5 lg:px-12 lg:py-6 rounded-lg text-xl lg:text-2xl transition-all duration-300 flex items-center gap-4 shadow-xl hover:shadow-2xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-6 h-6 lg:w-7 lg:h-7" />
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
                className="bg-black bg-opacity-80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-600 shadow-xl"
              >
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-200 font-medium leading-relaxed">{faq.answer}</p>
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
              Don't Let Another Month Go By Without <span className="text-oritech-red">Hotel Automation</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-100 font-medium mb-8 max-w-3xl mx-auto">
              Every day without AI automation is lost revenue and wasted staff time. 
              Get your personalized hotel AI roadmap in the next 45 minutes.
            </p>
            
            <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-gray-600 max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Your Free Workshop Includes:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-oritech-red flex-shrink-0" />
                  <span className="text-gray-200 font-medium">Custom 90-day AI implementation roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-oritech-red flex-shrink-0" />
                  <span className="text-gray-200 font-medium">Staff time savings calculator</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-oritech-red flex-shrink-0" />
                  <span className="text-gray-200 font-medium">Priority use-case list for your property</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-oritech-red flex-shrink-0" />
                  <span className="text-gray-200 font-medium">Hotel automation case study templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-oritech-red flex-shrink-0" />
                  <span className="text-gray-200 font-medium">Direct access to AI for hotels expert</span>
                </div>
              </div>
            </div>
            
            <motion.button
              onClick={reserveSeat}
              className="bg-oritech-red hover:bg-red-700 text-white font-bold px-12 py-6 lg:px-16 lg:py-8 rounded-lg text-xl lg:text-2xl transition-all duration-300 flex items-center gap-4 shadow-xl hover:shadow-2xl transform hover:scale-105 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-7 h-7 lg:w-8 lg:h-8" />
              Reserve Your Free Seat Now
              <ArrowRight className="w-7 h-7 lg:w-8 lg:h-8" />
            </motion.button>
            
            <p className="text-sm text-oritech-red font-bold mt-6 animate-pulse">
              🔥 Only 3 seats left for this Friday's session
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-oritech-black border-t border-gray-700 py-12">
        <div className="text-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-oritech-red rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">AI</span>
              </div>
              <span className="text-xl lg:text-2xl font-black text-white">OriTech AI</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-left">
              <a href="mailto:selenica3@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-oritech-red transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">selenica3@gmail.com</span>
              </a>
              <a href="tel:+14074069101" className="flex items-center gap-2 text-gray-300 hover:text-oritech-red transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">+1 (407) 406-9101</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-xs text-gray-400">
              © 2025 OriTech AI. All rights reserved. | Helping hotels implement AI automation that actually works.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WorkshopLanding;