import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-oritech-black border-t border-gray-700 py-12 lg:py-16">
      <div className="text-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-oritech-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-lg lg:text-xl font-black text-white">OriTech AI</span>
            </div>
            <p className="text-sm lg:text-base text-gray-200 font-medium mb-6">
              Built around the Blueprint. We only implement what drives outcomes.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/andi-selenica-b49904348/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-oritech-red transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/andiselenica.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-oritech-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm lg:text-base font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-xs lg:text-sm text-gray-200 font-medium hover:text-oritech-red transition-colors">
                  AI Consulting Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-xs lg:text-sm text-gray-200 font-medium hover:text-oritech-red transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#booking" className="text-xs lg:text-sm text-gray-200 font-medium hover:text-oritech-red transition-colors">
                  Book Free Audit
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-sm lg:text-base font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-oritech-red" />
                <span className="text-xs lg:text-sm text-gray-200 font-medium">selenica3@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-oritech-red" />
                <span className="text-xs lg:text-sm text-gray-200 font-medium">+1 (407) 406-9101</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-oritech-red" />
                <span className="text-xs lg:text-sm text-gray-200 font-medium">Internacional</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs lg:text-sm text-gray-300 font-medium mb-6 md:mb-0">
            © 2025 OriTech AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-xs lg:text-sm text-gray-300 font-medium hover:text-oritech-red transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-xs lg:text-sm text-gray-300 font-medium hover:text-oritech-red transition-colors">
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="text-xs lg:text-sm text-gray-300 font-medium hover:text-oritech-red transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;