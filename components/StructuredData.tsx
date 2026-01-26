export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "MediRemind",
    "description": "Never miss your medication again! MediRemind is your intelligent medicine reminder app that helps you stay on track with your health routine.",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "5000"
    },
    "author": {
      "@type": "Organization",
      "name": "MediRemind Team"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MediRemind",
    "url": "https://mediremind.flowentech.com",
    "logo": "https://mediremind.flowentech.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@mediremind.flowentech.com",
      "contactType": "Customer Support"
    },
    "sameAs": [
      "https://facebook.com/mediremind",
      "https://twitter.com/mediremind",
      "https://instagram.com/mediremind"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}
