# Guía de Mejoras y Expansión del Proyecto

Esta guía te ayudará a transformar el proyecto en una aplicación más grande, moderna, profesional y con animaciones atractivas.

## 📋 Índice

1. [Agregar Animaciones con Framer Motion](#fase-1-agregar-animaciones)
2. [Expandir con Nuevas Secciones](#fase-2-nuevas-secciones)
3. [Implementar Navegación con React Router](#fase-3-react-router)
4. [Mejoras Visuales Modernas](#fase-4-mejoras-visuales)
5. [Características Profesionales](#fase-5-características-profesionales)
6. [Backend y Base de Datos](#fase-6-backend)
7. [SEO y Performance](#fase-7-optimización)

---

## Fase 1: Agregar Animaciones con Framer Motion

### Paso 1.1: Instalar Framer Motion

```bash
npm install framer-motion
```

### Paso 1.2: Crear Componente de Animación Reutilizable

**Archivo: `src/components/animations/FadeIn.tsx`**

```typescript
import { motion, Variants } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

**Archivo: `src/components/animations/ScaleIn.tsx`**

```typescript
import { motion } from "framer-motion";
import React from "react";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

**Archivo: `src/components/animations/Parallax.tsx`**

```typescript
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 50,
  className = "",
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
```

### Paso 1.3: Actualizar Componentes con Animaciones

**Actualizar: `src/components/sections/HeroSection.tsx`**

```typescript
import React from "react";
import { Button } from "../ui/Button";
import { PRICE } from "../../utils/constants";
import { FadeIn } from "../animations/FadeIn";
import { ScaleIn } from "../animations/ScaleIn";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onNavigateToContact: () => void;
  onNavigateToServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateToContact,
  onNavigateToServices,
}) => {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tu Página Web Profesional por solo{" "}
                <motion.span
                  className="text-blue-600"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {PRICE}
                </motion.span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-xl text-gray-600">
                Impulsa tu negocio con una presencia digital moderna, rápida y
                efectiva. Sin complicaciones, sin costos ocultos.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="primary" onClick={onNavigateToContact}>
                    Contratar Ahora
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="secondary" onClick={onNavigateToServices}>
                    Ver Servicios
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          <ScaleIn delay={0.3}>
            <div className="relative">
              <motion.div
                className="bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-3 h-3 bg-red-500 rounded-full"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-yellow-500 rounded-full"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-green-500 rounded-full"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                  </div>
                  <div className="space-y-3">
                    <motion.div
                      className="h-4 bg-gray-200 rounded w-3/4"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="h-4 bg-gray-200 rounded w-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                      className="h-4 bg-gray-200 rounded w-5/6"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />
                    <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mt-4" />
                  </div>
                </div>
              </motion.div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};
```

---

## Fase 2: Nuevas Secciones

### Paso 2.1: Sección de Testimonios

**Archivo: `src/components/sections/TestimonialsSection.tsx`**

```typescript
import React from "react";
import { Star, Quote } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "María González",
      role: "CEO",
      company: "Boutique Luna",
      content:
        "Excelente servicio. Mi tienda online está funcionando perfectamente y he triplicado mis ventas en solo 2 meses.",
      rating: 5,
      avatar: "MG",
    },
    {
      name: "Carlos Pérez",
      role: "Propietario",
      company: "Café del Sol",
      content:
        "Profesionales, rápidos y muy atentos. La página web refleja exactamente lo que quería para mi negocio.",
      rating: 5,
      avatar: "CP",
    },
    {
      name: "Ana Rodríguez",
      role: "Fundadora",
      company: "Yoga Studio",
      content:
        "Me ayudaron a digitalizar mi negocio. Ahora mis clientes pueden reservar clases directamente desde la web.",
      rating: 5,
      avatar: "AR",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600">
              Más de 100 negocios confían en nosotros
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow relative"
                whileHover={{ y: -5 }}
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} en {testimonial.company}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{testimonial.content}</p>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### Paso 2.2: Sección de Precios/Planes

**Archivo: `src/components/sections/PricingSection.tsx`**

```typescript
import React from "react";
import { Check, Zap, Star, Crown } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { ScaleIn } from "../animations/ScaleIn";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  popular?: boolean;
  color: string;
}

interface PricingSectionProps {
  onNavigateToContact: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onNavigateToContact,
}) => {
  const plans: Plan[] = [
    {
      name: "Básico",
      price: "$20",
      description: "Perfecto para empezar",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      features: [
        "Diseño responsive",
        "1 página",
        "Formulario de contacto",
        "SEO básico",
        "Hosting 1 mes gratis",
        "Soporte 30 días",
      ],
    },
    {
      name: "Profesional",
      price: "$45",
      description: "Para negocios en crecimiento",
      icon: Star,
      color: "from-purple-500 to-purple-600",
      popular: true,
      features: [
        "Todo del plan Básico",
        "Hasta 5 páginas",
        "Blog integrado",
        "Google Analytics",
        "Galería de imágenes",
        "Hosting 3 meses gratis",
        "Soporte 60 días",
        "Redes sociales integradas",
      ],
    },
    {
      name: "Premium",
      price: "$80",
      description: "Solución completa",
      icon: Crown,
      color: "from-amber-500 to-amber-600",
      features: [
        "Todo del plan Profesional",
        "Páginas ilimitadas",
        "E-commerce básico",
        "Sistema de reservas",
        "Panel de administración",
        "Chat en vivo",
        "Hosting 6 meses gratis",
        "Soporte prioritario 90 días",
        "Mantenimiento mensual",
      ],
    },
  ];

  return (
    <section id="precios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Planes Que Se Adaptan a Tu Negocio
            </h2>
            <p className="text-xl text-gray-600">
              Elige el plan perfecto para tus necesidades
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <ScaleIn key={idx} delay={idx * 0.15}>
                <motion.div
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 ${
                    plan.popular ? "border-purple-500 scale-105" : "border-gray-100"
                  }`}
                  whileHover={{ y: -10 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Más Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>

                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">/ una vez</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIdx) => (
                        <motion.li
                          key={featureIdx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIdx * 0.1 }}
                        >
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant={plan.popular ? "gradient" : "secondary"}
                        onClick={onNavigateToContact}
                        className="w-full"
                      >
                        Contratar {plan.name}
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </ScaleIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
```

### Paso 2.3: Sección de Portfolio/Trabajos

**Archivo: `src/components/sections/PortfolioSection.tsx`**

```typescript
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", "E-commerce", "Corporativo", "Landing Pages", "Blogs"];

  const projects: Project[] = [
    {
      id: 1,
      title: "Tienda de Ropa Online",
      category: "E-commerce",
      description: "Tienda online completa con carrito de compras y pagos integrados",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Estudio de Arquitectura",
      category: "Corporativo",
      description: "Sitio web corporativo con galería de proyectos y formulario de cotización",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Restaurante Gourmet",
      category: "Landing Pages",
      description: "Landing page con menú digital y sistema de reservas online",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Blog de Viajes",
      category: "Blogs",
      description: "Blog personal con integración de redes sociales y newsletter",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Tienda de Electrónicos",
      category: "E-commerce",
      description: "E-commerce con filtros avanzados y comparador de productos",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Gimnasio Fitness",
      category: "Landing Pages",
      description: "Sitio web con horarios de clases y sistema de membresías",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    },
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Trabajos Recientes
            </h2>
            <p className="text-xl text-gray-600">
              Proyectos exitosos que impulsan negocios
            </p>
          </div>
        </FadeIn>

        {/* Filtros */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Grid de Proyectos */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="flex gap-2"
                    >
                      <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
```

### Paso 2.4: Sección de FAQ (Preguntas Frecuentes)

**Archivo: `src/components/sections/FAQSection.tsx`**

```typescript
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "¿Cuánto tiempo tarda en estar lista mi página web?",
      answer:
        "Tu página web estará lista en 3-5 días hábiles una vez que tengamos todo el contenido (textos, imágenes, logos). Para proyectos más complejos, el tiempo puede variar.",
    },
    {
      question: "¿Necesito conocimientos técnicos para administrar mi sitio?",
      answer:
        "No, creamos sitios web fáciles de administrar. Te proporcionamos un tutorial completo y soporte técnico durante 30 días para que puedas actualizar tu contenido sin problemas.",
    },
    {
      question: "¿La página será visible en celulares y tablets?",
      answer:
        "Sí, todos nuestros diseños son 100% responsivos. Tu página se verá perfecta en cualquier dispositivo: computadoras, tablets y smartphones.",
    },
    {
      question: "¿Qué incluye el hosting gratuito?",
      answer:
        "El hosting incluye el espacio en servidor, certificado SSL para seguridad, copias de seguridad diarias y soporte técnico. Después del período gratuito, puedes renovarlo desde $5/mes.",
    },
    {
      question: "¿Puedo agregar más funciones después?",
      answer:
        "¡Por supuesto! Puedes agregar funciones como tienda online, blog, sistema de reservas, galería, etc. Te cotizamos las mejoras que necesites en cualquier momento.",
    },
    {
      question: "¿Qué pasa si no me gusta el diseño?",
      answer:
        "Trabajamos contigo hasta que estés 100% satisfecho. Incluimos hasta 2 rondas de revisiones sin costo adicional. Tu conformidad es nuestra prioridad.",
    },
    {
      question: "¿Tendré acceso al código de mi página?",
      answer:
        "Sí, una vez completado el pago, te entregamos todos los archivos del código fuente. Tu página es tuya al 100%.",
    },
    {
      question: "¿Ofrecen mantenimiento continuo?",
      answer:
        "Sí, ofrecemos planes de mantenimiento desde $15/mes que incluyen actualizaciones de seguridad, copias de respaldo, cambios de contenido y soporte prioritario.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas saber antes de empezar
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden"
                initial={false}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## Fase 3: Implementar React Router

### Paso 3.1: Instalar React Router

```bash
npm install react-router-dom
```

### Paso 3.2: Crear Páginas Adicionales

**Archivo: `src/pages/HomePage.tsx`**

```typescript
import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { PortfolioSection } from "../components/sections/PortfolioSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { PricingSection } from "../components/sections/PricingSection";
import { FAQSection } from "../components/sections/FAQSection";
import { ContactSection } from "../components/sections/ContactSection";
import { useScrollTo } from "../hooks/useScrollTo";
import { useForm } from "../hooks/useForm";

export const HomePage: React.FC = () => {
  const { scrollToSection } = useScrollTo();
  const { formData, errors, isSubmitted, handleInputChange, handleSubmit } = useForm();

  return (
    <>
      <HeroSection
        onNavigateToContact={() => scrollToSection("contacto")}
        onNavigateToServices={() => scrollToSection("servicios")}
      />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection onNavigateToContact={() => scrollToSection("contacto")} />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection
        formData={formData}
        errors={errors}
        isSubmitted={isSubmitted}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};
```

**Archivo: `src/pages/BlogPage.tsx`**

```typescript
import React from "react";
import { FadeIn } from "../components/animations/FadeIn";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const BlogPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "10 Razones Por Las Que Tu Negocio Necesita Una Página Web",
      excerpt: "En la era digital, tener presencia online no es opcional...",
      date: "2025-10-10",
      author: "HazMiWeb",
      category: "Negocios",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Cómo Elegir El Diseño Perfecto Para Tu Sitio Web",
      excerpt: "El diseño de tu página web es la primera impresión que...",
      date: "2025-10-05",
      author: "HazMiWeb",
      category: "Diseño",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "SEO Básico: Posiciona Tu Sitio En Google",
      excerpt: "Aprende las técnicas fundamentales para mejorar tu visibilidad...",
      date: "2025-09-28",
      author: "HazMiWeb",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop",
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600">
              Consejos, tutoriales y noticias sobre desarrollo web
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 0.15}>
              <motion.article
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-3">
                    {post.category}
                  </span>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <motion.button
                    className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
```

### Paso 3.3: Actualizar App.tsx con Router

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { useMobileMenu } from "./hooks/useMobileMenu";
import { useScrollTo } from "./hooks/useScrollTo";

const App = () => {
  const mobileMenu = useMobileMenu();
  const { scrollToSection } = useScrollTo();

  const handleNavigate = (section: string) => {
    scrollToSection(section);
    mobileMenu.close();
  };

  return (
    <BrowserRouter>
      <Layout
        isMenuOpen={mobileMenu.isOpen}
        onToggleMenu={mobileMenu.toggle}
        onNavigate={handleNavigate}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
```

### Paso 3.4: Actualizar Navbar para Router

```typescript
import { Link } from "react-router-dom";

// En el Navbar, agregar enlaces a nuevas páginas:
<div className="hidden md:flex space-x-8">
  <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition">
    Blog
  </Link>
  {navItems.map((item) => (
    <button
      key={item.id}
      onClick={() => onNavigate(item.id)}
      className="text-gray-700 hover:text-blue-600 transition"
    >
      {item.label}
    </button>
  ))}
</div>
```

---

## Fase 4: Mejoras Visuales Modernas

### Paso 4.1: Agregar Efectos de Glass Morphism

**Archivo: `src/components/ui/GlassCard.tsx`**

```typescript
import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      className={`backdrop-blur-lg bg-white/30 border border-white/20 rounded-2xl shadow-xl ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};
```

### Paso 4.2: Agregar Gradientes Animados

**Archivo: `src/components/ui/AnimatedGradient.tsx`**

```typescript
import React from "react";
import { motion } from "framer-motion";

export const AnimatedGradient: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
```

### Paso 4.3: Agregar Efectos de Cursor Personalizado

**Archivo: `src/components/ui/CustomCursor.tsx`**

```typescript
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      />
    </>
  );
};
```

### Paso 4.4: Agregar Scroll Progress Bar

**Archivo: `src/components/ui/ScrollProgress.tsx`**

```typescript
import { motion, useScroll } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
```

---

## Fase 5: Características Profesionales

### Paso 5.1: Agregar Loading Screen

**Archivo: `src/components/ui/LoadingScreen.tsx`**

```typescript
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/hazmiweb-removebg-preview.png";

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.img
              src={logo}
              alt="Logo"
              className="w-24 h-24 mx-auto mb-8"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="flex gap-2 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

### Paso 5.2: Agregar Chat Widget (Mock)

**Archivo: `src/components/ui/ChatWidget.tsx`**

```typescript
import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "¡Hola! ¿En qué puedo ayudarte?", sender: "bot" },
  ]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl z-40 flex flex-col"
            style={{ height: "500px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold">HazMiWeb</h3>
                  <p className="text-xs opacity-90">En línea</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.sender === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === "bot"
                        ? "bg-white text-gray-800"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white rounded-b-2xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl z-40 hover:shadow-3xl transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={!isOpen ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </>
  );
};
```

### Paso 5.3: Agregar Newsletter Popup

**Archivo: `src/components/ui/NewsletterPopup.tsx`**

```typescript
import React, { useEffect, useState } from "react";
import { X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

export const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("newsletterPopupSeen");
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000); // Muestra después de 5 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("newsletterPopupSeen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl z-50 max-w-md w-full mx-4"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                ¡No Te Lo Pierdas!
              </h3>
              <p className="text-gray-600 mb-6">
                Suscríbete a nuestro newsletter y recibe consejos exclusivos,
                descuentos especiales y las últimas tendencias en desarrollo web.
              </p>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button variant="gradient" className="w-full" type="submit">
                  Suscribirme Ahora
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                No spam. Puedes cancelar tu suscripción en cualquier momento.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
```

---

## Fase 6: Backend y Base de Datos (Opcional)

### Paso 6.1: Configurar Firebase

```bash
npm install firebase
```

**Archivo: `src/config/firebase.ts`**

```typescript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id",
  measurementId: "G-XXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
```

### Paso 6.2: Servicio para Guardar Contactos

**Archivo: `src/services/contactService.ts`**

```typescript
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import type { FormData } from "../types";

export const saveContact = async (data: FormData) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: new Date(),
      status: "pending",
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving contact:", error);
    return { success: false, error };
  }
};
```

### Paso 6.3: Actualizar useForm para usar Firebase

```typescript
import { saveContact } from "../services/contactService";

// En handleSubmit:
const result = await saveContact(formData);
if (result.success) {
  setIsSubmitted(true);
  // Enviar email de notificación aquí
}
```

---

## Fase 7: SEO y Optimización

### Paso 7.1: Instalar React Helmet

```bash
npm install react-helmet-async
```

**Archivo: `src/components/SEO.tsx`**

```typescript
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "HazMiWeb - Tu Página Web Profesional por $20",
  description = "Creamos páginas web profesionales, modernas y rápidas para impulsar tu negocio. Diseño responsive, SEO optimizado y hosting incluido.",
  keywords = "diseño web, páginas web ecuador, desarrollo web, sitios web baratos, landing pages",
  image = "/og-image.jpg",
  url = "https://hazmiweb.com",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
```

### Paso 7.2: Lazy Loading de Imágenes

**Archivo: `src/components/ui/LazyImage.tsx`**

```typescript
import React, { useState } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};
```

---

## 🎨 Lista de Verificación Final

### Animaciones
- [ ] Framer Motion instalado y configurado
- [ ] Componentes FadeIn, ScaleIn, Parallax creados
- [ ] Animaciones aplicadas a Hero, Services, Portfolio
- [ ] Hover effects en botones y cards
- [ ] Transiciones suaves entre páginas

### Nuevas Secciones
- [ ] Testimonios
- [ ] Precios/Planes
- [ ] Portfolio
- [ ] FAQ
- [ ] Blog

### Navegación
- [ ] React Router configurado
- [ ] Páginas adicionales creadas
- [ ] Enlaces funcionando correctamente
- [ ] Scroll smooth implementado

### Mejoras Visuales
- [ ] Glass morphism effects
- [ ] Gradientes animados
- [ ] Custom cursor (opcional)
- [ ] Scroll progress bar
- [ ] Loading screen

### Características Profesionales
- [ ] Chat widget
- [ ] Newsletter popup
- [ ] Lazy loading de imágenes
- [ ] SEO optimizado
- [ ] Firebase integrado (opcional)

### Performance
- [ ] Imágenes optimizadas
- [ ] Code splitting
- [ ] Lazy loading implementado
- [ ] Bundle size verificado

---

## 🚀 Comandos de Desarrollo

```bash
# Instalar todas las dependencias adicionales
npm install framer-motion react-router-dom react-helmet-async firebase

# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Lint
npm run lint
```

---

## 📝 Notas Finales

1. **Implementa por fases**: No intentes hacer todo a la vez
2. **Prueba continuamente**: Verifica que todo funcione después de cada cambio
3. **Optimiza imágenes**: Usa servicios como TinyPNG antes de subirlas
4. **Monitorea el performance**: Usa Lighthouse para medir mejoras
5. **Backup**: Haz commits frecuentes en Git

¡Con estas mejoras, tu proyecto se verá profesional, moderno y escalable!
