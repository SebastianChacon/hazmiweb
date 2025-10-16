import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { PortfolioSection } from "../components/sections/PortfolioSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { PricingSection } from "../components/sections/PricingSection";
import { FAQSection } from "../components/sections/FAQSection";
import { ContactSection } from "../components/sections/ContactSection";
import { SEO } from "../components/SEO";
import { useScrollTo } from "../hooks/useScrollTo";
import { useForm } from "../hooks/useForm";

export const HomePage: React.FC = () => {
  const { scrollToSection } = useScrollTo();
  const { formData, errors, isSubmitted, handleInputChange, handleSubmit } = useForm();

  return (
    <>
      <SEO />
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
