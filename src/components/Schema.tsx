import React from 'react';

const Schema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OriTech AI",
    "url": "https://oritechai.com",
    "logo": "https://oritechai.com/images/logo.webp",
    "description": "AI consulting and automation solutions for hotels and travel agencies",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-407-406-9101",
      "contactType": "customer service",
      "email": "info@oritechai.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's included in the Free Blueprint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Complete KPI analysis, use-case prioritization, pilot design, and 30-day scoreboard. You keep everything even if you don't move forward."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does the Blueprint take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2–4 weeks depending on property size and complexity. We work around your schedule with minimal disruption to operations."
        }
      },
      {
        "@type": "Question",
        "name": "What AI solutions do you implement?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Whatever moves your numbers: guest messaging automation, dynamic pricing, review management, upsell systems, and operational workflows. We implement AI wherever it drives measurable results."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with independent hotels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes—independents, boutiques, groups, and travel agencies. We scale our approach to fit your size and budget."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Five core KPIs: direct booking share, response time, RevPAR, review volume, and upsell attach rate. We track daily and report weekly."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://oritechai.com/"
      },
      {
        "@type": "ListItem",
        "position": 2, 
        "name": "Free AI Blueprint",
        "item": "https://oritechai.com/blueprint"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default Schema;