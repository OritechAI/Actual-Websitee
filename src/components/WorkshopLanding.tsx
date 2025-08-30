import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar,
  Clock, 
  Users, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  ChevronDown,
  Phone,
  Mail,
  ExternalLink,
  MessageSquare,
  Award,
  Target,
  DollarSign,
  BarChart3,
  ArrowLeft
} from 'lucide-react';
import WorkshopSchema from './WorkshopSchema';

const WorkshopLanding = () => {
  const [showAgenda, setShowAgenda] = useState(false);

  const reserveSeat = () => {
    window.open('https://calendly.com/selenica3/45min', '_blank');
  };

  const toggleAgenda = () => {
    setShowAgenda(!showAgenda);
  };

  const goHome = () => {
    window.location.href = '/';
  };

  const painPoints = [
    "Staff overwhelmed with repetitive guest queries, check-ins, and manual tasks",
    "OTA commissions eating 15-25% of revenue with no clear path to reduce dependency", 
    "Reviews coming in too slowly, hurting online reputation and booking potential",
    "Manual pricing strategies missing revenue opportunities during peak demand",
    "Upsell opportunities consistently missed due to operational focus"
  ];

  const learningPoints = [
    {
      icon: <Clock className="w-8 h-8 text-oritech-red" />,
      title: "Save Staff Hours",
      description: "Proven AI automation strategies that reduce manual tasks by 200+ hours monthly",
      seoKeyword: "save staff hours"
    },
    {
      icon: <ExternalLink className="w-8 h-8 text-oritech-red" />,
      title: "Reduce OTA Dependency", 
      description: "Step-by-step methods to boost direct bookings and cut commission costs",
      seoKeyword: "reduce OTA dependency"
    },
    {
      icon: <Star className="w-8 h-8 text-oritech-red" />,
      title: "Improve Guest Reviews",
      description: "Systematic review collection and response automation for consistent ratings",
      seoKeyword: "improve guest reviews"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-oritech-red" />,
      title: "Direct Bookings Strategy",
      description: "AI-powered tools that convert website visitors to direct reservations",
      seoKeyword: "direct bookings"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-oritech-red" />,
      title: "Hotel Automation Systems",
      description: "Smart workflows that handle guest communication and operational tasks",
      seoKeyword: "hotel automation"
    },
    {
      icon: <Award className="w-8 h-8 text-oritech-red" />,
      title: "AI for Hotels ROI",
      description: "Measurable returns and KPIs from successful AI implementations",
      seoKeyword: "AI for hotels"
    }
  ];

  const caseStudyKPIs = [
    {
      metric: "+14% Direct Bookings",
      hotel: "Lake District Hotels",
      timeframe: "90 days",
      detail: "Reduced OTA dependency from 68% to 54%",
      icon: <TrendingUp className="w-12 h-12 text-white" />
    },
    {
      metric: "–220 Staff Hours",
      hotel: "RIMC Hotels & Resorts",
      timeframe: "Monthly savings",
      detail: "60% reduction in manual guest communications",
      icon: <Clock className="w-12 h-12 text-white" />
    },
    {
      metric: "+0.3★ Review Lift",
      hotel: "Samuel Braun Hotels",
      timeframe: "6 months",
      detail: "From 4.2 to 4.5 stars across all platforms",
      icon: <Star className="w-12 h-12 text-white" />
    }
  ];

  const agenda = [
    {
      duration: "5 min",
      title: "Hotel AI Diagnostic",
      description: "Quick assessment of your current operational challenges and AI readiness",
      focus: "Pain point identification"
    },
    {
      duration: "25 min", 
      title: "3 Live Case Studies",
      description: "Real implementations showing staff savings, booking increases, and review improvements",
      focus: "Proven results walkthrough"
    },
    {
      duration: "10 min",
      title: "Your Custom 90-Day Plan",
      description: "Personalized AI implementation roadmap tailored to your property type and goals",
      focus: "Actionable next steps"
    },
    {
      duration: "5 min",
      title: "Q&A + Resources",
      description: "Get your specific questions answered plus free implementation templates",
      focus: "Expert consultation"
    }
  ];

  const testimonials = [
    {
      quote: "This AI workshop for hotels completely changed our approach to automation. We implemented their guest messaging system and instantly saved 15 hours per week on repetitive inquiries.",
      author: "Sarah Martinez",
      position: "General Manager",
      hotel: "Coastal Boutique Hotels",
      rating: 5,
      result: "15 hours saved weekly",
      location: "California"
    },
    {
      quote: "Practical, actionable insights with zero fluff. The workshop showed us exactly how to reduce OTA dependency. Within 30 days we increased direct bookings by 12%.",
      author: "Marco Rodriguez", 
      position: "Revenue Manager",
      hotel: "Mountain Lake Resort",
      rating: 5,
      result: "+12% direct bookings",
      location: "Colorado"
    },
    {
      quote: "Best 45 minutes I've spent on our business this year. The personalized 90-day hotel automation plan gave us a clear roadmap to improve guest reviews and operational efficiency.",
      author: "Lisa Chen",
      position: "Owner",
      hotel: "Downtown Business Hotel",
      rating: 5,
      result: "Clear automation roadmap",
      location: "New York"
    }
  ];

  const faqs = [
    {
      question: "Is this AI workshop for hotels really free?",
      answer: "Yes, completely free. No hidden costs, no credit card required, no pushy sales pitch. We believe in providing value first and building relationships through genuine results and insights."
    },
    {
      question: "Who is this hotel automation workshop designed for?",
      answer: "Hotel owners, general managers, revenue managers, operations teams, and anyone responsible for improving hotel efficiency while reducing costs. Perfect for independents, boutiques, and small hotel groups."
    },
    {
      question: "What tools do I need to attend the workshop?",
      answer: "Just your computer, tablet, or smartphone with internet access. We'll provide everything else, including screen sharing for live demonstrations and a downloadable 90-day AI implementation plan."
    },
    {
      question: "What deliverables will I receive from this AI for hotels workshop?",
      answer: "Custom 90-day AI roadmap, hotel automation case study templates, priority use-case checklist, staff time savings calculator, and direct booking optimization guide—all personalized for your specific property type."
    },
    {
      question: "How is this different from other AI workshops?",
      answer: "We focus exclusively on practical hotel automation with real case studies, measurable KPIs, and immediate implementation steps. No theoretical concepts—just proven strategies that save staff hours and increase revenue."
    },
    {
      question: "Can I attend if I'm not technically experienced?",
      answer: "Absolutely. This workshop is designed for hotel professionals, not tech experts. We explain everything in simple terms with practical examples that you can implement regardless of technical background."
    },
    {
      question: "Will there be a recording available?",
      answer: "While we don't provide recordings to maintain the interactive nature, all attendees receive comprehensive written summaries, implementation guides, and access to follow-up resources."
    },
    {
      question: "What happens after the workshop?",
      answer: "You'll have everything needed to start implementing AI automation immediately. Optionally, we offer a free Blueprint consultation to dive deeper into your specific property's automation opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-oritech-black">
      <WorkshopSchema />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-700">
        <div className="text-container py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={goHome}
              className="flex items-center gap-2 text-oritech-red hover:text-red-300 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homepage
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-oritech-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-lg font-black text-white">OriTech AI</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-spacing pt-24 lg:pt-32 pb-12 lg:pb-16">
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
                See Agenda <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${showAgenda ? 'rotate-180' : ''}`} />
              </motion.button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300 text-sm lg:text-base font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-oritech-red" />
                <span>This Friday at 2 PM EST</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-oritech-red" />
                <span>Limited to 20 hotels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-oritech-red" />
                <span>100% Free</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agenda Dropdown */}
      {showAgenda && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black bg-opacity-90 border-t border-b border-gray-600"
        >
          <div className="text-container py-8 lg:py-12">
            <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-8">
              45-Minute Workshop Agenda
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {agenda.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-black bg-opacity-80 p-6 rounded-xl border border-gray-600 shadow-lg"
                >
                  <div className="bg-oritech-red text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.duration}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-200 font-medium mb-3">{item.description}</p>
                  <p className="text-xs text-oritech-red font-semibold">{item.focus}</p>
                </motion.div>
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
              Most hotels face the same operational bottlenecks. This workshop reveals how hotel automation solves them systematically.
            </p>
          </motion.div>
          
          <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-gray-600 max-w-5xl mx-auto shadow-2xl">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-8 text-center">
              Does this sound like your hotel? You're not alone.
            </h3>
            <div className="space-y-6">
              {painPoints.map((pain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-gray-900 bg-opacity-60 rounded-xl border border-gray-700 shadow-lg"
                >
                  <div className="w-4 h-4 bg-oritech-red rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-gray-200 font-medium text-base lg:text-lg leading-relaxed">{pain}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-oritech-red font-bold text-lg lg:text-xl">
                ⬇️ Here's how successful hotels solve these problems with AI automation
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
              Practical hotel automation strategies that you can implement immediately after the workshop.
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
                className="bg-black bg-opacity-80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-600 shadow-xl hover:border-oritech-red transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  {point.icon}
                  <h3 className="text-lg lg:text-xl font-bold text-white">{point.title}</h3>
                </div>
                <p className="text-sm lg:text-base text-gray-200 font-medium leading-relaxed mb-4">{point.description}</p>
                <div className="inline-block">
                  <span className="text-xs text-oritech-red font-semibold px-3 py-1 bg-red-900 bg-opacity-30 rounded-full border border-oritech-red border-opacity-30">
                    {point.seoKeyword}
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {caseStudyKPIs.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-oritech-red to-red-700 p-8 lg:p-10 rounded-2xl text-center text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  {kpi.icon}
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black mb-4">{kpi.metric}</h3>
                <p className="text-lg lg:text-xl font-semibold mb-3">{kpi.hotel}</p>
                <p className="text-sm opacity-90 mb-2">{kpi.timeframe}</p>
                <p className="text-xs opacity-80 border-t border-white border-opacity-30 pt-4">{kpi.detail}</p>
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
              Every minute designed to give you actionable hotel automation insights.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            {agenda.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row items-start gap-6 mb-8 last:mb-0"
              >
                <div className="bg-oritech-red text-white w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center font-bold text-base lg:text-lg flex-shrink-0 mx-auto lg:mx-0 shadow-xl">
                  {item.duration}
                </div>
                <div className="bg-black bg-opacity-80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-600 flex-1 shadow-xl hover:border-oritech-red transition-all duration-300">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-200 font-medium text-base lg:text-lg leading-relaxed mb-3">{item.description}</p>
                  <p className="text-sm text-oritech-red font-semibold">{item.focus}</p>
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
              Real feedback from hotel professionals who attended our AI workshops and implemented automation strategies.
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
                className="bg-black bg-opacity-80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-600 shadow-xl hover:border-oritech-red transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-200 font-medium mb-6 italic text-base lg:text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <p className="text-white font-semibold text-base">{testimonial.author}</p>
                      <p className="text-gray-300 text-sm">{testimonial.position}</p>
                      <p className="text-gray-400 text-xs">{testimonial.hotel}, {testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-oritech-red font-bold text-sm">{testimonial.result}</p>
                    </div>
                  </div>
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
            
            <div className="bg-black bg-opacity-30 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-white border-opacity-20 max-w-2xl mx-auto mb-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Your Free Workshop Includes:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white font-medium text-sm">Custom 90-day AI roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white font-medium text-sm">Staff time savings calculator</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white font-medium text-sm">Priority use-case checklist</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white font-medium text-sm">Case study templates</span>
                </div>
              </div>
            </div>
            
            <motion.button
              onClick={reserveSeat}
              className="bg-white text-oritech-red hover:bg-gray-100 font-bold px-12 py-6 lg:px-16 lg:py-8 rounded-lg text-xl lg:text-2xl transition-all duration-300 flex items-center gap-4 shadow-xl hover:shadow-2xl transform hover:scale-105 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-7 h-7 lg:w-8 lg:h-8" />
              Reserve Your Free Seat Now
              <ArrowRight className="w-7 h-7 lg:w-8 lg:h-8" />
            </motion.button>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white text-sm mt-6">
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
                <span>Instant access to resources</span>
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
            <p className="text-lg text-gray-100 font-medium max-w-3xl mx-auto">
              Everything you need to know about our AI workshop for hotels.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black bg-opacity-80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-600 shadow-xl hover:border-oritech-red transition-all duration-300"
              >
                <h3 className="text-lg lg:text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-200 font-medium leading-relaxed text-base">{faq.answer}</p>
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
            <p className="text-lg lg:text-xl text-gray-100 font-medium mb-8 max-w-4xl mx-auto">
              Every day without AI automation is lost revenue, wasted staff time, and missed opportunities. 
              Get your personalized hotel AI roadmap in the next 45 minutes.
            </p>
            
            <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-gray-600 max-w-3xl mx-auto mb-10 shadow-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">What Makes This Workshop Different:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-oritech-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Hotel-Specific Focus</p>
                      <p className="text-gray-200 text-sm">Only automation that works in hospitality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-6 h-6 text-oritech-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Real Case Studies</p>
                      <p className="text-gray-200 text-sm">Actual KPIs from hotel implementations</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-oritech-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">ROI-Focused</p>
                      <p className="text-gray-200 text-sm">Only strategies that pay for themselves</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-oritech-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Staff-Friendly</p>
                      <p className="text-gray-200 text-sm">Automation that helps, not replaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.button
              onClick={reserveSeat}
              className="bg-oritech-red hover:bg-red-700 text-white font-bold px-12 py-6 lg:px-16 lg:py-8 rounded-lg text-xl lg:text-2xl transition-all duration-300 flex items-center gap-4 shadow-xl hover:shadow-2xl transform hover:scale-105 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-8 h-8" />
              Reserve Your Free Seat Now
              <ArrowRight className="w-8 h-8" />
            </motion.button>
            
            <p className="text-sm text-oritech-red font-bold mt-6 animate-pulse">
              🔥 Only 3 seats left for this Friday's session
            </p>
            
            <p className="text-xs text-gray-300 font-medium mt-4">
              Join hotel owners from 12+ countries who've already transformed their operations with AI automation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-oritech-black border-t border-gray-700 py-8 lg:py-12">
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
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-xs text-gray-400 leading-relaxed">
              © 2025 OriTech AI. All rights reserved. | Helping hotels implement AI automation that actually works.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WorkshopLanding;