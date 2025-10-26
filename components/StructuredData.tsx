export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Anara's Speech Therapy",
    "description": "Professional online speech therapy (logoped) services for Russian-speaking children in North America. Specialized in speech pathology and therapy with personalized online sessions.",
    "url": "https://anaraspeechtherapy.com",
    "logo": "https://anaraspeechtherapy.com/logo.png",
    "image": "https://anaraspeechtherapy.com/og-image.jpg",
    "founder": {
      "@type": "Person",
      "name": "Anara",
      "jobTitle": "Speech-Language Pathologist"
    },
    "medicalSpecialty": "Speech Therapy",
    "areaServed": {
      "@type": "Place",
      "name": "North America"
    },
    "availableLanguage": ["English", "Russian"],
    "priceRange": "$$",
    "telephone": "+1-XXX-XXX-XXXX",
    "email": "info@anaraspeechtherapy.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "North America"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Speech Therapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Anara's Speech Therapy"
    },
    "areaServed": {
      "@type": "Place",
      "name": "North America"
    },
    "availableLanguage": ["English", "Russian"],
    "category": "Medical Service",
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 2,
      "suggestedMaxAge": 12
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free initial consultation"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Anara's Speech Therapy Services",
    "description": "Specialized speech therapy (logoped) for Russian-speaking children. Services include articulation therapy, language development, speech assessment, and online therapy sessions.",
    "url": "https://anaraspeechtherapy.com",
    "priceRange": "$$",
    "telephone": "+1-XXX-XXX-XXXX",
    "email": "info@anaraspeechtherapy.com",
    "areaServed": "North America",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "43.6532",
        "longitude": "-79.3832"
      },
      "geoRadius": "5000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Speech Therapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Articulation Therapy",
            "description": "Helping children produce clear and accurate speech sounds in Russian and English"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Language Development",
            "description": "Supporting vocabulary building, grammar skills, and overall language comprehension in bilingual children"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Speech Assessment",
            "description": "Comprehensive evaluation of speech and language abilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Therapy Sessions",
            "description": "Flexible online therapy sessions from the comfort of your home"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What age groups do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I specialize in working with children aged 2-12 years old. Each child receives an individualized treatment plan based on their specific needs and developmental stage."
        }
      },
      {
        "@type": "Question",
        "name": "How do online therapy sessions work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Online sessions are conducted via secure video conferencing. I use interactive activities, digital materials, and engaging techniques that work effectively in an online format. Parents receive guidance on how to support practice between sessions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with bilingual children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I specialize in bilingual speech development for Russian-English speaking children. I understand the unique challenges of bilingualism and can provide therapy in both languages as needed."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in the free consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The free 30-minute consultation includes a discussion of your concerns, an overview of my approach, and initial recommendations. This helps us determine if my services are the right fit for your child's needs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does therapy typically last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The duration varies depending on each child's needs. Some children see significant progress in 3-6 months, while others may benefit from longer-term support. We regularly assess progress and adjust the treatment plan accordingly."
        }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
