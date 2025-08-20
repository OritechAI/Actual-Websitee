import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
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

          <h1 className="text-3xl lg:text-4xl font-black text-white mb-8">Privacy Policy</h1>
          
          <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 rounded-xl border border-gray-600 space-y-8">
            <div>
              <p className="text-gray-200 font-medium mb-4">
                <strong>Effective Date:</strong> January 1, 2025
              </p>
              <p className="text-gray-200 font-medium">
                At OriTech AI, we respect your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Information We Collect</h2>
              <ul className="text-gray-200 font-medium space-y-2">
                <li>• Contact information (name, email, phone number)</li>
                <li>• Property and business information for AI consultation</li>
                <li>• Website usage data and analytics</li>
                <li>• Communication records and project documentation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">How We Use Your Information</h2>
              <ul className="text-gray-200 font-medium space-y-2">
                <li>• Provide AI consulting and automation services</li>
                <li>• Communicate about projects and updates</li>
                <li>• Improve our services and website experience</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Data Protection</h2>
              <p className="text-gray-200 font-medium">
                We implement industry-standard security measures to protect your data. We do not sell, 
                rent, or share your personal information with third parties except as necessary to provide 
                our services or as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Your Rights</h2>
              <ul className="text-gray-200 font-medium space-y-2">
                <li>• Access your personal data</li>
                <li>• Request data correction or deletion</li>
                <li>• Opt out of marketing communications</li>
                <li>• Data portability where applicable</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-200 font-medium">
                For privacy-related questions or requests, contact us at:{' '}
                <a href="mailto:selenica3@gmail.com" className="text-oritech-red hover:text-red-300">
                  selenica3@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-200 font-medium">
                We may update this Privacy Policy periodically. Changes will be posted on this page 
                with an updated effective date.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;