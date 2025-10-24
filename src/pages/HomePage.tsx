import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { PortfolioSection } from "../components/sections/PortfolioSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { PricingSection } from "../components/sections/PricingSection";
import { FAQSection } from "../components/sections/FAQSection";
import { ContactSection } from "../components/sections/ContactSection";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/common/StructuredData";
import { organizationSchema, serviceSchema, websiteSchema, faqSchema } from "../utils/schemas";
import { useScrollTo } from "../hooks/useScrollTo";
import { useForm } from "../hooks/useForm";

export const HomePage: React.FC = () => {
  const { scrollToSection } = useScrollTo();
  const { formData, errors, isSubmitted, handleInputChange, handleSubmit } = useForm();
  const location = useLocation();

  // Manejar scroll automático cuando se navega con hash desde otras páginas
  useEffect(() => {
    if (location.hash) {
      // Extraer el ID de la sección del hash (ej: "#contacto" -> "contacto")
      const sectionId = location.hash.substring(1);
      // Esperar un momento para que el DOM esté listo
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location, scrollToSection]);

  return (
    <>
      <SEO />
      <StructuredData data={organizationSchema} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={faqSchema} />
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
