import React from 'react';

const WorkshopSchema = () => {
  const workshopSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Free AI Blueprint Workshop for Hotels",
    "description": "Free 45-minute workshop teaching hotels how to save 200+ staff hours, boost direct bookings, and improve guest reviews using AI automation. Learn hotel automation strategies from real case studies.",
    "keywords": "AI workshop for hotels, hotel automation, save staff hours, reduce OTA dependency, improve guest reviews, direct bookings, AI for hotels",
    "startDate": "2025-01-17T14:00:00-05:00",
    "endDate": "2025-01-17T14:45:00-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://calendly.com/selenica3/45min"
    },
    "organizer": {
      "@type": "Organization",
      "name": "OriTech AI",
      "url": "https://oritechai.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01T00:00:00-05:00"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Hotel owners, managers, and revenue teams"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this workshop really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, completely free. No hidden costs, no credit card required. We believe in providing value first."
        }
      },
      {
        "@type": "Question",
        "name": "Who is this workshop for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hotel owners, managers, and revenue teams looking to implement AI automation without replacing staff."
        }
      },
      {
        "@type": "Question",
        "name": "What deliverables will I receive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom 90-day AI roadmap, case study templates, and priority use-case list for your hotel."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OriTech AI",
    "url": "https://oritechai.com",
    "logo": "https://oritechai.com/images/logo.webp",
    "description": "AI consulting and automation solutions for hotels and travel agencies",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Internacional",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-407-406-9101",
      "contactType": "customer service",
      "email": "selenica3@gmail.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workshopSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};

export default WorkshopSchema;