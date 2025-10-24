/**
 * Schemas de structured data (JSON-LD) para SEO
 * https://schema.org/
 */

// Schema para la organización
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HazMiWeb",
  "url": "https://hazmiweb.lat",
  "logo": "https://hazmiweb.lat/logo.png",
  "description": "Creación de sitios web profesionales y modernos para impulsar tu negocio en el mundo digital",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "EC"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "contacto@hazmiweb.lat",
    "availableLanguage": "Spanish"
  }
};

// Schema para el servicio principal
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Diseño y Desarrollo Web",
  "provider": {
    "@type": "Organization",
    "name": "HazMiWeb",
    "url": "https://hazmiweb.lat"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Ecuador"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Diseño Web",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sitio Web Básico",
          "description": "Sitio web profesional de 1-5 páginas con diseño responsive",
          "price": "20",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sitio Web Profesional",
          "description": "Sitio web completo hasta 5 páginas con blog y analytics",
          "price": "45",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sitio Web Premium",
          "description": "Solución completa con e-commerce y panel de administración",
          "price": "80",
          "priceCurrency": "USD"
        }
      }
    ]
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "20",
    "highPrice": "80",
    "priceCurrency": "USD"
  }
};

// Schema para Website
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HazMiWeb",
  "url": "https://hazmiweb.lat",
  "description": "Creamos sitios web modernos, profesionales y optimizados para tu negocio",
  "publisher": {
    "@type": "Organization",
    "name": "HazMiWeb"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://hazmiweb.lat/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Schema para LocalBusiness (si aplica)
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "HazMiWeb",
  "image": "https://hazmiweb.lat/logo.png",
  "url": "https://hazmiweb.lat",
  "telephone": "+593-XXX-XXX-XXX",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "EC"
  },
  "priceRange": "$20 - $80",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

// Schema para FAQ (si aplica)
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta crear un sitio web?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestros planes van desde $20 para un sitio web básico, $45 para un sitio profesional, hasta $80 para una solución premium completa con e-commerce."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda en hacerse un sitio web?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un sitio web básico puede estar listo en 1-2 semanas. Proyectos más complejos pueden tomar de 3 a 6 semanas dependiendo de los requisitos."
      }
    },
    {
      "@type": "Question",
      "name": "¿El sitio web será responsive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, todos nuestros sitios web son 100% responsive y se adaptan perfectamente a móviles, tablets y computadoras de escritorio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Incluye hosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, incluimos hosting gratuito: 1 mes en el plan Básico, 3 meses en el Profesional y 6 meses en el Premium."
      }
    }
  ]
};

// Schema para artículos de blog
export const createBlogPostSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "author": {
    "@type": "Organization",
    "name": article.author || "HazMiWeb"
  },
  "publisher": {
    "@type": "Organization",
    "name": "HazMiWeb",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hazmiweb.lat/logo.png"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified
});
