import React from "react";

const JsonLdSchema = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "SecurityService"],
    name: "InnerWork Advisors LLP",
    url: "https://innerworkadvisorsllp.com/",
    telephone: "+91-9073672051",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Martin Burn House, 1 R.N. Mukherjee Rd, Gr Floor",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700001",
      addressCountry: "IN",
    },
    description:
      "Innerwork Advisors LLP is the best security service provider and investigative firm in Kolkata. We offer expert guidance and comprehensive solutions tailored to your personal needs. Visit us for trusted, professional security and investigative services.",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};

export default JsonLdSchema;
