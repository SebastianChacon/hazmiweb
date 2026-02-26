export const FEATURES = [
  "Diseño personalizado",
  "Optimización SEO básica",
  "Formulario de contacto",
  "Galería de imágenes",
  "Integración redes sociales",
  "Hosting primer mes gratis",
  "Certificado SSL",
  "Carga ultra rápida",
];

export const CONTACT_INFO = {
  email: "chacontsebastian@gmail.com",
  phone: "+593 939 398 090",
  location: "Cuenca, Ecuador",
};

export const COMPANY_NAME = "HazMiWeb";
export const PRICE = "desde $200";
export const DELIVERY_TIME = "3-5 días hábiles";
export const SUPPORT_DAYS = "30 días";

export const SERVICE_PACKAGES = [
  {
    id: "landing",
    name: "Landing Page",
    price: "$200 - $250",
    priceMin: 200,
    priceMax: 250,
    deliveryTime: "3 - 5 días",
    idealFor: "Emprendedores, freelancers o promociones puntuales",
    description:
      "Página de una sola sección o pocas secciones, ideal para promocionar un producto, servicio o evento específico.",
    features: [
      "Diseño personalizado y moderno",
      "Totalmente responsiva (móvil, tablet, escritorio)",
      "Formulario de contacto funcional",
      "Optimización básica de velocidad",
      "Integración con redes sociales (enlaces)",
      "1 revisión de diseño incluida",
    ],
    revisions: 1,
    color: "blue" as const,
    popular: false,
  },
  {
    id: "corporativo",
    name: "Sitio Web Corporativo",
    price: "$400 - $600",
    priceMin: 400,
    priceMax: 600,
    deliveryTime: "7 - 12 días",
    idealFor: "Pequeñas y medianas empresas, consultorios, estudios",
    description:
      "Sitio web de múltiples páginas para presentar tu empresa, servicios y equipo de forma profesional.",
    features: [
      "Hasta 5 páginas (Inicio, Nosotros, Servicios, Blog, Contacto)",
      "Diseño profesional y personalizado",
      "Totalmente responsiva",
      "Formulario de contacto avanzado",
      "Mapa de Google Maps integrado",
      "Galería de imágenes / portafolio",
      "Optimización de velocidad",
      "2 revisiones de diseño incluidas",
    ],
    revisions: 2,
    color: "purple" as const,
    popular: true,
  },
  {
    id: "ecommerce",
    name: "Tienda en Línea",
    price: "$700 - $1,200",
    priceMin: 700,
    priceMax: 1200,
    deliveryTime: "15 - 25 días",
    idealFor: "Negocios que quieren vender productos o servicios en línea",
    description:
      "Tienda virtual completa para vender productos o servicios en línea con carrito de compras y pagos seguros.",
    features: [
      "Catálogo de productos (hasta 50 productos)",
      "Carrito de compras funcional",
      "Pasarela de pago (PayPal, Stripe, etc.)",
      "Panel de administración de productos",
      "Sistema de inventario básico",
      "Registro e inicio de sesión de clientes",
      "Notificaciones por correo electrónico",
      "Certificado SSL (sitio seguro)",
      "3 revisiones de diseño incluidas",
    ],
    revisions: 3,
    color: "green" as const,
    popular: false,
  },
  {
    id: "webapp",
    name: "Aplicación Web a Medida",
    price: "$1,200 - $2,500+",
    priceMin: 1200,
    priceMax: 2500,
    deliveryTime: "25 - 45 días",
    idealFor: "Startups, empresas con procesos específicos, plataformas SaaS",
    description:
      "Sistema web personalizado con funcionalidades avanzadas: autenticación, base de datos, paneles de administración y más.",
    features: [
      "Desarrollo 100% personalizado",
      "Sistema de autenticación (registro, login, roles)",
      "Base de datos relacional o no relacional",
      "Panel de administración completo (dashboard)",
      "API REST o GraphQL",
      "Integraciones con servicios externos",
      "Documentación técnica básica",
      "Soporte post-lanzamiento (30 días)",
      "Revisiones ilimitadas durante el desarrollo",
    ],
    revisions: -1, // unlimited
    color: "amber" as const,
    popular: false,
  },
];

export const ADDONS = [
  {
    name: "SEO Básico",
    price: "$80 - $150",
    description:
      "Optimización de palabras clave, meta tags, estructura de URLs amigables, sitemap XML y configuración de Google Search Console.",
    icon: "Search",
  },
  {
    name: "SEO Avanzado + Contenido",
    price: "$200 - $400",
    description:
      "Incluye SEO básico + estrategia de contenido, optimización de imágenes, velocidad del sitio, análisis de competencia y reporte mensual.",
    icon: "TrendingUp",
  },
  {
    name: "Google Analytics + Reportes",
    price: "$50 - $100",
    description:
      "Instalación y configuración de Google Analytics 4 con panel de métricas clave y reporte inicial.",
    icon: "BarChart2",
  },
  {
    name: "Mantenimiento Mensual",
    price: "$50 - $150/mes",
    description:
      "Actualizaciones de seguridad, respaldos, pequeños cambios de contenido, monitoreo de funcionamiento y soporte técnico.",
    icon: "Shield",
  },
  {
    name: "Diseño de Logo",
    price: "$80 - $150",
    description:
      "Creación de logotipo profesional con 2-3 propuestas y 2 revisiones. Entrega en formatos PNG, SVG y PDF.",
    icon: "Palette",
  },
  {
    name: "Dominio + Hosting",
    price: "$60 - $120/año",
    description:
      "Registro de dominio personalizado (.com, .net, etc.) y alojamiento web rápido y seguro por un año.",
    icon: "Globe",
  },
  {
    name: "Página Adicional",
    price: "$40 - $80 c/u",
    description:
      "Cada página extra que necesites añadir a tu sitio web con diseño consistente.",
    icon: "FilePlus",
  },
  {
    name: "Chat en Vivo",
    price: "$50 - $80",
    description:
      "Implementación de widget de chat en vivo (WhatsApp, Tawk.to, o similar) para atención directa al cliente.",
    icon: "MessageCircle",
  },
  {
    name: "Correos Corporativos",
    price: "$30 - $60",
    description:
      "Configuración de correos electrónicos con tu dominio (ej: info@tunegocio.com).",
    icon: "Mail",
  },
  {
    name: "Multi-idioma",
    price: "$100 - $250",
    description:
      "Traducción y configuración del sitio en 2 o más idiomas con selector de idioma.",
    icon: "Languages",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consulta Inicial",
    subtitle: "Gratis",
    description:
      "Conversamos sobre tu proyecto, tus objetivos y lo que necesitas. Sin compromiso.",
    icon: "MessageSquare",
  },
  {
    step: "02",
    title: "Propuesta y Presupuesto",
    description:
      "Te envío una propuesta detallada con el alcance del proyecto, tiempos de entrega y precio final.",
    icon: "FileText",
  },
  {
    step: "03",
    title: "Anticipo del 50%",
    description:
      "Una vez aceptada la propuesta, se inicia el trabajo con un anticipo del 50% del costo total.",
    icon: "CreditCard",
  },
  {
    step: "04",
    title: "Desarrollo y Revisiones",
    description:
      "Desarrollo tu sitio web y te muestro avances para que apruebes o pidas cambios.",
    icon: "Code2",
  },
  {
    step: "05",
    title: "Entrega y Pago Final",
    description:
      "Al aprobar el resultado, se realiza el pago del 50% restante y se hace la entrega final.",
    icon: "CheckCircle",
  },
  {
    step: "06",
    title: "Soporte Post-Lanzamiento",
    description:
      "Dependiendo del paquete, cuentas con soporte técnico después de la entrega.",
    icon: "Headphones",
  },
];
