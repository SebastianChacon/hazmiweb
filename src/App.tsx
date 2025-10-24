import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { ChatWidget } from "./components/ui/ChatWidget";
import { ScrollToTop } from "./components/ScrollToTop";
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
      <ScrollToTop />
      <LoadingScreen />
      <Layout
        isMenuOpen={mobileMenu.isOpen}
        onToggleMenu={mobileMenu.toggle}
        onNavigate={handleNavigate}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </Layout>
      <ChatWidget />
    </BrowserRouter>
  );
};

export default App;
