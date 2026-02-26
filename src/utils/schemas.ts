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
          "name": "Landing Page",
          "description": "Página de una sola sección ideal para promocionar un producto, servicio o evento específico.",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "200",
            "maxPrice": "250",
            "priceCurrency": "USD"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sitio Web Corporativo",
          "description": "Sitio web de múltiples páginas para presentar tu empresa, servicios y equipo de forma profesional.",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "400",
            "maxPrice": "600",
            "priceCurrency": "USD"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tienda en Línea (E-Commerce)",
          "description": "Tienda virtual completa con carrito de compras y pagos seguros.",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "700",
            "maxPrice": "1200",
            "priceCurrency": "USD"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aplicación Web a Medida",
          "description": "Sistema web personalizado con autenticación, base de datos y panel de administración.",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "1200",
            "maxPrice": "2500",
            "priceCurrency": "USD"
          }
        }
      }
    ]
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "200",
    "highPrice": "2500",
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
  "telephone": "+593-939-398-090",
  "email": "chacontsebastian@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cuenca",
    "addressCountry": "EC"
  },
  "priceRange": "$200 - $2500",
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
        "text": "Los precios varían según el proyecto: Landing Page desde $200-$250, Sitio Corporativo $400-$600, Tienda en Línea $700-$1,200, y Aplicación Web a Medida $1,200-$2,500+. La consulta inicial es siempre gratis."
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
        "text": "El dominio y hosting del primer año puede agregarse como servicio adicional por $60-$120/año. Consulta los detalles de cada paquete para más información."
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
