import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { ChatWidget } from "./components/ui/ChatWidget";
import { NewsletterPopup } from "./components/ui/NewsletterPopup";
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
      <LoadingScreen />
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
      <ChatWidget />
      <NewsletterPopup />
    </BrowserRouter>
  );
};

export default App;
