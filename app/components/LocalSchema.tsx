export default function LocalSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    "name": "Blindaje — Seguridad Privada Integral",
    "url": "https://blindaje.com.ar",
    "telephone": "+54 261 XXX XXXX",
    "areaServed": ["Mendoza","Godoy Cruz","Guaymallén","Maipú","Luján de Cuyo"],
    "servesLocation": { "@type":"AdministrativeArea", "name":"Provincia de Mendoza" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de seguridad",
      "itemListElement": [
        { "@type":"Offer", "itemOffered": { "@type":"Service", "name":"Vigilancia física" } },
        { "@type":"Offer", "itemOffered": { "@type":"Service", "name":"Monitoreo de alarmas" } },
        { "@type":"Offer", "itemOffered": { "@type":"Service", "name":"CCTV y videovigilancia" } },
        { "@type":"Offer", "itemOffered": { "@type":"Service", "name":"Custodias y eventos" } }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/p/Blindaje-Seguridad-Privada-Integral-61577887564978/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
