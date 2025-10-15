import { Layout } from "./components/layout/Layout";
import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ContactSection } from "./components/sections/ContactSection";
import { useForm } from "./hooks/useForm";
import { useScrollTo } from "./hooks/useScrollTo";
import { useMobileMenu } from "./hooks/useMobileMenu";

const App = () => {
  const { formData, errors, isSubmitted, handleInputChange, handleSubmit } =
    useForm();
  const { scrollToSection } = useScrollTo();
  const mobileMenu = useMobileMenu();

  const handleNavigate = (section: string) => {
    scrollToSection(section);
    mobileMenu.close();
  };

  return (
    <Layout
      isMenuOpen={mobileMenu.isOpen}
      onToggleMenu={mobileMenu.toggle}
      onNavigate={handleNavigate}
    >
      <HeroSection
        onNavigateToContact={() => handleNavigate("contacto")}
        onNavigateToServices={() => handleNavigate("servicios")}
      />
      <ServicesSection />
      <ContactSection
        formData={formData}
        errors={errors}
        isSubmitted={isSubmitted}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </Layout>
  );
};

export default App;
