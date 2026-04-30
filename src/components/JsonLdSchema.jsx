import React from "react";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InnerWork Advisors LLP",
    url: "https://innerworkadvisorsllp.com/",
    logo: "https://innerworkadvisorsllp.com/images/logo/logo.png",
    telephone: "+91-9073672051",
    email: "innerworkadvisorsllp@gmail.com",
    description:
      "Innerwork Advisors LLP is the best security service provider and investigative firm in Kolkata. We offer expert guidance and comprehensive solutions tailored to your personal needs.",
    sameAs: [
      "https://x.com/Innerworkllp",
      "https://www.facebook.com/innerworkadvisorsllp",
      "https://www.instagram.com/innerworkadvisorsllp",
      "https://www.linkedin.com/company/innerwork-advisors-llp",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "InnerWork Advisors LLP",
    url: "https://innerworkadvisorsllp.com/",
    telephone: "+91-9073672051",
    image: "https://innerworkadvisorsllp.com/images/team-1200x539.png",
    openingHours: "Mo-Sa 09:00-19:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "BJ-74, Salt Lake City, Sector II",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700091",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.59205653225797,
      longitude: 88.42199287475768,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Working Office",
        value: "Martin Burn House, 1 R.N. Mukherjee Rd, Gr Floor, Kolkata 700001",
      },
      {
        "@type": "PropertyValue",
        name: "Registered Office",
        value: "22, Sukeas Lane, 5th Floor, Kolkata 700001",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "InnerWork Advisors LLP",
    url: "https://innerworkadvisorsllp.com/",
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services offered by InnerWork Advisors LLP",
    itemListElement: [
      "Pre Marital Investigation",
      "Post Marital Investigation",
      "Missing Person Tracing",
      "Surveillance Services",
      "Cyber Crime Investigation",
      "Extortion Investigation",
      "Handwriting Verification",
      "Asset Verification",
      "Pre Employment Verification",
      "Undercover Operation",
      "Corporate Due-Diligence",
      "Forensic Expertise/Investigation",
      "Sting Operation Services",
      "Security Services",
    ].map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
];

const JsonLdSchema = () => (
  <>
    {schemas.map((schema, i) => (
      <script
        key={i}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    ))}
  </>
);

export default JsonLdSchema;
