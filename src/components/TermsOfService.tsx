import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-oritech-black py-12">
      <div className="text-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-oritech-red hover:text-red-300 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </button>

          <h1 className="text-3xl lg:text-4xl font-black text-white mb-8">Terms of Service</h1>
          
          <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 rounded-xl border border-gray-600 space-y-8">
            <div>
              <p className="text-gray-200 font-medium mb-4">
                <strong>Effective Date:</strong> January 1, 2025
              </p>
              <p className="text-gray-200 font-medium">
                These Terms of Service govern your use of OriTech AI's services and website. 
                By using our services, you agree to these terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Services Description</h2>
              <p className="text-gray-200 font-medium">
                OriTech AI provides AI consulting, automation solutions, and implementation services 
                for hotels and travel agencies. Our services include the Free Blueprint analysis, 
                pilot implementations, and full AI automation solutions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Free Blueprint Terms</h2>
              <ul className="text-gray-200 font-medium space-y-2">
                <li>• The Blueprint analysis is provided at no cost</li>
                <li>• You retain all deliverables regardless of future engagement</li>
                <li>• No obligation to proceed with implementation</li>
                <li>• Timeline is typically 2-4 weeks depending on complexity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Implementation Services</h2>
              <p className="text-gray-200 font-medium">
                Paid implementation services are provided under separate agreements with specific 
                terms, deliverables, and payment schedules. All implementations include performance 
                guarantees and ongoing support as outlined in project agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="text-gray-200 font-medium">
                You retain ownership of your business data and property information. OriTech AI 
                retains rights to our methodologies, tools, and general insights. Custom implementations 
                become your property upon final payment.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-200 font-medium">
                Our liability is limited to the fees paid for services. We provide performance targets 
                as good-faith estimates based on industry experience but cannot guarantee specific results 
                due to factors outside our control.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-200 font-medium">
                Either party may terminate services with written notice. You retain all completed 
                deliverables. Refunds are provided for unused prepaid services according to project agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-200 font-medium">
                For questions about these terms, contact us at:{' '}
                <a href="mailto:selenica3@gmail.com" className="text-oritech-red hover:text-red-300">
                  selenica3@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-200 font-medium">
                We may update these terms periodically. Continued use of our services constitutes 
                acceptance of any changes. Material changes will be communicated via email.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;